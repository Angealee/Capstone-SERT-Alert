import { View, Text, SafeAreaView, ScrollView, Image } from 'react-native'
import React from 'react'

import { images } from '../../constants';
import { Redirect, router } from 'expo-router';
import CustomButton from '../../components/CustomButton';
import { Picker } from '@react-native-picker/picker';
import FormField from '../../components/FormField';

//initial commit
const menu = () => {
  
const handleNavigate = (info) => {
  router.push(`/aboutInfo/${info}`);
  };

  return (
    <SafeAreaView className="bg-red-200 h-full">
      <ScrollView>
        <View className="w-full justify-center h-full[85vh] px-4 my-6">
          
          <Text className="text-2xl text-black text-semibold mt-10 font-psemibold">The Menu for your options!</Text>
          
          
        </View>
        
        <View className="bg-white rounded justify-center px-5 pb-10 mt-20">
        <CustomButton 
            title="About SERT"
            handlePress={() => handleNavigate('aboutSERT')}
            containerStyles="mt-10 align-center"
          />

          <CustomButton 
            title="About Dev"
            handlePress={() => handleNavigate('aboutDev')}
            containerStyles="mt-10 align-center"
          />

        <CustomButton 
            title="Sign In"
            handlePress={() => router.push('/sign-in')}
            containerStyles="mt-10 align-center"
          />
        
        </View>

      </ScrollView>
    </SafeAreaView>
  )
}

export default menu
//initial UI modification commit