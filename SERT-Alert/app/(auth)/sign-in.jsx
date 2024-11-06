import React, { useState } from 'react'; 
import { View, Text, SafeAreaView, ScrollView, Alert, ActivityIndicator, Modal } from 'react-native';
import { router } from 'expo-router';
import FormField from '../../components/FormField';
import CustomButton from '../../components/CustomButton';

const SignIn = () => {
  const [form, setForm] = useState({
    username: '',
    password: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const submit = async () => {
    if (!form.username || !form.password) {
      Alert.alert('Error', 'Please fill in all the fields!');
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch('https://192.168.0.15:7296/api/Login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ 
          username: form.username, 
          password: form.password 
        }),
      });

      const data = await response.json();

      if (data.success) {
        Alert.alert("Success", "Login successful!");
        router.push('/SERTemergency');
      } else {
        Alert.alert("Login Failed", data.message || "Invalid credentials");
      }
    } catch (error) {
      console.error("Login error:", error);
      Alert.alert("Error", "Something went wrong. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <SafeAreaView className="bg-white h-full">
      <Modal
          transparent={true}
          animationType="fade"
          visible={isSubmitting}
          onRequestClose={() => {}}
        >
          <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
            <View style={{ padding: 20, backgroundColor: 'white', borderRadius: 10, alignItems: 'center' }}>
              <ActivityIndicator size="large" color="#ff6347" />
              <Text style={{ marginTop: 10, color: '#333' }}>Logging in...</Text>
            </View>
          </View>
        </Modal>
      <ScrollView>
        <View className="w-full justify-center min-h-[85vh] px-4 my-6">
          <Text className="text-2xl text-black text-semibold mt-10 font-psemibold">Sign In!</Text>

          <FormField 
            title="Username"
            value={form.username}
            handleChangeText={(e) => setForm({ ...form, username: e })}
            style={{height: 48}}
            otherStyles="mt-7"
          />
          <FormField 
            title="Password"
            value={form.password}
            handleChangeText={(e) => setForm({ ...form, password: e })}
            otherStyles="mt-7"
            secureTextEntry // Hide password input
          />

            <CustomButton 
              title="Login"
              handlePress={() => router.push('/SERTemergency')}//submit //() => router.push('/menu')}
              containerStyles="mt-7"
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
  );
};

export default SignIn;
