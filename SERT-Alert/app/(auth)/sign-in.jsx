import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'

const SignIn = () => {
  return (
    <SafeAreaView className="bg-white h-full">
      <ScrollView>
      <View className="w-full justify-center min-h-[85vh] px-4 my-6">
          <Text>Sign-in</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default SignIn