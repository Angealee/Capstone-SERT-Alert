import React, { useState } from 'react'; 
import { View, Text, SafeAreaView, ScrollView, Image } from 'react-native'
// import React from 'react'

import { images } from '../../constants';
import FormField from '../../components/FormField';

const Emergency = () => {
  const [form, setform] = useState({
    email: '',
    password:''
  })
  return (
    <SafeAreaView className="bg-white h-full">
      <ScrollView>
        <View className="w-full justify-center h-full[85vh] px-4 my-6">
          <Image source={images.logo}
          resizeMode='contain' className="w-[115px] h-[35px]"/>
          
          <Text className="text-2xl text-black text-semibold mt-10 font-psemibold">Report an Emergency!</Text>

          <FormField 
          title="Email"
          value={form.email}
          handleChangeText={(e) => setform({...form, email: e})}
          otherStyles="mt-7"
          keyboardType="email-address"
        />
        <FormField 
          title="Password"
          value={form.password}
          handleChangeText={(e) => setform({...form, password: e})}
          otherStyles="mt-7"
        />
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default Emergency