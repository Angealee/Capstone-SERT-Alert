import React from 'react';
import { View, Text, Image, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { images } from '../../constants'; // Assuming you have images/constants set up

const swimmingWaterSafety = () => {
  return (
    <SafeAreaView className="bg-white h-full">
      <ScrollView>
        <View className="p-4">
          <Image 
            source={images.waterSafety} // Add your image here
            className="w-full h-56 rounded-lg mb-4"
            resizeMode='cover'
          />
          <Text className="text-2xl font-bold mb-4">Basic Emergency Response</Text>
          <Text className="text-lg mb-2">
          Water-related activities can be enjoyable, but they also come with risks. This module teaches swimming and water safety tips, including how to swim safely in pools, lakes, and oceans. You'll learn about the importance of life jackets, how to recognize and respond to drowning, and the basics of rescue techniques.
          </Text>
          <Text className="text-lg mb-2">
          Water-related activities can be enjoyable, but they also come with risks. This module teaches swimming and water safety tips, including how to swim safely in pools, lakes, and oceans. You'll learn about the importance of life jackets, how to recognize and respond to drowning, and the basics of rescue techniques.
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default swimmingWaterSafety;
