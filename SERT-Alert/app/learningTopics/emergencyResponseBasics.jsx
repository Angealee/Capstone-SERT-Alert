import React from 'react';
import { View, Text, Image, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { images } from '../../constants'; // Assuming you have images/constants set up

const EmergencyResponseBasics = () => {
  return (
    <SafeAreaView className="bg-white h-full">
      <ScrollView>
        <View className="p-4">
          <Image 
            source={images.emergencyResponseHeader} // Add your image here
            className="w-full h-56 rounded-lg mb-4"
            resizeMode='cover'
          />
          <Text className="text-2xl font-bold mb-4">Basic Emergency Response</Text>
          <Text className="text-lg mb-2">
            In emergency situations, quick and effective response can save lives. This covers the basics of emergency response until professional help arrives, including; 
          </Text>
          <Text className="text-lg font-bold">
          - Assessing the situation calling for help, and providing basic support
          </Text>
          <Text className="text-lg font-bold">
          - Calling for help
          </Text>
          <Text className="text-lg font-bold">
          - Providing basic support
          </Text>
          <Text className="text-lg mb-2">
          
          </Text>
          <Text className="text-lg mb-2">
            You'll learn how to stay calm, assess the safety of the scene, and perform essential actions like CPR, wound care, and more.
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default EmergencyResponseBasics;
