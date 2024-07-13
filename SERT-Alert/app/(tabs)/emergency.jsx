import React, { useState } from 'react'; 
import { View, Text, SafeAreaView, ScrollView, Image, Alert } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import * as ImagePicker from 'expo-image-picker';
import { router } from 'expo-router';
import { images } from '../../constants';

import FormField from '../../components/FormField';
import CustomButton  from '../../components/CustomButton';

const Emergency = () => {
  const [form, setform] = useState({
    location: '',
    context: '',
    image: null,
  })
  const [isSubmitting, setisSubmitting] = useState(false)
// code snippet open {
  const navigation = useNavigation();

  const pickImage = async () => {
  try{
    let result = await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setForm({ ...form, image: result.uri });
    }
  } catch (error) {
      Alert.alert('Error', 'Failed to pick image. Please try again.');
    }
  };
// code snippet close }
  const submit = async() => {
// code snippet open {
    setIsSubmitting(true);
    
    if (!form.location || !form.context || !form.image) {
      Alert.alert('Error', 'All fields are required.');
      setIsSubmitting(false);
      return;
    }

    try {
      const db = firebase.database();
      const emergencyRef = db.ref('emergencies');
      await emergencyRef.push({
        location: form.location,
        context: form.context,
        image: form.image,
        timestamp: Date.now(),
      });

      Alert.alert('Success', 'Emergency reported successfully.');
      navigation.goBack();
    } catch (error) {
      Alert.alert('Error', 'Failed to report emergency. Please try again.');
    } finally {
      setIsSubmitting(false);
    
  };
//code snippet end }
  }
  
  return (
    <SafeAreaView className="bg-red-200 h-full">
      <ScrollView>
        <View className="w-full justify-center h-full[85vh] px-6 my-10 border border-red-600 rounded-md flex item-center">
          <Image source={images.SERTlogo}
           resizeMode='contain' 
           className="w-[100px] h-[100px] "/>
          
           <Text className="text-2xl text-black text-semibold mt-2 font-psemibold ">
             Report an Emergency!
           </Text>
          
          <FormField 
          title="Input location"
          value={form.location}
          handleChangeText={(e) => setform({...form, location: e})}
          otherStyles="mt-7"
          />
          
          <FormField 
          title="Input Context"
          value={form.context}
          handleChangeText={(e) => setform({...form, context: e})}
          otherStyles="mt-7"
          />
{/* code snippet open  */}
          <CustomButton
            title="Capture Image"
            handlePress={pickImage}
            containerStyles="mt-7"
          />
          {form.image && (
            <Image source={{ uri: form.image }} style={{ width: 200, height: 200, marginTop: 10 }} />
          )}
{/* code snippet close  */}

         <CustomButton 
          title="Report Emergency"
          handlePress={submit}
          containerStyles="mt-10"
          isLoading={isSubmitting}
        />

        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default Emergency;