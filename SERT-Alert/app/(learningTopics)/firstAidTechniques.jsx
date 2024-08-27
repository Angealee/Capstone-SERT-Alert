import React from 'react';
import { View, Text, Image, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { images } from '../../constants'; // Assuming you have images/constants set up

const firstAidTechniques = () => {
  return (
    <SafeAreaView className="bg-white h-full">
      <ScrollView>
        <View className="p-4">
          <Image 
            source={images.firstAid} // Add your image here
            className="w-full h-56 rounded-lg mb-4"
            resizeMode='cover'
          />
          <Text className="text-2xl font-bold mb-4">Basic Emergency Response</Text>
          <Text className="text-lg mb-2">
          First aid is the initial assistance given to someone injured or suddenly taken ill. This module will teach you essential first aid techniques, including how to treat cuts, burns, fractures, and more. You'll also learn how to perform CPR, the Heimlich maneuver, and how to deal with choking, allergic reactions, and other common emergencies.

          </Text>
          <Text className="text-lg mb-2">
          First aid is the initial assistance given to someone injured or suddenly taken ill. This module will teach you essential first aid techniques, including how to treat cuts, burns, fractures, and more. You'll also learn how to perform CPR, the Heimlich maneuver, and how to deal with choking, allergic reactions, and other common emergencies.

          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default firstAidTechniques;
