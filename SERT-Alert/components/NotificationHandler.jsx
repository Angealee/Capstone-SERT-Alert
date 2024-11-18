import * as Notifications from 'expo-notifications';
import { useState, useEffect } from 'react';
import { Platform } from 'react-native';
import { useAuth } from '../hooks/useAuth';
import AsyncStorage from '@react-native-async-storage/async-storage';

// Function to request notification permissions
export const requestPermissions = async () => {
  const { status } = await Notifications.getPermissionsAsync();
  if (status !== "granted") {
    const { status: newStatus } = await Notifications.requestPermissionsAsync();
    if (newStatus !== "granted") {
      console.warn("Notification permissions not granted.");
      return false;
    }
  }
  await configureNotificationChannel();
  return true;
};


// Configure notification channels (Android)
const configureNotificationChannel = async () => {
  if (Platform.OS === 'android') {
    await Notifications.setNotificationChannelAsync('emergency', {
      name: 'Emergency Notifications',
      importance: Notifications.AndroidImportance.MAX, // Ensures heads-up priority
      sound: 'default',
      vibrationPattern: [250, 400, 400, 400],
      lightColor: '#FF231F7C',
    });
  }
};

// Custom hook to handle notifications
export const useNotificationHandler = () => {
  const { isAuthenticated } = useAuth(); // Access login status from context
  const [notification, setNotification] = useState(null);

  useEffect(() => {
    if (!!isAuthenticated) return;

    // Set notification handler
    Notifications.setNotificationHandler({
      handleNotification: async () => ({
        shouldShowAlert: true,
        shouldPlaySound: true,
        shouldSetBadge: true,
      }),
    });

    const setupNotificationListener = async () => {
      const hasPermission = await requestPermissions();
      if (!hasPermission) return;

      const subscription = Notifications.addNotificationReceivedListener((notification) => {
        setNotification(notification);
      });

      return () => subscription.remove();
    };

    setupNotificationListener();
  }, [isAuthenticated]);

  return { notification };
};

// Function to send an emergency notification
export const sendEmergencyNotification = async () => {
  const isAuthenticated = JSON.parse(await AsyncStorage.getItem('isAuthenticated'));
  if (!isAuthenticated) {
    console.warn("User not logged in. Notification will not be sent.");
    return;
  }

  const hasPermission = await requestPermissions();
  if (!hasPermission) {
    console.warn("Cannot trigger notification due to lack of permissions.");
    return;
  }

  console.log("Triggering heads-up notification");
  try {
    await Notifications.scheduleNotificationAsync({
      content: {
        title: `Emergency Report 🚨`, // Dynamic timestamp
        body: "An emergency has been reported! Tap to view details.",
        data: {
          building: "Mock Building",
          floor: "Mock Floor",
          context: "Mock emergency context for testing.",
        },
        sound: 'default',
        priority: Notifications.AndroidNotificationPriority.MAX,
        vibrate: [250, 400, 400, 400],
      },
      trigger: null,
    });
    console.log("Notification successfully scheduled");
  } catch (error) {
    console.error("Error scheduling notification:", error);
  }
};
