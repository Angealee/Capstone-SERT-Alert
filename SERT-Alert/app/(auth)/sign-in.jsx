import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'

const SignIn = () => {
  return (
    <SafeAreaView className="bg-white h-full">
      <ScrollView>
        <View className="w-full justify-center h-full[85vh] px-4 my-6">
          <Image source={images.logo}
          resizeMode='contain' className="w-[115px] h-[35px]"/>
          <Text className="text-2xl text-black text-semibold mt-10 font-psemibold">Sign-In!</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default SignIn