import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView, Alert, ActivityIndicator, RefreshControl } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import AnimatedGradientBackground2 from '../../components/AnimatedGradientBackground2';

// Helper function to parse and format timestamps
const parseTimestamp = (timestamp) => {
  try {
    // Assuming timestamp might come in a non-ISO format
    // Example: "DD/MM/YYYY HH:mm:ss" -> Convert to ISO 8601
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
      const sortedData = data
        .map(notification => ({
          ...notification,
          timestamp: parseTimestamp(notification.timestamp),
        }))
        .sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp));
        
      setNotifications(sortedData); // Update state with sorted notifications
    } catch (error) {
      Alert.alert("Error", "Failed to load notifications");
      console.error("Fetch error:", error);
    } finally {
      setLoading(false);
      setRefreshing(false); // Stop refreshing after fetch completes
    }
    };

  useEffect(() => {
    fetchNotifications();
  }, []);

  const onRefresh = () => {
    setRefreshing(true); // Show refresh spinner
    fetchNotifications(); // Refetch data
  };

  return (
    <SafeAreaView style={styles.container}>
      <AnimatedGradientBackground2/>
      <Text style={styles.title}>Report Logs</Text>

      {/* Display loading indicator if data is still loading */}
      {loading ? (
        <ActivityIndicator size="large" color="#fff" />
      ) : (
        <ScrollView
          contentContainerStyle={styles.scrollContainer}
          refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
        >
          {notifications.length === 0 ? (
            <Text style={styles.noNotifications}>Things are still quite quiet . . .</Text>
          ) : (
            notifications.map((notification) => (
              <View key={notification.id} style={styles.notificationBox}>
                <Text style={styles.time}>{new Date(notification.timestamp).toLocaleTimeString()}</Text>

                {/* Context and location display */}
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
