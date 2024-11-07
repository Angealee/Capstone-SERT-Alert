import React, { useState } from 'react'; 
import { View, Text, SafeAreaView, ScrollView, Alert, ActivityIndicator, Modal } from 'react-native';
import { router } from 'expo-router';
import { useAuth } from '../../hooks/useAuth';
import FormField from '../../components/FormField';
import CustomButton from '../../components/CustomButton';

const SignIn = () => {
  const [form, setForm] = useState({ username: '', password: '' });
  const { login, isSubmitting } = useAuth();

  const submit = async () => {
    if (!form.username || !form.password) {
      Alert.alert('Error', 'Please fill in all the fields!');
      return;
    }
    const result = await login(form.username, form.password);
    if (result.success) {
      Alert.alert("Success", "Login successful!");
      router.replace('/SERTemergency');
    } else {
      Alert.alert("Login Failed", result.message);
    }
  };

  return (
    <SafeAreaView className="bg-white h-full">
      <Modal transparent={true} animationType="fade" visible={isSubmitting}>
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
          <ActivityIndicator size="large" color="#ff6347" />
        </View>
      </Modal>
      <ScrollView>
        <View className="w-full justify-center min-h-[85vh] px-4 my-6">
          <Text className="text-2xl text-black text-semibold mt-10 font-psemibold">Sign In!</Text>
          <FormField title="Username" value={form.username} handleChangeText={(e) => setForm({ ...form, username: e })} style={{ height: 48 }} otherStyles="mt-7" />
          <FormField title="Password" value={form.password} handleChangeText={(e) => setForm({ ...form, password: e })} secureTextEntry otherStyles="mt-7" />
          <CustomButton title="Login" handlePress={submit} containerStyles="mt-7" />
          <CustomButton title="Back" handlePress={() => router.push('/menu')} containerStyles="mt-7" isLoading={isSubmitting} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignIn;
