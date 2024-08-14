import React from 'react';
import { View, Text, Image, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { images } from '../../constants'; // Assuming you have images/constants set up

const AboutSERT = () => {
  return (
    <SafeAreaView className="bg-white h-full">
      <ScrollView>
        <View className="p-4">
          <Image 
            source={images.SERTpicture} // Add your image here
            className="w-full h-56 rounded-lg mb-4"
            resizeMode='cover'
          />
          <Text className="text-2xl font-bold mb-4">Student Emergency Response Team</Text>
          <Text className="text-lg mb-2">
            In emergency situations, quick and effective response can save lives. This module covers the basics of emergency response, including assessing the situation, calling for help, and providing basic support until professional help arrives.
          </Text>
          <Text className="text-lg mb-2">
            You'll learn how to stay calm, assess the safety of the scene, and perform essential actions like CPR, wound care, and more.
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default AboutSERT;
