import { View, TouchableOpacity, Text,ScrollView, Image, handleNavigate } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import { images } from '../../constants';
import { useRouter } from 'expo-router';
import SearchInput from '../../components/SearchInput';

const LearningModules = () => {
  const router = useRouter(); // Initialize router

  // Function to handle navigation to the specific topic
  const handleNavigate = (topic) => {
  router.push(`/(learningTopics)/${topic}`);
  };
  return (
    <SafeAreaView className="bg-red-100 h-full">
      <ScrollView>
          <View className="my-6 px-4 space-y-6">
            <View className="justify-between items-start flex-row mb-6">
              <View>
                <Text className="font-pmedium text-sm text-white">
                  SERT Alert
                </Text>
                <Text className="text-2xl font-psemibold">
                  Learn through our Learning modules here!
                </Text>
              </View>

              <View className="mt-1.5">
                <Image 
                  source={images.siren}
                  className="w-9 h-10"
                  resizeMode='contain'
                />

              </View>
            </View>

            <SearchInput />

            <View className="w-full flex-1 pt-5 pb-8">
              <Text className="text-black-100 text-lg font-pregular mb-3">
                Learning Materials
              </Text>
              <View className="flex-row justify-between flex-wrap">
                {/* •	Emergency Response Basics */}
                <TouchableOpacity 
                  className="bg-white p-4 rounded-lg mb-4 w-[48%] h-40"
                  onPress={() => handleNavigate('emergencyResponseBasics')}
                >
                  <Image 
                    source={images.emergencyResponse} // Add your thumbnail image here
                    className="w-full h-24 rounded-lg"
                    resizeMode='cover'
                  />
                  <Text className="text-center mb-2 text-lg font-psemibold">
                    Basic Emergency Response
                  </Text>
                </TouchableOpacity>

                {/* •	First Aid Techniques */}
                <TouchableOpacity 
                  className="bg-white p-4 rounded-lg mb-4 w-[48%] h-40"
                  onPress={() => handleNavigate('firstAidTechniques')}
                >
                  <Image 
                    source={images.firstAid} // Add your thumbnail image here
                    className="w-full h-24 rounded-lg"
                    resizeMode='cover'
                  />
                  <Text className="text-center mt-2 text-lg font-psemibold">
                    First Aid Techniques
                  </Text>
                </TouchableOpacity>

                {/* •	Natural Disaster Preparedness */}
                <TouchableOpacity 
                  className="bg-white p-4 rounded-lg mb-4 w-[48%] h-40"
                  onPress={() => handleNavigate('naturalDisasterPreparedness')}
                >
                  <Image 
                    source={images.naturalDisaster} // Add your thumbnail image here
                    className="w-full h-24 rounded-lg"
                    resizeMode='cover'
                  />
                  <Text className="text-center mb-1 text-lg font-psemibold">
                  Natural Disaster Preparedness
                  </Text>
                </TouchableOpacity>

                {/* •	Swimming and Water Safety */}
                <TouchableOpacity 
                  className="bg-white border-red-600 p-4 rounded-lg mb-4 w-[48%] h-40"
                  onPress={() => handleNavigate('swimmingWaterSafety')}
                >
                  <Image 
                    source={images.waterSafety} // Add your thumbnail image here
                    className="w-full h-24 rounded-lg"
                    resizeMode='cover'
                  />
                  <Text className="text-center mt-2 text-lg font-psemibold">
                  Swimming and Water Safety
                  </Text>
                </TouchableOpacity>
              </View>
              
            </View>
          </View>

      {/* /> */}
      </ScrollView>
    </SafeAreaView>
  )
}

export default LearningModules
//initial commit