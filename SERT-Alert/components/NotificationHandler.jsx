import * as Notifications from 'expo-notifications';
import { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

// Custom hook to handle notifications for logged-in User2 (SERT Members)
export const useNotificationHandler = (isUserLoggedIn) => {
  const [notification, setNotification] = useState(null);

  useEffect(() => {
    if (!isUserLoggedIn) return;

    // Request notification permissions
    const requestPermissions = async () => {
      const { status } = await Notifications.getPermissionsAsync();
      console.log("Notification Permission Status:", status); // Log the status
      if (status !== "granted") {
        const { status: newStatus } = await Notifications.requestPermissionsAsync();
        console.log("New Notification Permission Status:", newStatus); // Log after requesting permissions
      }
    };

    requestPermissions();

    Notifications.setNotificationHandler({
      handleNotification: async () => ({
        shouldShowAlert: true,
        shouldPlaySound: true,
        shouldSetBadge: true,
      }),
    });

    const subscription = Notifications.addNotificationReceivedListener((notification) => {
      setNotification(notification);
    });

    return () => subscription.remove();
  }, [isUserLoggedIn]);

  return { notification };
};

// Function to send a notification for emergencies to logged-in User2 (SERT Members)
export const sendEmergencyNotification = async () => {
  const isUserLoggedIn = JSON.parse(await AsyncStorage.getItem('isAuthenticated'));

    await Notifications.scheduleNotificationAsync({
      content: {
        title: "Emergency Report 🚨",
        body: "An emergency has been reported! Tap to view details.",
        data: {
          building: "Mock Building",
          floor: "Mock Floor",
          context: "Mock emergency context for presentation purposes.",
        },
        sound: 'default',
        priority: Notifications.AndroidNotificationPriority.MAX,
        vibrate: [250, 400, 400, 400],
      },
      trigger: null,
    })
};
