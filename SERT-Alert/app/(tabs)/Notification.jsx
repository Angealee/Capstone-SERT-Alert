import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView, Alert, ActivityIndicator, RefreshControl, Button } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import AnimatedGradientBackground2 from '../../components/AnimatedGradientBackground2';
import * as Notifications from "expo-notifications";
import AsyncStorage from '@react-native-async-storage/async-storage';

// Helper function to parse and format timestamps
const parseTimestamp = (timestamp) => {
  if (!timestamp) {
    console.warn("Missing or undefined timestamp:", timestamp);
    return new Date().toISOString(); // Fallback to current date
  }

  try {
    if (timestamp.includes("/")) {
      const [date, time] = timestamp.split(" ");
      const [day, month, year] = date.split("/");
      return new Date(`${year}-${month}-${day}T${time}`).toISOString();
    }
    return new Date(timestamp).toISOString(); // Assume it's ISO 8601 if not formatted
  } catch {
    console.error("Invalid timestamp format:", timestamp);
    return new Date().toISOString(); // Fallback to the current date if parsing fails
  }
};

const Notification = () => {
  const [notifications, setNotifications] = useState([]);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const [currentCount, setCurrentCount] = useState(0); // Current number of notifications
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false); // Track login state
  let pollingInterval = null;

  useEffect(() => {
    const requestPermissions = async () => {
      const { status } = await Notifications.requestPermissionsAsync();
      if (status !== 'granted') {
        Alert.alert('Permission required', 'Notification permission is required for heads-up notifications to work.');
      }
    };
    requestPermissions();
  }, []);
  
  const fetchNotifications = async () => {
    try {
      const apiUrl = "http://192.168.1.14:5117/api/GetReportList"; // API URL
      const response = await fetch(apiUrl, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const data = await response.json();

      // Parse and sort notifications by timestamp in descending order
      const sortedData = data.map((notification) => ({
        ...notification, // create a new object for each notification
        timestamp: parseTimestamp(notification.Timestamp),
      }))
      .sort((a, b) => new Date(b.Timestamp) - new Date(a.Timestamp));

      setNotifications(sortedData); // Update state with sorted notifications

      // Retrieve last checked count from AsyncStorage
      const storedCount = JSON.parse(await AsyncStorage.getItem('lastCheckedCount')) || 0;

      // Check for new notifications only if there's an increase
      if (data.length > storedCount) {
        console.log(`New notifications detected. Current: ${storedCount}, New: ${data.length}`);
        triggerHeadsUpNotification();
      }

      // Update the current count and save it in AsyncStorage
      setCurrentCount(data.length);
      await AsyncStorage.setItem('lastCheckedCount', JSON.stringify(data.length));
    } catch (error) {
      Alert.alert("Error", "Failed to load notifications");
      console.error("Fetch error:", error);
    } finally {
      setLoading(false);
      setRefreshing(false); // Stop refreshing after fetch completes
    }
  };

  const triggerHeadsUpNotification = async () => {
    console.log("Triggering heads-up notification");
    try {
      await Notifications.scheduleNotificationAsync({
        content: {
          title: "New Emergency Report 🚨",
          body: "A new emergency report has been submitted!",
          sound: "default",
        },
        trigger: null,
      });
      console.log("Notification successfully scheduled");
    } catch (error) {
      console.error("Error scheduling notification:", error);
    }
  };

  // Polling setup
  useEffect(() => {
    const checkLoginStatus = async () => {
      const loggedIn = JSON.parse(await AsyncStorage.getItem('isAuthenticated'));
      setIsUserLoggedIn(loggedIn);
      
      // Retrieve last checked count if logged in
      if (loggedIn) {
        const storedCount = JSON.parse(await AsyncStorage.getItem('lastCheckedCount')) || 0;
        setCurrentCount(storedCount);
      }
    };
    checkLoginStatus();

    if (isUserLoggedIn) {
      // Start polling when the user is logged in
      pollingInterval = setInterval(fetchNotifications, 5000); // Poll every 5 seconds
    } else {
      // Stop polling when the user logs out
      clearInterval(pollingInterval);
    }

    // Clean up the interval on component unmount
    return () => clearInterval(pollingInterval);
  }, [isUserLoggedIn]);

  const onRefresh = () => {
    setRefreshing(true);
    fetchNotifications();
  };

  return (
    <SafeAreaView style={styles.container}>
      <AnimatedGradientBackground2/>
      <Text style={styles.title} className="text-2xl font-psemibold text-white mt-2">Report Logs</Text>
      
      {/* Test Notification Button */}
      <Button title="Test Heads-Up Notification" onPress={triggerHeadsUpNotification} color="#4b543b" />

      {loading ? (
        <ActivityIndicator size="large" color="#fff" />
      ) : (
        <ScrollView 
          className="p-7 mb-20 shadow-lg"
          style={{ backgroundColor:'#ECA766', borderRadius: 30 }}
          contentContainerStyle={styles.scrollContainer}
          refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
        >
          {notifications.length === 0 ? (
            <Text style={styles.noNotifications}>Things are still quite quiet . . .</Text>
          ) : (
            notifications.map((notification, index) => (
              <View key={notification.id || `notification-${index}`} style={styles.notificationBox}>
                <View style={styles.dateTimeContainer}>
                  <Text style={styles.date}>
                    {new Date(notification.Timestamp).toLocaleDateString(undefined, {
                      month: 'long',
                      day: 'numeric',
                      year: 'numeric',
                    })}
                  </Text>
                  <Text style={styles.time}>
                    {new Date(notification.timestamp).toLocaleTimeString(undefined, {
                      hour: '2-digit',
                      minute: '2-digit',
                    })}
                  </Text>
                </View>
                <View style={styles.notificationContent}>
                  <Text style={styles.contextText}>{notification.context}</Text>
                  <Text style={styles.subText}>
                    {notification.building} | {notification.floorLocation}
                  </Text>
                </View>
              </View>
            ))
          )}
        </ScrollView>
      )}
    </SafeAreaView>
  );
};

export default Notification;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EC4443',
    padding: 20,
  },
  title: {
    fontSize: 24,
    padding: 20,
    marginTop: 20,
    marginBottom: 20,
    backgroundColor: '#4b543b',
    borderRadius: 30,
    alignItems: 'center'
  },
  scrollContainer: {
    flexGrow: 1,
  },
  noNotifications: {
    fontSize: 16,
    color: '#fff',
    textAlign: 'center',
    marginTop: 50,
  },
  notificationBox: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 15,
    marginBottom: 15,
    alignItems: 'flex-start',
    shadowColor: '#000',
    shadowOffset: { width: 3, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    elevation: 4,
    borderWidth: 2,
    borderColor: '#E0E0E0',
  },
  dateTimeContainer: {
    flexDirection: 'column',
    marginRight: 10,
  },
  time: {
    fontSize: 14,
    color: '#888',
    textAlign: 'right',
    fontWeight: '500',
  },
  date: {
    fontSize: 14,
    color: '#888',
    marginBottom: 4, // Space between date and notification content
  },  
  notificationContent: {
    flex: 1,
  },
  contextText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
    marginBottom: 4,
  },
  subText: {
    fontSize: 14,
    color: '#666',
  },
});
