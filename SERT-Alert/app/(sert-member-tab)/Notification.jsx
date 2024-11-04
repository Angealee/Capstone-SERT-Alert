import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView, Alert, ActivityIndicator } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const Notification = () => {
  const [notifications, setNotifications] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch notifications
    const fetchNotifications = async () => {
      try {
        const apiUrl = "https://192.168.0.15:7296/api/GetReportList"; // API URL
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
      } finally {
        setLoading(false); // Set loading to false after fetch completes
      }
    };

    fetchNotifications();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Report Logs</Text>

      {/* Display loading indicator if data is still loading */}
      {loading ? (
        <ActivityIndicator size="large" color="#fff" />
      ) : (
        <ScrollView contentContainerStyle={styles.scrollContainer}>
          {notifications.length === 0 ? (
            <Text style={styles.noNotifications}>Things are still quite quiet . . .</Text>
          ) : (
            notifications.map((notification) => (
              <View key={notification.id} style={styles.notificationBox}>
                <Text style={styles.time}>{new Date(notification.timestamp).toLocaleTimeString()}</Text>

                {/* Context and location display */}
                <View style={styles.notificationContent}>
                  <Text style={styles.contextText}>{notification.title}</Text>
                  <Text style={styles.subText}>
                    {notification.id} | {notification.userId}
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
