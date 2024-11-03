import React, {useState, useEffect} from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

const Notification = () => {
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    // Fetch notifications
    const fetchNotifications = async () => {
      try {
        const apiUrl = "https://jsonplaceholder.typicode.com/posts"; // Sample API URL for GET request //https://localhost:7296/api/GetReportList //https://jsonplaceholder.typicode.com/posts
        const response = await fetch(apiUrl, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        });
        const data = await response.json();
        setNotifications(data); // Update state na may fetched notifications
      } catch (error) {
        Alert.alert("Error", "Failed to fetch notifications");
        console.error("Fetch error:", error);
      }
    };

    fetchNotifications();
  }, []); 

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Notifications</Text>

      {/* Notifications List */}
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {notifications.map((notification) => (
          
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
        ))}
      </ScrollView>
    </View>
  );
};

export default Notification;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FA7017',
    padding: 20,
  },
  title: {
    fontSize: 24,
    padding: 20,
    marginTop: 20,
    marginBottom: 20,
    marginRight: 20,
    borderRadius: 20,
    // backgroundColor: '#0d0c0c',
    color: '#faf5f5',
  },
  scrollContainer: {
    flexGrow: 1,
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
    shadowOpacity: 0,
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
