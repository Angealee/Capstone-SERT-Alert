import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, ScrollView, Text, View, Image, StyleSheet } from 'react-native';
import { router } from 'expo-router';  // Correct import for navigation

import { images } from '../constants';
import CustomButton from '../components/CustomButton';
import 'react-native-url-polyfill/auto';


export default function App() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.content}>
          {/* Title */}
          <Text className="text-4xl text-black-200 font-pblack">SERT Alert</Text>

          {/* Logo */}
          <Image
            source={images.SERTlogo}
            style={styles.logo}
            resizeMode="contain"
          />

          {/* Call to Action Button */}
          <CustomButton 
            title="Report an Emergency!"
            handlePress={() => router.push('/emergency')}
            containerStyles="w-60 mt-2"
          />
        </View> 
      </ScrollView>

      {/* StatusBar for color customization */}
      <StatusBar backgroundColor='#0e427e' style="light" />
    </SafeAreaView>
  );
}

// StyleSheet for consistent styling
const styles = StyleSheet.create({
  safeArea: {
    backgroundColor: '#f7cdab',
    flex: 1,
  },
  scrollContainer: {
    height: '100%',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  title: {
    fontSize: 36,
    color: '#333',
    fontWeight: 'bold',
    marginBottom: 20,
  },
  logo: {
    width: 300,
    height: 300,
  },
  button: {
    marginTop: 20,
    width: 240,
  },
});
