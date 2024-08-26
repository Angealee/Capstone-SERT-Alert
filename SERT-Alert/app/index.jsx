import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, ScrollView, Text, View } from 'react-native';
import { Image } from 'react-native';
import { Redirect, router } from 'expo-router';

import { images } from '../constants';
import CustomButton from '../components/CustomButton';
import 'react-native-url-polyfill/auto';
import { useGlobalContext } from '../context/GlobalProvider';

export default function App() {
  const {isLoading, isLoggedIn } = useGlobalContext();

  if(!isLoading && isLoggedIn) return <Redirect href="/SERTemergency"/>

  return (
    <SafeAreaView className="bg-white">
      <ScrollView contentContainerStyle={{ height: '100%'}}>
        <View className="w-full justify-center items-center min-h-[85vh] px-4">
        {/* <Text className="text-3xl font-pblack">SERT Alert</Text>
            <StatusBar style="auto" />
            <Link href="/emergency" style={{ color: 'white'}}>Report an Emergency!</Link> */}
          <Text className="text-4xl text-black-200 font-pblack">SERT Alert</Text>

          <Image
           source={images.SERTlogo}
           className="max-w[390px] max-full h-[300px]"
          resizeMode="contain"
          /> 
          {/* <View className="relative mt-7">
            <Text className="text-3xl text-white font-bold text-center">SERT Alert</Text>
          </View> */}

          <CustomButton 
            title="Report an Emergency!"
            handlePress={() => router.push('/emergency')}
            containerStyles="w-60 mt-7"
          />
          
        </View> 
      </ScrollView>

      <StatusBar backgroundColor='#FFFF'
      style='light'/>
    </SafeAreaView>
  );
}

