import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

const Notification = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Notifications</Text>

      {/* Notifications List */}
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        
        {/* 1st Notification */}
        <View style={styles.notificationBox}>
          <Text style={styles.time}>11:34 AM</Text>
          <View style={styles.notificationContent}>
            <Text style={styles.contextText}>Nadapa nahulog sa hagdan. Come help please.</Text>
            <Text style={styles.subText}>Holy Rosary BLDG. | 3rd Floor</Text>
          </View>
        </View>

        {/* 2nd Notification */}
        <View style={styles.notificationBox}>
          <Text style={styles.time}>11:45 AM</Text>
          <View style={styles.notificationContent}>
            <Text style={styles.contextText}>Nahimatay po siya</Text>
            <Text style={styles.subText}>Holy Rosary BLDG. | 4th Floor</Text>
          </View>
        </View>

        {/* 3rd Notification */}
        <View style={styles.notificationBox}>
          <Text style={styles.time}>12:10 PM</Text>
          <View style={styles.notificationContent}>
            <Text style={styles.contextText}>Nadapa, dumudugo po ng sobra. Pa respond naman po.</Text>
            <Text style={styles.subText}>Others | Covered Court</Text>
          </View>
        </View>

                {/* 1st Notification */}
                <View style={styles.notificationBox}>
          <Text style={styles.time}>11:34 AM</Text>
          <View style={styles.notificationContent}>
            <Text style={styles.contextText}>Nadapa nahulog sa hagdan. Come help please.</Text>
            <Text style={styles.subText}>Holy Rosary BLDG. | 3rd Floor</Text>
          </View>
        </View>

        {/* 2nd Notification */}
        <View style={styles.notificationBox}>
          <Text style={styles.time}>11:45 AM</Text>
          <View style={styles.notificationContent}>
            <Text style={styles.contextText}>Nahimatay po siya</Text>
            <Text style={styles.subText}>Holy Rosary BLDG. | 4th Floor</Text>
          </View>
        </View>

        {/* 3rd Notification */}
        <View style={styles.notificationBox}>
          <Text style={styles.time}>12:10 PM</Text>
          <View style={styles.notificationContent}>
            <Text style={styles.contextText}>Nadapa, dumudugo po ng sobra. Pa respond naman po.</Text>
            <Text style={styles.subText}>Others | Covered Court</Text>
          </View>
        </View>

                {/* 1st Notification */}
                <View style={styles.notificationBox}>
          <Text style={styles.time}>11:34 AM</Text>
          <View style={styles.notificationContent}>
            <Text style={styles.contextText}>Nadapa nahulog sa hagdan. Come help please.</Text>
            <Text style={styles.subText}>Holy Rosary BLDG. | 3rd Floor</Text>
          </View>
        </View>

        {/* 2nd Notification */}
        <View style={styles.notificationBox}>
          <Text style={styles.time}>11:45 AM</Text>
          <View style={styles.notificationContent}>
            <Text style={styles.contextText}>Nahimatay po siya</Text>
            <Text style={styles.subText}>Holy Rosary BLDG. | 4th Floor</Text>
          </View>
        </View>

        {/* 3rd Notification */}
        <View style={styles.notificationBox}>
          <Text style={styles.time}>12:10 PM</Text>
          <View style={styles.notificationContent}>
            <Text style={styles.contextText}>Nadapa, dumudugo po ng sobra. Pa respond naman po.</Text>
            <Text style={styles.subText}>Others | Covered Court</Text>
          </View>
        </View>

                {/* 1st Notification */}
                <View style={styles.notificationBox}>
          <Text style={styles.time}>11:34 AM</Text>
          <View style={styles.notificationContent}>
            <Text style={styles.contextText}>Nadapa nahulog sa hagdan. Come help please.</Text>
            <Text style={styles.subText}>Holy Rosary BLDG. | 3rd Floor</Text>
          </View>
        </View>

        {/* 2nd Notification */}
        <View style={styles.notificationBox}>
          <Text style={styles.time}>11:45 AM</Text>
          <View style={styles.notificationContent}>
            <Text style={styles.contextText}>Nahimatay po siya</Text>
            <Text style={styles.subText}>Holy Rosary BLDG. | 4th Floor</Text>
          </View>
        </View>

        {/* 3rd Notification */}
        <View style={styles.notificationBox}>
          <Text style={styles.time}>12:10 PM</Text>
          <View style={styles.notificationContent}>
            <Text style={styles.contextText}>Nadapa, dumudugo po ng sobra. Pa respond naman po.</Text>
            <Text style={styles.subText}>Others | Covered Court</Text>
          </View>
        </View>



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
    backgroundColor: '#0d0c0c',
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
    shadowOffset: { width: 5, height: 2 },
    shadowOpacity: 1,
    shadowRadius: 10,
    elevation: 3,
    borderWidth: 1,
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
