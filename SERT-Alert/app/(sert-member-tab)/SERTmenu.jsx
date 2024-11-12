import { View, Text, SafeAreaView, ScrollView, Image, Modal, Switch, Button } from 'react-native';
import { useNotificationHandler, sendEmergencyNotification } from '../../components/NotificationHandler';
import React, { useState, useEffect } from 'react';
import { router } from 'expo-router';
import CustomButton from '../../components/CustomButton';
import AnimatedGradientBackground2 from '../../components/AnimatedGradientBackground2';

const SERTmenu = () => {
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false); // Track User2 login status via the Switch
  const [isModalVisible, setIsModalVisible] = useState(false); // Control modal visibility
  const { notification } = useNotificationHandler(isUserLoggedIn); // Notification handler

  // Show the modal when a notification is received
  useEffect(() => {
    if (notification) {
      setIsModalVisible(true);
    }
  }, [notification]);

  // Function to send an emergency notification if User2 is logged in
  const handleSendNotification = async () => {
    await sendEmergencyNotification(isUserLoggedIn);
  };

  const handleNavigate = (info) => {
    router.push(`/aboutInfo/${info}`);
  };

  return (
    <SafeAreaView className="flex-1 bg-red-500 p-2">
      <AnimatedGradientBackground2/>
      <ScrollView>
        <View className="bg-white rounded-xl justify-center px-16 pb-20 mt-40">
          <View className="w-full justify-center h-full[85vh] my-6">
            <Text className="text-3xl text-black text-semibold mt-10 font-psemibold">Menu</Text>
          </View>
          <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 10 }}>
            <Text style={{ fontWeight: 'bold', fontSize: 21 }}>Active Status:</Text>
            <Switch
              trackColor={{ false: '#876a59', true: '#37733f' }}
              thumbColor={isUserLoggedIn ? '#4bdb5e' : '#b89581'}
              ios_backgroundColor="#3e3e3e"
              onValueChange={() => setIsUserLoggedIn((prev) => !prev)} // Toggle login status
              value={isUserLoggedIn}
              style={{ transform: [{ scaleX: 1 }, { scaleY: 1 }] }}
            />
          </View>

          {/* Navigation buttons */}
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
  );
};

export default SERTmenu;
