// EmergencyModal.jsx
import React, { useEffect, useState } from 'react';
import { View, Text, Button, Image, Modal, StyleSheet, ActivityIndicator } from 'react-native';

const EmergencyModal = ({ visible, onRespond, onDecline }) => {
    const [emergencyData, setEmergencyData] = useState({
        building: "N/A",
        floorLocation: "N/A",
        context: "N/A",
        image: null,
    });
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        // Fetch the latest emergency report when the modal becomes visible
        if (visible) {
            fetchLatestEmergency();
        }
    }, [visible]);

    const fetchLatestEmergency = async () => {
        setIsLoading(true);
        try {
            const response = await fetch('http://192.168.1.14:5117/api/GetLatestReport'); // Adjust endpoint as needed
            if (response.ok) {
                const data = await response.json();
                setEmergencyData({
                    building: data.building || "N/A",
                    floorLocation: data.floorLocation || "N/A",
                    context: data.context || "N/A",
                    image: data.image ? `data:image/jpeg;base64,${data.image}` : null,
                });
            } else {
                console.error("Failed to fetch emergency data");
            }
        } catch (error) {
            console.error("Error fetching emergency data:", error);
        } finally {
            setIsLoading(false);
        }
    };

    return (
          <Modal visible={visible} animationType="slide" transparent={true}>
          <View style={styles.modalContainer}>
              <View style={styles.modalContent}>
                  <Text style={styles.title}>Emergency Alert</Text>
                  <Text style={styles.detail}>Building: {emergencyData?.building || "N/A"}</Text>
                  <Text style={styles.detail}>Floor: {emergencyData?.floorLocation || "N/A"}</Text>
                  <Text style={styles.detail}>Context: {emergencyData?.context || "N/A"}</Text>
                  <Text style={styles.detail}>Image: </Text>
                  {emergencyData?.image && (
                      <Image source={{ uri: emergencyData.image }} style={styles.image} />
                  )}
                  <View style={styles.buttonContainer}>
                      <Button title="Respond" onPress={onRespond} />
                      <Button title="Decline" onPress={onDecline} color="red" />
                  </View>
              </View>
          </View>
      </Modal>
    );
};
export default EmergencyModal;

const styles = StyleSheet.create({
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalContent: {
        width: '80%',
        backgroundColor: '#fff',
        borderRadius: 10,
        padding: 20,
        alignItems: 'center',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    detail: {
        fontSize: 16,
        marginBottom: 10,
    },
    image: {
        width: 200,
        height: 200,
        marginVertical: 10,
        borderRadius: 10,
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '100%',
        marginTop: 20,
    },
});
