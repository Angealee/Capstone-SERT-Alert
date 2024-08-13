import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const SwimmingWaterSafety = () => {
  return (
    <SafeAreaView className="bg-white h-full">
      <ScrollView contentContainerStyle={{ padding: 16 }}>
        <Text className="text-2xl font-semibold mb-4">Swimming and Water Safety</Text>
        <Text className="text-lg mb-2">Here your sample text explanation...</Text>
        {/* Add more content here */}
      </ScrollView>
    </SafeAreaView>
  );
};

export default SwimmingWaterSafety;
