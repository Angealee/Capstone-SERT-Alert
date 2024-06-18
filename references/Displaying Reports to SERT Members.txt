Displaying Reports to SERT Members
SERT members need to authenticate to view the reports. Here's an example of how the SERT dashboard might look:

// SERTDashboard.jsx
import React, { useEffect, useState } from 'react';
import { View, Text, FlatList } from 'react-native';
import { collection, onSnapshot } from 'firebase/firestore';
import { db } from './firebaseConfig';

const SERTDashboard = () => {
  const [reports, setReports] = useState([]);

  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, 'reports'), (snapshot) => {
      const reportsData = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setReports(reportsData);
    });

    return () => unsubscribe();
  }, []);

  return (
    <View>
      <Text>SERT Dashboard</Text>
      <FlatList
        data={reports}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View>
            <Text>Location: {item.location}</Text>
            <Text>Description: {item.description}</Text>
            {item.picture && <Image source={{ uri: item.picture }} />} {/* Handle picture display if needed */}
            <Text>Timestamp: {item.timestamp.toDate().toString()}</Text>
          </View>
        )}
      />
    </View>
  );
};

export default SERTDashboard;
