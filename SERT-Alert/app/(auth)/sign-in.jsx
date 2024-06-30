import React, { useState } from 'react'; 
import { View, Text, SafeAreaView, ScrollView, Image } from 'react-native'
import { Link } from 'expo-router';
// import React from 'react'

import { images } from '../../constants';

import FormField from '../../components/FormField';
import CustomButton  from '../../components/CustomButton';


const SignIn = () => {
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
          <Text className="text-2xl text-black text-semibold mt-10 font-psemibold">Sign-In!</Text>

        <FormField 
          title="Name"
          value={form.name}
          handleChangeText={(e) => setform({...form, name: e})}
          otherStyles="mt-7"
          keyboardType="name"
        />
        <FormField 
          title="Department"
          value={form.department}
          handleChangeText={(e) => setform({...form, department: e})}
          otherStyles="mt-7"
          keyboardType="department"
        />
        <FormField 
          title="Year/Course/Section"
          value={form.yearCourseSection}
          handleChangeText={(e) => setform({...form, yearCourseSection: e})}
          otherStyles="mt-7"
          keyboardType="year-course-section"
        />
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
          title="Request Account"
          handlePress={submit}
          containerStyles="mt-7"
          isLoading={isSubmitting}
        />

        <View className='justify-center pt-5 flex-row gap-2'>
          <Text className='text-lg text-gray-100 font-pregular'>
            Don't have an account?
          </Text>
          <Link href="/sign-up" className="text-lg font-psemibold text-secondary">
            Sign-up
          </Link>
        </View>

        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default SignIn