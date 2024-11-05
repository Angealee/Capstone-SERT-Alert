// app/components/NotificationHandler.js
import * as Notifications from 'expo-notifications';
import { useEffect, useState } from 'react';

// Custom hook to handle notifications for logged-in User2 (SERT Members)
export const useNotificationHandler = (isUserLoggedIn) => {
  const [notification, setNotification] = useState(null);

  useEffect(() => {
    if (!isUserLoggedIn) return; // Exit if User2 is not logged in

    // Request permissions on component mount
    requestPermissions();

    // Set the handler for notification behavior (heads-up alerts, sound, badge)
    Notifications.setNotificationHandler({
      handleNotification: async () => ({
        shouldShowAlert: true,      // Show heads-up alert
        shouldPlaySound: true,      // Enable sound
        shouldSetBadge: true,       // Display badge (optional)
      }),
    });

    // Listen for incoming notifications and update state
    const subscription = Notifications.addNotificationReceivedListener((notification) => {
      setNotification(notification);
    });

    // Clean up listener on component unmount
    return () => subscription.remove();
  }, [isUserLoggedIn]); // Depend on login status

  // Request notification permissions if not already granted
  const requestPermissions = async () => {
    const { status } = await Notifications.getPermissionsAsync();
    if (status !== 'granted') {
      await Notifications.requestPermissionsAsync();
    }
  };

  return { notification };
};

// Function to send a notification for emergencies to logged-in User2 (SERT Members)
export const sendEmergencyNotification = async (isUserLoggedIn) => {
  if (!isUserLoggedIn) {
    console.log("User is not logged in. Notification will not be sent.");
    return;
  }

  // Schedule an immediate notification with heads-up alert properties
  await Notifications.scheduleNotificationAsync({
    content: {
      title: "Emergency Report 🚨",
      body: "An emergency has been reported! Tap to view details.",
      sound: 'default',                           // Default notification sound
      priority: Notifications.AndroidNotificationPriority.MAX, // High priority for heads-up
      vibrate: [0, 250, 250, 250],                // Custom vibration pattern
    },
    trigger: null, // Trigger immediately
  });
};
