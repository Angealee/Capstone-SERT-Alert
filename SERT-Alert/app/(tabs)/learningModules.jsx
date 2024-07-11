import { View, Text,ScrollView, Image, FlatList } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import { images } from '../../constants';

const LearningModules = () => {
  return (
    <SafeAreaView>
        <FlatList 
          data={[{ id: 1 }]}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <Text className="text-3xl">{item.id}</Text>
          )}

        />
        <ScrollView>
        <View className="w-full justify-center h-full[85vh] px-4 my-6">
          <Image source={images.SERTlogo}
          resizeMode='contain' className="w-[35px] h-[35px]"/>
          <Text className="text-2xl text-black text-semibold mt-10 font-psemibold">Learn through our Learning modules here!</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default LearningModules