// EmergencyModal.jsx
import React, { useEffect, useState } from 'react';
import { View, Text, Button, Image, Modal, StyleSheet, ActivityIndicator, TouchableOpacity } from 'react-native';

const EmergencyModal = ({ visible, emergencyData, onRespond, onDecline }) => {

    const [isLoading, setIsLoading] = useState(false);

    return (
          <Modal visible={visible} animationType="slide" transparent={true}>
          <View style={styles.modalContainer}>
              <View style={styles.modalContent}>
                  <Text style={styles.title}>Emergency Alert</Text>
                  <View style={styles.modalDetailsContainer}>
                    <View style={{flexDirection: 'row'}}>
                        <Text>Building:</Text>
                        <Text style={{ fontSize: 16, fontWeight: 'bold' }}> {emergencyData.building || "N/A"} </Text>
                    </View>
                    
                    <View style={{flexDirection: 'row'}}>
                        <Text style={{ marginTop: 10,  }}>Floor: </Text>
                        <Text style={{ fontSize: 16, fontWeight: 'bold', marginTop: 10 }}> {emergencyData.floorLocation || "testing"}</Text>
                    </View>
                    
                    <View style={{flexDirection: 'row'}}>
                        <Text style={{ marginTop: 10 }}>Context: </Text>
                        <Text style={{ fontSize: 16, fontWeight: 'bold', marginBottom: 10, marginTop: 9 }}> {emergencyData.context || "batganon"}</Text>
                    </View>
                  </View>
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
    modalDetailsContainer:{
        width: '80%',
        padding: 1,
        alignItems: 'right',
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
        width: 240,
        height: 240,
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
