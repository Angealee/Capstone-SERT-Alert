import React, { useState } from 'react'; 
import { View, Text, SafeAreaView, ScrollView, Alert } from 'react-native'
import { router } from 'expo-router';
import FormField from '../../components/FormField';
import CustomButton  from '../../components/CustomButton';



const SignIn = () => {
  
  const [form, setform] = useState({
    username: '',
    password:''
  })
  const [isSubmitting, setisSubmitting] = useState(false)

  const submit = async () => {
    // Handle the form submission logic
    if(!form.username || !form.password){
      Alert.alert('Error', 'Please fill in all the fields!')
    }
    setisSubmitting(true);
    
  }
  return (
    <SafeAreaView className="bg-white h-full">
      <ScrollView>
        <View className="w-full justify-center min-h-[85vh] px-4 my-6">
          {/* <Image source={images.logo}
          resizeMode='contain' className="w-[115px] h-[35px]"/> */}
          <Text className="text-2xl text-black text-semibold mt-10 font-psemibold">Sign In!</Text>

        <FormField 
          title="Username"
          value={form.username}
          handleChangeText={(e) => setform({...form, username: e})}
          otherStyles="mt-7"
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
          title="Back"
          handlePress={() => router.push('/menu')}
          containerStyles="mt-7"
          isLoading={isSubmitting}
        />


        {/* <View className='justify-center pt-5 flex-row gap-2'>
          <Text className='text-lg text-gray-100 font-pregular'>
            Don't have an account?
          </Text>
          <Link href="/sign-up" className="text-lg font-psemibold text-secondary">
            Sign-up
          </Link>
        </View> */}

        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default SignIn