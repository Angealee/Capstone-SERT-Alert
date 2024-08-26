import React from 'react';
import { View, Text, Image, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { images } from '../../constants'; // Assuming you have images/constants set up

const naturalDisasterPreparedness = () => {
  return (
    <SafeAreaView className="bg-white h-full">
      <ScrollView>
        <View className="p-4">
          <Image 
            source={images.naturalDisaster} // Add your image here
            className="w-full h-56 rounded-lg mb-4"
            resizeMode='cover'
          />
          <Text className="text-2xl font-bold mb-4">Basic Emergency Response</Text>
          <Text className="text-lg mb-2">
          Being prepared for natural disasters can make a significant difference in ensuring safety. This module will cover preparation tips for various natural disasters like earthquakes, floods, hurricanes, and wildfires. You'll learn how to create an emergency kit, develop an evacuation plan, and understand the steps to take before, during, and after a disaster.
          </Text>
          <Text className="text-lg mb-2">
          Being prepared for natural disasters can make a significant difference in ensuring safety. This module will cover preparation tips for various natural disasters like earthquakes, floods, hurricanes, and wildfires. You'll learn how to create an emergency kit, develop an evacuation plan, and understand the steps to take before, during, and after a disaster.
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default naturalDisasterPreparedness;
