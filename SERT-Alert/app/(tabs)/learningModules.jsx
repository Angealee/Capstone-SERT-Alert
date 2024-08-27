import { View, TouchableOpacity, Text,ScrollView, Image, handleNavigate } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import { icons, images } from '../../constants';
import { useRouter } from 'expo-router';
import SearchInput from '../../components/SearchInput';

const LearningModules = () => {
  const router = useRouter(); // Initialize router

  // Function to handle navigation to the specific topic
  const handleNavigate = (topic) => {
  router.push(`/learningTopics/${topic}`);
  };

  const getShadowStyle = () => ({
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 8, // For Android shadow
  });
  return (
    <SafeAreaView className="flex-1 bg-orange-500 p-2">
      {/* <ScrollView> */}
          <View className="my-5 px-3 space-y-6">
            <View className="justify-between items-center">
            <View className="">
                <Image 
                  source={icons.book}
                  className="w-20 h-20 ml-2"
                  resizeMode='contain'
                />
              </View>
              <View>
                <Text className="text-2xl font-psemibold text-white mt-2">
                  SERT Alert Learning!
                </Text>
              </View>

            </View>
            
            <View className="justify-center items-center mb-2">
                <SearchInput />
            </View>

            <View className=" bg-yellow-100 p-6 rounded-3xl shadow-lg mt-5 mb-2">
              <Text className="text-black-100 text-lg font-pregular mb-3">
                Learning Materials
              </Text>
              <View className="flex-row justify-between flex-wrap mt-5 mb-8 ">
                {/* •	Emergency Response Basics */}
                <TouchableOpacity 
                  className="bg-white p-4 rounded-2xl mb-4 w-[48%] h-40 border border-gray-300" 
                  onPress={() => handleNavigate('emergencyResponseBasics')}
                  style={getShadowStyle()}
                >
                  <Image 
                    source={images.emergencyResponse} // Add your thumbnail image here
                    className="w-full h-20 rounded-lg"
                    resizeMode='cover'
                  />
                  <Text className="text-center text-sm font-psemibold"
                  style={{fontSize: 14}}>
                    Basic Emergency Response
                  </Text>
                </TouchableOpacity>

                {/* •	First Aid Techniques */}
                <TouchableOpacity 
                  className="bg-white p-4 rounded-2xl mb-4 w-[48%] h-40 border border-gray-300"
                  onPress={() => handleNavigate('firstAidTechniques')}
                  style={getShadowStyle()}
                >
                  <Image 
                    source={images.firstAid} // Add your thumbnail image here
                    className="w-full h-24 rounded-lg"
                    resizeMode='contain'
                  />
                  <Text className="text-center mt-1 text-sm font-psemibold">
                    First Aid Techniques
                  </Text>
                </TouchableOpacity>

                {/* •	Natural Disaster Preparedness */}
                <TouchableOpacity 
                  className="bg-white p-4 rounded-2xl mb-4 w-[48%] h-40 border border-gray-300"
                  onPress={() => handleNavigate('naturalDisasterPreparedness')}
                  style={getShadowStyle()}
                >
                  <Image 
                    source={images.naturalDisaster} // Add your thumbnail image here
                    className="w-full h-24 rounded-lg"
                    resizeMode='contain'
                  />
                  <Text className="text-center mt-1 text-sm font-psemibold">
                  Natural Disaster Preparedness
                  </Text>
                </TouchableOpacity>

                {/* •	Swimming and Water Safety */}
                <TouchableOpacity 
                  className="bg-white p-4 rounded-2xl mb-4 w-[48%] h-40 border border-gray-300"
                  onPress={() => handleNavigate('swimmingWaterSafety')}
                  style={getShadowStyle()}
                >
                  <Image 
                    source={images.waterSafety} // Add your thumbnail image here
                    className="w-full h-24 rounded-lg"
                    resizeMode='cover'
                  />
                  <Text className="text-center mt-1 text-sm font-psemibold">
                  Swimming & Water Safety
                  </Text>
                </TouchableOpacity>
              </View>
              
            </View>
          </View>

      {/* /> */}
      {/* </ScrollView> */}
    </SafeAreaView>
  )
}

export default LearningModules
//initial commit
//need to merge with main