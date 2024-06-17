import { View, Text, SafeAreaView, ScrollView, Image } from 'react-native'
import React from 'react'

import { images } from '../../constants';

const Emergency = () => {
  return (
    <SafeAreaView className="bg-white h-full">
      <ScrollView>
        <View className="w-full justify-center min-h-[85vh] px-4 my-6">
          <Image source={images.logo}
          resizeMode='contain' className="w-[115px] h-[35px]"/>
          <Text className="text-2xl text-black text-semibold mt-10 font-psemibold">Report an Emergency!</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default Emergency