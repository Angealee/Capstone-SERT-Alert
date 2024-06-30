import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, ScrollView, Text, View } from 'react-native';
import { Image } from 'react-native';
import { Redirect, router } from 'expo-router';

import { images } from '../constants';
import CustomButton from '../components/CustomButton';

export default function App() {
  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView contentContainerStyle={{ height: '100%'}}>
        <View className="w-full justify-center items-center min-h-[85vh] px-4">
        {/* <Text className="text-3xl font-pblack">SERT Alert</Text>
            <StatusBar style="auto" />
            <Link href="/emergency" style={{ color: 'white'}}>Report an Emergency!</Link> */}
          <Text className="text-3xl text-white font-pblack">SERT Alert</Text>

          <Image
           source={images.siren}
           className="max-w[390px] max-full h-[300px]"
          resizeMode="contain"
          /> 
          {/* <View className="relative mt-7">
            <Text className="text-3xl text-white font-bold text-center">SERT Alert</Text>
          </View> */}

          <CustomButton 
            title="Enter"
            handlePress={() => router.push('/sign-in')}
            containerStyles="w-full mt-7"
          />
          
        </View> 
      </ScrollView>

      <StatusBar backgroundColor='#161622'
      style='light'/>
    </SafeAreaView>
  );
}

