import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView, Alert, ActivityIndicator, RefreshControl, Button } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRef } from 'react';
import AnimatedGradientBackground2 from '../../components/AnimatedGradientBackground2';
import { sendEmergencyNotification, requestPermissions } from '../../components/NotificationHandler'; // Import requestPermissions
import { useAuth } from '../../hooks/useAuth';
import AsyncStorage from '@react-native-async-storage/async-storage';
import EmergencyModal from '../../components/EmergencyModal';

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
  const { isAuthenticated } = useAuth();
  const [notifications, setNotifications] = useState([]);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const [currentCount, setCurrentCount] = useState(0);
  const [emergencyData, setEmergencyData] = useState({}); // State for emergency data 
  const [modalVisible, setModalVisible] = useState(false); // State to control modal visibility
  const pollingInterval = useRef(null);
  const [isPolling, setIsPolling] = useState(false);
  
  // Handle "Respond" button action
  const handleRespond = () => {
    setModalVisible(false);
    // Logic to mark the notification as responded or navigate to response screen
  };

  // Handle "Decline" button action
  const handleDecline = () => {
    setModalVisible(false);
    // Logic to decline the notification or close modal
  };

  // Effect to initialize polling when the user is logged in
  useEffect(() => {
    if (isAuthenticated) {
      initializePolling();
    } else {
      cleanupPolling();
    }

    return cleanupPolling();
  }, [isAuthenticated]);

  const initializePolling = async () => {
    try {
      const storedCount = JSON.parse(await AsyncStorage.getItem('lastCheckedCount')) || 0;
      setCurrentCount(storedCount);
      pollingInterval.current = setInterval(fetchNotifications, 5000);
    } catch (error) {
      console.error('Failed to initialize polling:', error);
    }
  };

  const cleanupPolling = () => {
    if (pollingInterval.current) {
      clearInterval(pollingInterval.current);
      pollingInterval.current = null;
    }
  };

  const fetchNotifications = async () => {
    if (isPolling) return;
      setIsPolling(true);
    try {
      const hasPermission = await requestPermissions(); // Fix: Use imported function
      const apiUrl = "https://sertwebapp-c0hrepa2d9a7afem.southeastasia-01.azurewebsites.net/api/GetReportList"; // API URL: https://sertwebapp-c0hrepa2d9a7afem.southeastasia-01.azurewebsites.net/api/GetReportList
      const response = await fetch(apiUrl, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const data = await response.json();

      const sortedData = data.map((notification) => ({
        ...notification, // create a new object for each notification
        timestamp: parseTimestamp(notification.Timestamp),
      }))
      .sort((a, b) => new Date(b.Timestamp) - new Date(a.Timestamp));

      setNotifications(sortedData);

      const storedCount = JSON.parse(await AsyncStorage.getItem('lastCheckedCount')) || 0;

      // Check for new notifications
      if (data.length > storedCount) {
        await sendEmergencyNotification();
        
        const latestNotification = sortedData[0];

        setEmergencyData(
          {
            building: latestNotification.building || "N/A",
            floorLocation: latestNotification.floorLocation || "N/A",
            context: latestNotification.context || "N/A",
            image: latestNotification.image ? `data:image/jpeg;base64,${latestNotification.image}` : null,
          }
      );
        setModalVisible(true);
    }
      setCurrentCount(data.length);
      await AsyncStorage.setItem('lastCheckedCount', JSON.stringify(data.length));
    } catch (error) {
      Alert.alert("Wait", "Notifications are reloading");
      console.error("Fetch error:", error);
    } finally {
      setLoading(false);
      setIsPolling(false);
      setRefreshing(false);
    }
  };
  

  const onRefresh = () => {
    setRefreshing(true);
    fetchNotifications();
  };

  return (
    <SafeAreaView style={styles.container}>
      <AnimatedGradientBackground2/>
      <Text style={styles.title} className="text-2xl font-psemibold text-white mt-2">Report Logs</Text>
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
      <EmergencyModal
        visible={modalVisible}
        emergencyData={emergencyData}
        onRespond={handleRespond}
        onDecline={handleDecline}
      />

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
