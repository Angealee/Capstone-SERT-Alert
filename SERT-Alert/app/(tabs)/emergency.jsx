import React, { useState, useEffect } from 'react';
import { View, Text, SafeAreaView, ScrollView, Image, Alert, TouchableOpacity, Platform } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import * as ImagePicker from 'expo-image-picker';
import { images } from '../../constants';
import { icons } from '../../constants';
import RNPickerSelect from 'react-native-picker-select';  // Imported RNPickerSelect
import FormField from '../../components/FormField';
import CustomButton from '../../components/CustomButton';
import CaptureButton from '../../components/CaptureButton';

const Emergency = () => {

  const [form, setForm] = useState({
    Building: '',
    FloorLocation: '',
    context: '',
    image: null,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [FloorLocation, setFloorLocation] = useState([]);
  const [isFloorLocationEnabled, setIsFloorLocationEnabled] = useState(false);

  const navigation = useNavigation();

  // Location Handler
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

    setForm({ ...form, Building, FloorLocation: '' });
    setFloorLocation(options);
    setIsFloorLocationEnabled(enableFloorLocation);
  };

  // Image picker handler
  const pickImage = async () => {
    try {
      const { status: cameraStatus } = await ImagePicker.requestCameraPermissionsAsync();
      
      if (cameraStatus !== 'granted') {
        Alert.alert('Error', 'Permission to access the camera was denied.');
        return;
      }
      
      let result = await ImagePicker.launchCameraAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: false,
        aspect: [4, 3],
        quality: 1,
      });

      if (!result.canceled && result.assets && result.assets.length > 0) {
        setForm({ ...form, image: result.assets[0].uri });
      }
    } catch (error) {
      Alert.alert('Error', 'Failed to pick image. Please try again.');
      console.error("Error in picking image: ", error);
    }
  };

  // Submit handler with POST request
  const submit = async () => {
    setIsSubmitting(true);

    if (!form.Building || !form.context || !form.image) {
      Alert.alert('Error', 'All fields are required.');
      setIsSubmitting(false);
      return;
    }

    try {
      const apiUrl = "https://jsonplaceholder.typicode.com/posts"; //sample API

      //req body
      const bodyData = {
        building: form.Building,
        floorLocation: form.FloorLocation,
        context: form.context,
        image: form.image,
      };

      //POST request
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(bodyData),
      });

      // Handle response
      const result = await response.json();
      if (response.ok) {
        Alert.alert('Success', 'Emergency reported successfully!');
        console.log('Response data:', result);
      } else {
        Alert.alert('Error', 'Failed to report emergency.');
        console.error('Error response:', result);
      }
    } catch (error) {
      Alert.alert('Error', 'Something went wrong. Please try again.');
      console.error("Error in submit:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <SafeAreaView className="flex-1 bg-orange-500 p-2">
      <ScrollView>
        <View className="bg-white p-6 rounded-3xl shadow-lg mt-10 mb-6">
          <Image
            source={images.SERTlogo}
            resizeMode='contain'
            className="w-20 h-20 mx-auto mb-4"
          />

          <Text className="text-2xl text-black text-center font-psemibold mt-2 mb-6">
            Report an Emergency!
          </Text>

          <View className="bg-white rounded-xl justify-center px-5 pb-10 mt-2">
            <Text className="text-black-600 font-semibold mt-5 mb-2">Building:</Text>
            <View className="border-2 border-red-500 w-full h-16 px-4 bg-white-100 rounded-2xl focus:border-secondary items-center flex-row">
              {Platform.OS === 'android' ? (
                <TouchableOpacity style={{ flex: 1 }}>
                  <RNPickerSelect
                    onValueChange={handleLocationChange}
                    value={form.Building}
                    items={[
                      { label: "St. Dominic BLDG", value: "St. Dominic BLDG" },
                      { label: "St. Catherine of Siena BLDG", value: "St. Catherine of Siena BLDG" },
                      { label: "Holy Rosary BLDG", value: "Holy Rosary BLDG" },
                      { label: "Others", value: "Others" }
                    ]}
                    style={{
                      inputIOS: { color: '#000' },
                      inputAndroid: { color: '#000' },
                    }}
                  />
                </TouchableOpacity>
              ) : (
                <RNPickerSelect
                  onValueChange={handleLocationChange}
                  value={form.Building}
                  items={[
                    { label: "Select Bldg.", value: "" },
                    { label: "St. Dominic BLDG", value: "St. Dominic BLDG" },
                    { label: "St. Catherine of Siena BLDG", value: "St. Catherine of Siena BLDG" },
                    { label: "Holy Rosary BLDG", value: "Holy Rosary BLDG" },
                    { label: "Others", value: "Others" }
                  ]}
                  style={{
                    inputIOS: { color: '#000' },
                    inputAndroid: { color: '#000' },
                  }}
                />
              )}
            </View>

            <Text className="text-black-600 font-semibold mb-2 mt-3">Floor Location:</Text>
            <View className={`w-full h-16 px-4 rounded-2xl items-center flex-row ${
              isFloorLocationEnabled
                ? 'border-2 border-red-500 bg-white-100'
                : 'bg-gray-200'
            }`}>
              <RNPickerSelect
                onValueChange={(value) => setForm({ ...form, FloorLocation: value })}
                value={form.FloorLocation}
                items={FloorLocation.map(option => ({ label: option, value: option }))}
                disabled={!isFloorLocationEnabled}
                style={{
                  inputIOS: { color: isFloorLocationEnabled ? '#000' : '#888' },
                  inputAndroid: { color: isFloorLocationEnabled ? '#000' : '#888' },
                }}
                useNativeAndroidPickerStyle={false}
              />
            </View>

            <View className="mb-4">
              <FormField
                placeholder="Context here ..."
                placeholderTextColor="#999"
                className="text-gray-800"
                value={form.context}
                handleChangeText={(e) => setForm({ ...form, context: e })}
              />
            </View>

            {form.image && (
              <View className="mt-4 mb-4">
                <Text className="text-black-600 font-semibold mb-2">Image Preview:</Text>
                <View className="border border-red-500 rounded-lg overflow-hidden">
                  <Image
                    source={{ uri: form.image }}
                    style={{ width: '100%', height: 350 }}
                  />
                </View>
              </View>
            )}

            <CaptureButton
              title="Capture Image"
              handlePress={pickImage}
              containerStyles="mt-12"
              icon={icons.camera}
            />

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
  );
};

export default Emergency;
