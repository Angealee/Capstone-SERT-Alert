  import { View, Text, SafeAreaView, ScrollView, Button, Image, Modal, TouchableOpacity } from 'react-native'
  import { useNotificationHandler, sendEmergencyNotification } from '../../components/NotificationHandler';
  import React, { useState } from 'react';
  import { Redirect, router } from 'expo-router';
  import CustomButton from '../../components/CustomButton';
  import { Picker } from '@react-native-picker/picker';
  import FormField from '../../components/FormField';

  //initial commit
  const SERTmenu = () => {
  // State to simulate logged-in status (for demo purposes)
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(true); // Set to true to simulate User2 being logged in
  const { notification } = useNotificationHandler(isUserLoggedIn);
  const [isModalVisible, setIsModalVisible] = useState(false); // Control modal visibility

  // Show the modal when a notification is received
  React.useEffect(() => {
    if (notification) {
      setIsModalVisible(true);
    }
  }, [notification]);

  // Handler to send notification only if User2 is logged in
  const handleSendNotification = async () => {
    await sendEmergencyNotification(isUserLoggedIn);
  };

    
  const handleNavigate = (info) => {
    router.push(`/aboutInfo/${info}`);
    };

    return (
      <SafeAreaView className="flex-1 bg-red-500 p-2">
        <ScrollView>
        

          <View className="bg-white rounded-xl justify-center px-10 pb-10 mt-40">
            <View className="w-full justify-center h-full[85vh] px-4 my-6">
              <Text className="text-2xl text-black text-semibold mt-10 font-psemibold">Menu</Text>

            </View>
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
              <Text>Heads-Up Notification Example</Text>
              
              {/* Button to toggle login status */}
              <Button 
                title={isUserLoggedIn ? "Turned on" : "Turned off"} 
                onPress={() => setIsUserLoggedIn(!isUserLoggedIn)} 
              />
              <View>
                <Text>
                  
                </Text>
              </View>

              {/* Button to send test emergency notification */}
              <Button 
                title="Send Test Emergency Notification" 
                onPress={handleSendNotification} 
                disabled={!isUserLoggedIn} // Disable button if not logged in
              />

              {/* Modal for displaying notification content */}
            <Modal
              transparent={true}
              animationType="fade"
              visible={isModalVisible}
              onRequestClose={() => setIsModalVisible(false)} // Close modal on request
            >
              <View
                style={{
                  flex: 1,
                  backgroundColor: 'rgba(0, 0, 0, 0.5)',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                <View style={{ width: 300, padding: 20, backgroundColor: 'white', borderRadius: 20 }}>
                  <Text style={{ fontSize: 22, fontWeight: 'bold' }}>Report Details!</Text>
                  {notification && (
                    <>
                      <Text>Title: {notification.request.content.title}</Text>
                      <Text>Body: {notification.request.content.body}</Text>
                    </>
                  )}
                  <CustomButton 
                    title="Close"
                    handlePress={() => setIsModalVisible(false)}
                    containerStyles="mt-5 align-center"
                  />
                </View>
              </View>
            </Modal>

              {notification && (
                <View style={{ marginTop: 20 }}>
                  <Text>Notification Received:</Text>
                  <Text>{notification.request.content.title}</Text>
                  {/* <Text>Body: {notification.request.content.body}</Text> */}
                </View>
              )}
            </View>
          <CustomButton 
              title="About SERT"
              handlePress={() => handleNavigate('aboutSERT')}
              containerStyles="mt-5 align-center"
            />

            <CustomButton 
              title="About Dev"
              handlePress={() => handleNavigate('aboutDev')}
              containerStyles="mt-5 align-center"
            />

          <CustomButton 
              title="Log out"
              handlePress={() => router.push('/emergency')}
              containerStyles="mt-5 align-center"
            />
          
          </View>

        </ScrollView>
      </SafeAreaView>
    )
  }

  export default SERTmenu
  //initial UI modification