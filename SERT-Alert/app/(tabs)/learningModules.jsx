import { View, Text,ScrollView, Image, FlatList } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import { images } from '../../constants';
import SearchInput from '../../components/SearchInput';
import LearningMaterials from '../../components/LearningMaterials';

const LearningModules = () => {
  return (
    <SafeAreaView className="bg-red-100 h-full">
      <FlatList 
        data={[{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }]}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Text className="text-3xl">{item.id}</Text>
        )}
        ListHeaderComponent={() => (
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

              <LearningMaterials posts={[{ id: 1}, { id: 2}, { id: 3}, { id: 4}] ?? []} />
            </View>
          </View>
        )}
        ListEmptyComponent={() => (
          <Text>
            Empty
          </Text>
        )}
      />
        
    </SafeAreaView>
  )
}

export default LearningModules