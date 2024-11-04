import React, { useState, useEffect } from 'react';
import { View, Text, SafeAreaView, ScrollView, Image, Alert, TouchableOpacity, Platform, ActivityIndicator, Modal, RefreshControl  } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import * as ImagePicker from 'expo-image-picker';
import * as FileSystem from 'expo-file-system';
import * as Location from 'expo-location';
import { images } from '../../constants';
import { icons } from '../../constants';
import RNPickerSelect from 'react-native-picker-select';
import FormField from '../../components/FormField';
import CustomButton from '../../components/CustomButton';
import CaptureButton from '../../components/CaptureButton';

const SERTemergency = () => {
  const [form, setForm] = useState({
    Building: '',
    FloorLocation: '',
    context: '',
    image: null,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [FloorLocation, setFloorLocation] = useState([]);
  const [isFloorLocationEnabled, setIsFloorLocationEnabled] = useState(false);
  const [isWithinPremises, setIsWithinPremises] = useState(false);
  const [currentLocation, setCurrentLocation] = useState(null);
  const [locationInfo, setLocationInfo] = useState({
    
    latitude: null,
    longitude: null,
    city: 'Unknown',
    province: 'Unknown',
  });
  const [refreshing, setRefreshing] = useState(false); //refresh
  const navigation = useNavigation();

  // Location boundaries for Dominican College of Tarlac
  const checkLocation = async () => {
    try {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        Alert.alert('Location Permission', 'Permission to access location is required to report emergencies.');
        return;
      }

      // Get the current position
      let location = await Location.getCurrentPositionAsync({});
      const { latitude, longitude } = location.coords;

      // Set the current location to display on the screen
      setCurrentLocation({ latitude, longitude });
      
      // Reverse geocoding to get the location name
      const reverseGeocode = await Location.reverseGeocodeAsync({
        latitude,
        longitude,
      });

      // Check if reverse geocoding returned a result and retrieve details
      const locationDetails = reverseGeocode[0] || {};
      const municipality = locationDetails.city || '???'
      const province = locationDetails.region || '???'
      console.log("Reverse geocode details:", reverseGeocode);

      // Replace with the actual lat/long bounds of the college
      const withinLatBounds = latitude >= 15.195664 && latitude <= 15.2;
      const withinLongBounds = longitude >= 120.352184 && longitude <= 119;
      console.log("Lat and Long Details:", latitude, longitude);
      // Set location data and check if within premises
      setIsWithinPremises(withinLatBounds && withinLongBounds);
      setLocationInfo({
        latitude,
        longitude,
        municipality,
        province,
      });
    } catch (error) {
      console.error("Error checking location:", error);
      setIsWithinPremises(false);
    } finally {
      setRefreshing(false); // Stop the refresh indicator
    }
  };

  useEffect(() => {
    checkLocation();
  }, []);
  // Function to handle pull-to-refresh action
  const onRefresh = () => {
    setRefreshing(true);
    checkLocation();
  };

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
        const base64 = await FileSystem.readAsStringAsync(result.assets[0].uri, {
          encoding: FileSystem.EncodingType.Base64,
        });
        setForm({ ...form, image: `data:image/jpeg;base64,${base64}` });
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
      const timestamp = new Date().toISOString();
      const bodyData = {
        building: form.Building,
        floorLocation: form.FloorLocation,
        context: form.context,
        image: form.image,
        timestamp: timestamp,
      };

      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(bodyData),
      });

      const result = await response.json();
      if (response.ok) {
        Alert.alert('Success', 'Emergency reported successfully!');
        console.log('Response data:', result);
        setForm({
          Building: '',
          FloorLocation: '',
          context: '',
          image: null,
        });
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
    <SafeAreaView className="flex-1 bg-red-500 p-2">
      <Modal
          transparent={true}
          animationType="fade"
          visible={isSubmitting}
          onRequestClose={() => {}}
        >
          <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
            <View style={{ padding: 20, backgroundColor: 'white', borderRadius: 10, alignItems: 'center' }}>
              <ActivityIndicator size="large" color="#ff6347" />
              <Text style={{ marginTop: 10, color: '#333' }}>Submitting Report, Please wait...</Text>
            </View>
          </View>
        </Modal>
      <ScrollView
        refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }
      >
        <View className="bg-white p-6 rounded-3xl shadow-lg mt-10 mb-6">
          <Image
            source={images.SERTlogo}
            resizeMode='contain'
            className="w-20 h-20 mx-auto mb-4"
          />

          <Text className="text-2xl text-black text-center font-psemibold">
            Report an Emergency!
          </Text>
          <Text className="text-black text-center font-psemibold mt-2 mb-3">
            (SERT Member)
          </Text>

          <View className="bg-white rounded-xl justify-center px-5 pb-10">
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
                    inputIOS: { 
                      color: '#000',
                      fontSize: 19,
                      textAlign: 'center',
                      marginTop: 15,
                      marginLeft: 30
                    },
                    inputAndroid: { 
                      color: '#000',
                      textAlign: 'center',
                    },
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
                  inputIOS: { 
                    color: isFloorLocationEnabled ? '#000' : '#888', 
                    fontSize: 19,
                    textAlign: 'center',
                    marginTop: 15,
                    marginLeft: 30
                  },
                  inputAndroid: { 
                    color: isFloorLocationEnabled ? '#000' : '#888',
                    fontSize: 17,
                    textAlign: 'center',
                    marginLeft: 20
                  },
                }}
                useNativeAndroidPickerStyle={false}
              />
            </View>

            <View className="mb-4">
                <FormField
                  placeholder="Other details ..."
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
              containerStyles="mt-3 mb-5"
              icon={icons.camera}
            />
            
            <TouchableOpacity
              style={{
                width: '100%',
                paddingVertical: 25,
                backgroundColor: isWithinPremises ? '#EF2A39' : 'gray',
                borderRadius: 10,
                alignItems: 'center',
                marginTop: 5,              }}
              onPress={submit}
              disabled={!isWithinPremises}
            >
              <Text style={{ color: 'white', fontSize: 18 }}>Submit Report</Text>
            </TouchableOpacity>
          
            {/* Location Info */}
            {!isWithinPremises && (
                <View style={{ marginTop: 10, alignItems: 'center' }}>
                  <Text style={{ color: 'red', fontSize: 14, marginTop: 10 }}>
                        You are not currently in the Dominican College of Tarlac premises, you are not eligible for reporting.
                  </Text>
                    <Text style={{ color: '#333', fontSize: 16, fontWeight: 10 }}>Your current location:</Text>
                      <Text className="text-black-600 font-semibold"> {locationInfo.municipality}, {locationInfo.province}</Text>
                      
                        {currentLocation && (
                          <Text style={{ color: 'black', textAlign: 'center', fontSize: 11 }}>
                            Latitude: {currentLocation.latitude} | Longitude: {currentLocation.longitude}
                          </Text>
                        )}

                    <Text style={{ color: '#333', fontSize: 16, fontWeight: 10, marginTop: 20 }}>Swipe Up to refresh!</Text>
                </View>
            )}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SERTemergency;