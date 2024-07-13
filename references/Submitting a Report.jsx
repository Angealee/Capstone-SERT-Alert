// Submitting a Report:


// ReportIncidentScreen.jsx
import React, { useState } from 'react';
import { View, TextInput, Button, Text } from 'react-native';
import { collection, addDoc } from 'firebase/firestore';
import { db } from './firebaseConfig';

const ReportIncidentScreen = () => {
  const [location, setLocation] = useState('');
  const [description, setDescription] = useState('');
  const [picture, setPicture] = useState(null); // Handle picture upload if needed

  const handleReport = async () => {
    try {
      await addDoc(collection(db, 'reports'), {
        location,
        description,
        picture, // If picture upload is handled
        timestamp: new Date(),
      });
      console.log('Report submitted successfully');
      // Optionally, show a success message to the user
    } catch (error) {
      console.error('Error submitting report:', error);
      // Optionally, show an error message to the user
    }
  };

  return (
    <View>
      <Text>Report an Incident</Text>
      <TextInput
        placeholder="Location"
        value={location}
        onChangeText={setLocation}
      />
      <TextInput
        placeholder="Description"
        value={description}
        onChangeText={setDescription}
      />
      {/* Add picture upload component if needed */}
      <Button title="Submit Report" onPress={handleReport} />
    </View>
  );
};

export default ReportIncidentScreen;



// 3. Storing Reports in Firestore
// This step remains the same. When the user submits the form, store the report details in a Firestore collection named reports.

// 4. Notification to SERT Members (Optional)
// This step remains the same. You can use Firebase Cloud Messaging (FCM) or another notification service to notify SERT members when a new report is submitted.

// 5. Displaying Reports to SERT Members
// SERT members need to authenticate to view the reports. Here's an example of how the SERT dashboard might look:
