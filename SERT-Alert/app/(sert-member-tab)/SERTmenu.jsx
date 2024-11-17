import { View, Text, SafeAreaView, ScrollView, Alert, Switch, Button } from 'react-native';
import React, { useState, useEffect } from 'react';
import { router } from 'expo-router';
import { useAuth } from '../../hooks/useAuth';
import CustomButton from '../../components/CustomButton';
import AnimatedGradientBackground2 from '../../components/AnimatedGradientBackground2';
import AsyncStorage from '@react-native-async-storage/async-storage';

const SERTmenu = () => {
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);
  const { logout } = useAuth();

  const handleLogout = async () => {
    Alert.alert('Logout', 'Are you sure you want to log out?', [
      { text: 'Cancel', style: 'cancel' },
      {
        text: 'Log Out',
        onPress: async () => {
          await logout();
          router.replace('/sign-in'); // Navigate to sign-in after logout
          Alert.alert('Logged Out', 'You have successfully logged out.');
        },
      },
    ]);
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
            handlePress={handleLogout}
            containerStyles="mt-5 align-center"
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SERTmenu;
