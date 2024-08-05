import React, { useState } from 'react'; 
import { Alert, View, Text, SafeAreaView, ScrollView } from 'react-native'
import { router } from 'expo-router';
import { signIn } from '../../lib/appwrite';

import FormField from '../../components/FormField';
import CustomButton  from '../../components/CustomButton';


const SignIn = () => {
  const [form, setform] = useState({
    email: '',
    password:''
  })
  const [isSubmitting, setisSubmitting] = useState(false)

  const submit = async () => {
    // Handle the form submission logic
    if(!form.email || !form.password){
      Alert.alert('Error', 'Please fill in all the fields')
    }

    setisSubmitting(true);

    try{
      await signIn(form.email, form.password)

      //set it to global state...
      router.replace('/SERTemergency')
      
    } catch (error){
      Alert.alert('Error', error.message)
    } finally {
      setisSubmitting(false)
    }

  }
  return (
    <SafeAreaView className="bg-white h-full">
      <ScrollView>
        <View className="w-full justify-center min-h-[85vh] px-4 my-6">
          {/* <Image source={images.logo}
          resizeMode='contain' className="w-[115px] h-[35px]"/> */}
          <Text className="text-2xl text-black text-semibold mt-10 font-psemibold">Sign In!</Text>

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

        <CustomButton 
          title="Login"
          handlePress={submit}
          containerStyles="mt-7"
          isLoading={isSubmitting}
        />

        <CustomButton 
          title="Request an Account"
          handlePress={() => router.push('/sign-up')}
          containerStyles="mt-7"
          isLoading={isSubmitting}
        />

        <CustomButton 
          title="Back"
          handlePress={() => router.push('/menu')}
          containerStyles="mt-7"
          isLoading={isSubmitting}
        />

        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default SignIn