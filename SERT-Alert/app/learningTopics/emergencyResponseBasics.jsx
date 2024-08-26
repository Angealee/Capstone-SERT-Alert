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
          <Text className="text-2xl font-pbold mb-4">Basic Emergency Response</Text>
          <Text className="text-lg mb-2">
            In emergency situations, quick and effective response can save lives. The first few minutes of an emergency are crucial for actions done. Early intervention and warnings can reduce the risk of physical harm to buildings and other assets, save lives, and improve resilience. 
          </Text>
          <Text className="text-lg mb-2">This covers the basics of emergency response until professional help arrives, including;</Text>
          <Text className="text-lg font-bold pl-4">
          • Assessing the situation
          </Text>
          <Text className="text-lg font-bold pl-4">
          • Calling for help
          </Text>
          <Text className="text-lg font-bold pl-4">
          • Providing basic support
          </Text>

          <Text className="text-lg mb-2">
          
          </Text>

          <Text className="text-xl font-pbold mb-2">
          1. Assessing the Situation
          </Text>

          <Text className="text-xl font-bold mb-2 pl-4">
          A. Situational Awareness: 
          </Text>
          <Text className="text-lg mb-2 pl-4 pr-2">
          Situational awareness is the ability to recognize and understand what is happening in the environment around you. In the context of emergency response, it involves quickly and accurately assessing the scene to identify any immediate dangers, hazards, or ongoing threats. This step is crucial as it determines the appropriate course of action to ensure the safety of both the responder and the victims.
          </Text>
          
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default EmergencyResponseBasics;
