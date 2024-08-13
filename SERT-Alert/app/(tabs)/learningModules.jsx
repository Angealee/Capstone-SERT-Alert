import { View, TouchableOpacity, Text,ScrollView, Image, FlatList } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import { images } from '../../constants';
import SearchInput from '../../components/SearchInput';

const LearningModules = () => {
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
                <TouchableOpacity 
                  className="bg-white p-4 rounded-lg mb-4 w-[48%] h-40"
                  onPress={() => handleNavigate('types-of-emergency')}
                >
                  <Image 
                    source={images.emergency} // Add your thumbnail image here
                    className="w-full h-24 rounded-lg"
                    resizeMode='cover'
                  />
                  <Text className="text-center mt-2 text-lg font-psemibold">
                    Types of Emergency
                  </Text>
                </TouchableOpacity>

                <TouchableOpacity 
                  className="bg-white p-4 rounded-lg mb-4 w-[48%] h-40"
                  onPress={() => handleNavigate('water-safety')}
                >
                  <Image 
                    source={images.waterSafety} // Add your thumbnail image here
                    className="w-full h-24 rounded-lg"
                    resizeMode='cover'
                  />
                  <Text className="text-center mt-2 text-lg font-psemibold">
                    Water Safety: Swimming Safety
                  </Text>
                </TouchableOpacity>

                <TouchableOpacity 
                  className="bg-white p-4 rounded-lg mb-4 w-[48%] h-40"
                  onPress={() => handleNavigate('first-aid-procedures')}
                >
                  <Image 
                    source={images.firstAid} // Add your thumbnail image here
                    className="w-full h-24 rounded-lg"
                    resizeMode='cover'
                  />
                  <Text className="text-center mt-2 text-lg font-psemibold">
                    First Aid Procedures
                  </Text>
                </TouchableOpacity>

                <TouchableOpacity 
                  className="bg-white p-4 rounded-lg mb-4 w-[48%] h-40"
                  onPress={() => handleNavigate('earthquake-drills')}
                >
                  <Image 
                    source={images.earthquake} // Add your thumbnail image here
                    className="w-full h-24 rounded-lg"
                    resizeMode='cover'
                  />
                  <Text className="text-center mt-2 text-lg font-psemibold">
                    Earthquake Drills and Information
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