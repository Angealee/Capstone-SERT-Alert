import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView, Alert } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const Notification = () => {
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    // Fetch notifications
    const fetchNotifications = async () => {
      try {
        const apiUrl = "https://localhost:7296/api/GetReportList"; //API URL for GET request: https://localhost:7296/api/GetReportList //Sample API: https://jsonplaceholder.typicode.com/posts
        const response = await fetch(apiUrl, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        });
        const data = await response.json();
        setNotifications(data); // Update state with fetched notifications
      } catch (error) {
        Alert.alert("Error", "Failed to load notifications");
        console.error("Fetch error:", error);
      }
    };

    fetchNotifications();
  }, []); 

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Report Logs</Text>
      {/* Notifications List */}
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {notifications.length === 0 ? (
          <Text style={styles.noNotifications}>Things are still quite quiet . . . </Text>
        ) : (
          notifications.map((notification) => (
            // for displaying time
            <View key={notification.id} style={styles.notificationBox}>
              <Text style={styles.time}>{new Date(notification.timestamp).toLocaleTimeString()}</Text>

              {/* this is for displaying context, subject to change still */}
              <View style={styles.notificationContent}>
                <Text style={styles.contextText}>{notification.title}</Text>
                
                {/* this is for displaying building and floor location, subject to change still */}
                <Text style={styles.subText}>
                  {notification.id} | {notification.userId}
                </Text>
              </View>
            </View>
          ))
        )}
      </ScrollView>
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
    marginRight: 20,
    borderRadius: 20,
    color: '#faf5f5',
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
  time: {
    fontSize: 14,
    color: '#888',
    marginRight: 10,
    fontWeight: '500',
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
