// EmergencyModal.jsx
import React, { useEffect, useState } from 'react';
import { View, Text, Button, Image, Modal, StyleSheet, ActivityIndicator } from 'react-native';

const EmergencyModal = ({ visible, emergencyData, onRespond, onDecline }) => {

    const [isLoading, setIsLoading] = useState(false);

    return (
          <Modal visible={visible} animationType="slide" transparent={true}>
          <View style={styles.modalContainer}>
              <View style={styles.modalContent}>
                  <Text style={styles.title}>Emergency Alert</Text>
                  <Text style={styles.detail}>Building: {emergencyData.building || "N/A"}</Text>
                  <Text style={styles.detail}>Floor: {emergencyData.floorLocation || "testing"}</Text>
                  <Text style={styles.detail}>Context: {emergencyData.context || "batganon"}</Text>
                  <Text style={styles.detail}>Image: </Text>
                  {emergencyData?.image && (
                      <Image source={{ uri: emergencyData.image }} style={styles.image} />
                  )}
                  <View style={styles.buttonContainer}>
                    <Button title="Decline" onPress={onDecline} color="red" />
                    <Button title="Respond" onPress={onRespond} />
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
