import React, { useState } from 'react'; 
import { Alert, View, Text, SafeAreaView, ScrollView } from 'react-native';
import { router } from 'expo-router';
import { createUser } from '../../lib/appwrite';

import FormField from '../../components/FormField';
import CustomButton from '../../components/CustomButton';

const SignUp = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    password: ''
  });
  const [isSubmitting, setisSubmitting] = useState(false);

  const submit = async () => {
    if (!form.name || !form.email || !form.password) {
      Alert.alert('Error', 'Please fill in all the fields');
      return;
    }
    setisSubmitting(true);

    try {
      const result = await createUser(form.email, form.password, form.name);
      //set it to global state ...

      console.log('User created:', result);
      router.replace('/menu');
    } catch (error) {
      Alert.alert('Error', error.message);
    } finally {
      setisSubmitting(false);
    }
  }

  return (
    <SafeAreaView className="bg-white h-full">
      <ScrollView>
        <View className="w-full justify-center min-h-[85vh] px-4 my-6">
          <Text className="text-2xl text-black text-semibold mt-10 font-psemibold">Sign Up!</Text>

          <FormField 
            title="Name"
            value={form.name}
            handleChangeText={(e) => setForm({...form, name: e})}
            otherStyles="mt-7"
          />
          <FormField 
            title="Email"
            value={form.email}
            handleChangeText={(e) => setForm({...form, email: e})}
            otherStyles="mt-7"
            keyboardType="email-address"
          />
          <FormField 
            title="Password"
            value={form.password}
            handleChangeText={(e) => setForm({...form, password: e})}
            otherStyles="mt-7"
          />

          <CustomButton 
            title="Create an account"
            handlePress={submit}
            containerStyles="mt-7"
            isLoading={isSubmitting}
          />

          <CustomButton 
            title="Back"
            handlePress={() => router.push('/sign-in')}
            containerStyles="mt-7"
            isLoading={isSubmitting}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default SignUp;
