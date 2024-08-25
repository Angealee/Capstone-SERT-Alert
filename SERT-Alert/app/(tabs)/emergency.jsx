import React, { useState } from 'react'; 
import { View, Text, SafeAreaView, ScrollView, Image, Alert } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import * as ImagePicker from 'expo-image-picker';
import { router } from 'expo-router';
import { images } from '../../constants';
import  { icons } from '../../constants'
import { Picker } from '@react-native-picker/picker';

import FormField from '../../components/FormField';
import CustomButton  from '../../components/CustomButton';
import CaptureButton from '../../components/CaptureButton';

const Emergency = () => {
  const [form, setform] = useState({
    Building: '',
    FloorLocation: '',
    context: '',
    image: null,
  })
  const [isSubmitting, setisSubmitting] = useState(false)
  const [FloorLocation, setFloorLocation] = useState([]);
  const [isFloorLocationEnabled, setIsFloorLocationEnabled] = useState(false);

  const handleLocationChange = (Building) => {
    let options = [];
    let enableFloorLocation = true;
    
    switch (Building) {
      case 'St. Dominic BLDG':
        options = ['1st Floor', '2nd Floor', '3rd Floor', '4th Floor'];
        break;
      case 'St. Catherine of Siena BLDG':
        options = ['1st Floor', '2nd Floor', '3rd Floor', '4th Floor'];
        break;
      case 'Holy Rosary BLDG':
        options = ['1st Floor', '2nd Floor', '3rd Floor', '4th Floor'];
        break;
      case 'Others':
        options = ['Covered Court', 'Canteen', 'Parking Lot', 'DCT Front Gate'];
        break;
      case '':
        enableFloorLocation = false;
        break;
      default:
        options = [];
        enableFloorLocation = false;
    }
    
    setform({ ...form, Building, FloorLocation: '' });
    setFloorLocation(options);
    setIsFloorLocationEnabled(enableFloorLocation);
  };
// code snippet open {
  const navigation = useNavigation();

  const pickImage = async () => {
  try{
    let result = await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: false,
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
    <SafeAreaView className="flex-1 bg-orange-600 p-2">
      <ScrollView>
        <View className="bg-white p-6 rounded-xl shadow-lg mt-5 mb-6">
          <Image source={images.SERTlogo}
           resizeMode='contain' 
           className="w-20 h-20 mx-auto mb-4"/>
          
           <Text className="text-2xl text-black text-center text-semibold mt-2 mb-6 font-psemibold ">
             Report an Emergency!
           </Text>

{/* Start of the white background section view container */}
          <View className="bg-white rounded-xl justify-center px-5 pb-10 mt-2">
          {/* Inside of the white background view container */}
          
          {/* Location */}
            <Text className="text-black-600 font-semibold mt-5 mb-2">Building:</Text>
            <View className="border-2 border-red-500 w-full h-16 px-4 bg-white-100 rounded-2xl focus:border-secondary items-center flex-row">
                <Picker
                  selectedValue={form.Building}
                  onValueChange={handleLocationChange}
                  style={{ flex: 1, color: '#000' }}
                >
                  <Picker.Item label="Select Bldg." value="" />
                  <Picker.Item label="St. Dominic BLDG" value="St. Dominic BLDG" />
                  <Picker.Item label="St. Catherine of Siena BLDG" value="St. Catherine of Siena BLDG" />
                  <Picker.Item label="Holy Rosary BLDG" value="Holy Rosary BLDG" />
                  <Picker.Item label="Others" value="Others" />
                </Picker>
              </View>
              
            {/* Floor Location */}
            <Text className="text-black-600 font-semibold mb-2 mt-3">Floor Location:</Text>
            <View className={`w-full h-16 px-4 rounded-2xl items-center flex-row ${
              isFloorLocationEnabled 
                ? 'border-2 border-red-500 bg-white-100' 
                : 'bg-gray-200'
            }`}>
              <Picker
                selectedValue={form.FloorLocation}
                onValueChange={(value) => setform({ ...form, FloorLocation: value })}
                enabled={isFloorLocationEnabled}
                style={{ 
                  flex: 1, 
                  color: isFloorLocationEnabled ? '#000' : '#888',
                  opacity: isFloorLocationEnabled ? 1 : 0.5
                }}
              >
                <Picker.Item label="Select Floor/Location" value="" />
                {FloorLocation.map((option, index) => (
                  <Picker.Item key={index} label={option} value={option} />
                ))}
              </Picker>
            </View>
            
            {/* Input Context */}
            <View className="mb-4">
              <Text className="text-gray-600 font-semibold mt-4">Input Context</Text>
              {/* <View className="bg-white border-2 border-gray-300 rounded-lg p-3 shadow-sm"> */}
                <FormField
                  placeholder="Describe the emergency..."
                  placeholderTextColor="#999"
                  className="text-gray-800"
                />
              {/* </View> */}
            </View>
            {/* <FormField 
            value={form.context}
            handleChangeText={(e) => setform({...form, context: e})}
            otherStyles="mx-2"
            /> */}

{/* code snippet open  */}
            <CaptureButton
              title="Capture Image"
              handlePress={pickImage}
              containerStyles="mt-12"
              icon={icons.camera} // Pass the icon here
            />
            {form.image && (
              <Image source={{ uri: form.image }} style={{ width: 200, height: 200, marginTop: 10 }} />
          ) }
{/* code snippet close  */}

            <CustomButton 
              title="Report Emergency"
              handlePress={submit}
              containerStyles="mt-5"
              isLoading={isSubmitting}
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default Emergency;

//Initial Commit for Ui Modifications 2