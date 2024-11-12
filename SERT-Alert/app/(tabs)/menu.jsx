import { View, Text, SafeAreaView, ScrollView, Image } from 'react-native'
import { images } from '../../constants';
import { Redirect, router } from 'expo-router';
import CustomButton from '../../components/CustomButton';
import { Picker } from '@react-native-picker/picker';
import FormField from '../../components/FormField';
import AnimatedGradientBackground1 from '../../components/AnimatedGradientBackground1';

//initial commit
const menu = () => {
const handleNavigate = (info) => {
  router.push(`/aboutInfo/${info}`);
  };

  return (
    <SafeAreaView className="flex-1 bg-orange-500 p-2">
      <AnimatedGradientBackground1/>
        <ScrollView>
          <View className="bg-white rounded-xl justify-center px-10 pb-10 mt-40">
            <View className="w-full justify-center h-full[85vh] px-4 my-6">
              <Text className="text-2xl text-black text-semibold mt-10 font-psemibold">Menu</Text>

            </View>
          <CustomButton 
              title="About SERT"
              handlePress={() => handleNavigate('aboutSERT')}
              containerStyles="mt-5 align-center"
            />

            <CustomButton 
              title="About Dev"
              handlePress={() => handleNavigate('aboutDev')}
              containerStyles="mt-5 align-center"
            />

          <CustomButton 
              title="Sign In"
              handlePress={() => router.push('/sign-in')}
              containerStyles="mt-5 align-center"
            />
          </View>
        </ScrollView>
    </SafeAreaView>
  )
}

export default menu
//initial UI modification