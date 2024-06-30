import { View, Text, SafeAreaView, ScrollView, Image } from 'react-native'
import React from 'react'

import { images } from '../../constants';
import FormField from '../../components/FormField';
import { Redirect, router } from 'expo-router';
import CustomButton from '../../components/CustomButton';

const menu = () => {
  return (
    <SafeAreaView className="bg-white h-full">
      <ScrollView>
        <View className="w-full justify-center h-full[85vh] px-4 my-6">
          <Image source={images.logo}
          resizeMode='contain' className="w-[115px] h-[35px]"/>
          
          <Text className="text-2xl text-black text-semibold mt-10 font-psemibold">The Menu for your options!</Text>
          
          <CustomButton 
            title="SignIn"
            handlePress={() => router.push('/sign-in')}
            containerStyles="w-full mt-7"
          />
        </View>

        <View className='justify-center pt-5 flex-row'>
          <Text className='text-lg text-gray-100 font-pregular'>
            Don't have an account?
          </Text>
        </View>

      </ScrollView>
    </SafeAreaView>
  )
}

export default menu