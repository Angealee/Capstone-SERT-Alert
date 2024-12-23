import React, { useState, useEffect } from 'react';
import { View, Text, SafeAreaView, ScrollView, Image, Alert, TouchableOpacity, Platform, ActivityIndicator, Modal, RefreshControl, Button  } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import * as ImagePicker from 'expo-image-picker';
import * as FileSystem from 'expo-file-system';
import * as Location from 'expo-location';
import * as ImageManipulator from 'expo-image-manipulator';
import { images } from '../../constants';
import { icons } from '../../constants';
import RNPickerSelect from 'react-native-picker-select';
import FormField from '../../components/FormField';
import CaptureButton from '../../components/CaptureButton';
import { LinearGradient } from 'expo-linear-gradient';
import AnimatedGradientBackground1 from '../../components/AnimatedGradientBackground1';

const Emergency = () => {
  const [form, setForm] = useState({
    Building: '',
    FloorLocation: '',
    context: '',
    image: null,
  });
  const [showModal, setShowModal] = useState(false);  // State for modal visibility
  const [submittedData, setSubmittedData] = useState(null); // State for storing submitted data
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [FloorLocation, setFloorLocation] = useState([]);
  const [isFloorLocationEnabled, setIsFloorLocationEnabled] = useState(false);
  const [isWithinPremises, setIsWithinPremises] = useState(false);
  const [currentLocation, setCurrentLocation] = useState(null);
  const [locationInfo, setLocationInfo] = useState({
    latitude: null,
    longitude: null,
    municipality: 'Locating',
    province: 'Locating',
  });

  const [refreshing, setRefreshing] = useState(false);
  const navigation = useNavigation();

  // Location boundaries for Dominican College of Tarlac
  const checkLocation = async () => {
    try {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        Alert.alert('Location Permission', 'Permission to access location is required to report emergencies.');
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      const { latitude, longitude } = location.coords;
      setCurrentLocation({ latitude, longitude });

      const reverseGeocode = await Location.reverseGeocodeAsync({ latitude, longitude });
      const locationDetails = reverseGeocode[0] || {};
      const municipality = locationDetails.city || '???';
      const province = locationDetails.region || '???';

      const withinLatBounds = latitude >= 15.332148 && latitude <= 15.333652;
      const withinLongBounds = longitude >= 119.889229 && longitude <= 120.594496;
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
      setRefreshing(false);
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

  //location handler
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
      case 'St. Lorenzo Ruiz BLDG':
        options = ['1st Floor', '2nd Floor', '3rd Floor', '4th Floor'];
        break;
      case 'Holy Rosary BLDG':
        options = ['1st Floor', '2nd Floor', '3rd Floor', '4th Floor'];
        break;
      case 'Our Lady of Fatima BLDG':
        options = ['1st Floor', '2nd Floor', '3rd Floor', '4th Floor'];
        break;
      case 'Our Lady of Peace BLDG':
        options = ['1st Floor', '2nd Floor', '3rd Floor', '4th Floor'];
        break;
      case 'Others':
        options = ['BP. J.JCovered Court', 'Canteen', 'Student Lounge', 'Parking Lot', 'DCT Front Gate', 'Resurrection Chapel', 'School Clinic', 'RPQA', 'Accounting Office', 'Registrar Office'];
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

  //image picker handler
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
        aspect: [3, 4],
        quality: 0.6,
      });

      if (!result.canceled && result.assets && result.assets.length > 0) {
        const originalUri = result.assets[0].uri;

        // Resize the image using expo-image-manipulator
        const resizedImage = await ImageManipulator.manipulateAsync(
          originalUri,
          [{ resize: { width: 800, height: 800 } }],
          { compress: 0.5, format: ImageManipulator.SaveFormat.JPEG }
        );
        //Save the URI of the image and not the base64 encoding yet
        setForm({ ...form, image: resizedImage.uri });
      }
    } catch (error) {
      Alert.alert('Error', 'Failed to pick image. Please try again.');
      console.error("Error in picking image: ", error);
    }
  };

  const submit = async () => {
    setIsSubmitting(true);

    if (!form.Building || !form.context || !form.image) {
      Alert.alert('Try again!', 'All fields are required.');
      setIsSubmitting(false);
      return;
    }

    try {
      //load the image data as base64 right before submission
      const base64Image = await FileSystem.readAsStringAsync(form.image, {
        encoding: FileSystem.EncodingType.Base64,
      });
      // copyBase64ToClipboard(base64Image); // Automatically copy Base64 to clipboard
      
      const apiUrl = "https://sertwebapp-c0hrepa2d9a7afem.southeastasia-01.azurewebsites.net/api/AddReport"; // Replace with your actual API endpoint
      const timestamp = new Date().toISOString();
      const bodyData = {
        building: form.Building,
        floorLocation: form.FloorLocation,
        context: form.context,
        image: `${base64Image}`, //.substring(0, 50)
        filename: "report_image.jpg",
        filetype: "image/jpeg",
        Timestamp: timestamp,
      };

      console.log("Payload being sent:", bodyData);

      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(bodyData),
      });

      const result = await response.json();
      if (response.ok) {
        setSubmittedData({
          building: form.Building,
          floorLocation: form.FloorLocation,
          context: form.context,
          image: `data:image/jpeg;base64,${base64Image}`,
        });
        setShowModal(true); // Show modal after successful submission
        setForm({
          Building: '',
          FloorLocation: '',
          context: '',
          image: null,
        });
        const arduinoResponse = await fetch('http://192.168.254.102/?button1on', { //http://192.168.254.102/?button1on CCS Office
          method: 'GET',
        });
      } else {
        Alert.alert('Error', 'Failed to report emergency.');
      }
    } catch (error) {
      Alert.alert('Failed to reach IoT Alarm trigger', 'Try again.');
      console.error("Error in submitting IoT alarm request:", error);
    } finally {
      setIsSubmitting(false);
    }
  };


  return (
    <SafeAreaView className="flex-1 p-6"
    style={{
      backgroundColor: '#FE7F2D'
    }}>
      <AnimatedGradientBackground1 />
      
      {/* For Modals */}
      <Modal
          transparent={true}
          animationType="fade"
          visible={isSubmitting}
          onRequestClose={() => {}}
        >
          <View style={{ 
            flex: 1, 
            justifyContent: 'center', 
            alignItems: 'center', 
            backgroundColor: 'rgba(0, 0, 0, 0.5)'
            }}>
            <View style={{ padding: 20, backgroundColor: 'white', borderRadius: 10, alignItems: 'center' }}>
              <ActivityIndicator color="#ff6347" />
              <Text style={{ marginTop: 10, color: '#333' }}>Submitting Report, Please wait...</Text>
            </View>
          </View>
        </Modal>
        
      {/* Modal for displaying submission details */}
      <Modal
        transparent={true}
        animationType="fade"
        visible={showModal}
        onRequestClose={() => setShowModal(false)}
      >
        <View
          style={{
            flex: 1,
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <View style={{ 
            width: 350, 
            padding: 20, 
            backgroundColor: 'white', 
            borderRadius: 20, 
          }}>
            <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Report Submitted Successfully</Text>
            {submittedData && (
              <>
                <Text style={{ marginTop: 20}}>Building:</Text>
                <Text style={{ fontSize: 16, fontWeight: 'bold' }}>{submittedData.building}</Text>

                <Text style={{marginTop:10}}>Floor Location:</Text>
                <Text style={{ fontSize: 16, fontWeight: 'bold' }}>{submittedData.floorLocation}</Text>

                <Text style={{marginTop:10}}>Context:</Text>
                <Text style={{ fontSize: 16, fontWeight: 'bold' }}>{submittedData.context}</Text>
                <View style={{alignItems:'center'}}>
                {submittedData.image && (
                  <Image
                    source={{ uri: submittedData.image }}
                    style={{ width: 300,
                      height: 300,
                      borderColor: '#EF2B39',
                      marginTop: 20,
                      marginBottom: 20,
                      alignItems: 'center' }}
                    resizeMode="contain"
                  />
                )}
                </View>
              </>
            )}
              <View style={{alignItems: 'center'}}>
                <TouchableOpacity
                  style={{
                    width: '40%',
                    paddingVertical: 8,
                    backgroundColor:'#A1C181',
                    borderRadius: 20,
                    alignItems: 'center',
                    marginTop: 1,              
                  }}
                  onPress={() => setShowModal(false)}
                >
                  <Text style={{ color: 'white', fontSize: 18 }}>Got it!</Text>
                </TouchableOpacity>
              </View>
            </View>
        </View>
      </Modal>

      <ScrollView
        refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }
          className = "mb-16"
      >
        <View className="bg-white pl-2 pr-2 pt-3 rounded-3xl shadow-lg mt-10 mb-6">
        <Text style={{fontSize: 9, marginLeft: 10}}>SERT Alert v1.4.3</Text>
          <Image
            source={images.SERTlogo}
            resizeMode='contain'
            className="w-20 h-20 mx-auto mb-4"
          />

          <Text className="text-2xl text-black text-center font-psemibold mt-2 mb-2">
            Report an Emergency!
          </Text>

          {/* Location Indicator */}
          <View style={{ 
            flexDirection: 'row', 
            alignItems: 'center', 
            justifyContent: 'center', 
            marginBottom: 2 }}>
            <View
              style={{
                width: 8,
                height: 8,
                borderRadius: 5,
                backgroundColor: isWithinPremises ? 'blue' : 'red',
                marginRight: 8,
              }}
            />
            <Text style={{ color: isWithinPremises ? 'blue' : 'red', fontSize: 13, fontWeight: 'bold' }}>
              {isWithinPremises ? 'You are in the DCT Vicinity' : 'Not in DCT vicinity'}
            </Text>
          </View>

          <View className="rounded-xl justify-center px-5 pb-10 mt-2">
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
                      { label: "St. Lorenzo Ruiz BLDG", value: "St. Lorenzo Ruiz BLDG" },
                      { label: "Holy Rosary BLDG", value: "Holy Rosary BLDG" },
                      { label: "Our Lady of Fatima BLDG", value: "Our Lady of Fatima BLDG" },
                      { label: "Our Lady of Peace BLDG", value: "Our Lady of Peace BLDG" },
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
                    { label: "St. Dominic BLDG", value: "St. Dominic BLDG" },
                    { label: "St. Catherine of Siena BLDG", value: "St. Catherine of Siena BLDG" },
                    { label: "St. Lorenzo Ruiz BLDG", value: "St. Lorenzo Ruiz BLDG" },
                    { label: "Holy Rosary BLDG", value: "Holy Rosary BLDG" },
                    { label: "Our Lady of Fatima BLDG", value: "Our Lady of Fatima BLDG" },
                    { label: "Our Lady of Peace BLDG", value: "Our Lady of Peace BLDG" },
                    { label: "Others", value: "Others" }
                  ]}
                  style={{
                    inputIOS: { 
                      color: '#000',
                      fontSize: 19,
                      textAlign: 'center',
                      marginTop: 17,
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
                : 'border-2 border-red-500 bg-gray-200'
            }`}>
              <TouchableOpacity style={{ flex: 1 }}>
                <RNPickerSelect
                  onValueChange={(value) => setForm({ ...form, FloorLocation: value })}
                  value={form.FloorLocation}
                  items={FloorLocation.map(option => ({ label: option, value: option }))}
                  disabled={!isFloorLocationEnabled}
                  style={{
                    inputIOS: { 
                      color: isFloorLocationEnabled ? '#000' : '#888', 
                      fontSize: 19,
                      marginLeft: 30
                    },
                    inputAndroid: { 
                      color: isFloorLocationEnabled ? '#000' : '#888',
                      fontSize: 17,
                      textAlign: 'center',
                    },
                  }}
                  useNativeAndroidPickerStyle={true}
                />
              </TouchableOpacity>
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
              style={{
                height: 48
              }}
            />
            
            <TouchableOpacity onPress={submit} disabled={!isWithinPremises}>
              <LinearGradient
                colors={
                  isWithinPremises
                    ? ['#EF2A39', '#FA7017']  // Active colors
                    : ['#B0B0B0', '#D3D3D3']  // Disabled colors (gray shades)
                }
                style={{
                  width: '100%',
                  paddingVertical: 25,
                  borderRadius: 20,
                  shadowColor: '#EF2A39',
                  shadowOffset: { width: 0, height: 4 },
                  shadowOpacity: 0.3,
                  shadowRadius: 8,
                  alignItems: 'center',
                }}
              >
              
                <Text style={{ color: 'white', fontSize: 18, fontWeight: 'bold' }}>
                  Submit Report
                </Text>
              </LinearGradient>
            </TouchableOpacity>
          
            {/* Location Info */}
            {!isWithinPremises && (
                <View style={{ marginTop: 10, alignItems: 'center' }}>
                  <Text style={{ color: 'red', fontSize: 14, marginTop: 5, marginBottom: 10 }}>
                        You are not currently in the Dominican College of Tarlac premises, you are not eligible for reporting.
                  </Text>
                    <Text style={{ color: '#333', fontSize: 16, fontWeight: 50, marginTop: 7 }}>Swipe Up to refresh!</Text>
                </View>
            )}
            {isWithinPremises && (
              <View style={{ marginTop: 10, alignItems: 'center' }}>
                  <Text style={{ color: 'black', fontSize: 14, marginTop: 5 }}>
                       Note: You can only report inside the campus!
                  </Text>
                </View>
            )}
          </View>
          
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Emergency;