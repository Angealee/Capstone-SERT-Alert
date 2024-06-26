import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, ScrollView, Text, View } from 'react-native';
import { Image } from 'react-native';
import { Link } from 'expo-router';

import { images } from '../constants';

export default function App() {
  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView contentContainerStyle={{ height: '100%'}}>
        <View className="w-full justify-center items-center h-full px-4">
        {/* <Text className="text-3xl font-pblack">SERT Alert</Text>
            <StatusBar style="auto" />
            <Link href="/emergency" style={{ color: 'white'}}>Report an Emergency!</Link> */}
          <Image 
            source={images.logo}
          /> 
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

