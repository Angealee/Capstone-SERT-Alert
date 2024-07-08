import React, { useState } from 'react'; 
import { View, Text, SafeAreaView, ScrollView, Image } from 'react-native'
import { router } from 'expo-router';

import { images } from '../../constants';
import FormField from '../../components/FormField';
import CustomButton  from '../../components/CustomButton';

const Emergency = () => {
  const [form, setform] = useState({
    email: '',
    password:''
  })
  const [isSubmitting, setisSubmitting] = useState(false)
  const submit = () => {

  }
  
  return (
    <SafeAreaView className="bg-white h-full">
      <ScrollView>
        <View className="w-full justify-center h-full[85vh] px-4 my-6">
          <Image source={images.logo}
          resizeMode='contain' className="w-[115px] h-[35px]"/>
          
          <Text className="text-2xl text-black text-semibold mt-10 font-psemibold">Report an Emergency!</Text>

          <FormField 
          title="Input location"
          value={form.location}
          handleChangeText={(e) => setform({...form, text: e})}
          otherStyles="mt-7"
          // keyboardType="email-address"
          />
          
          <FormField 
          title="Input Context"
          value={form.context}
          handleChangeText={(e) => setform({...form, text: e})}
          otherStyles="mt-7"
          />

          <FormField 
          title="Submit an Image"
          value={form.image}
          handleChangeText={(e) => setform({...form, text: e})}
          otherStyles="mt-7"
          />

         <CustomButton 
          title="Report Emergency"
          handlePress={submit}
          containerStyles="mt-7"
          isLoading={isSubmitting}
        />

        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default Emergency