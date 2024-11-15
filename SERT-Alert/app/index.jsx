import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, ScrollView, Text, View, Image, StyleSheet } from 'react-native';
import { router } from 'expo-router';
import { images } from '../constants';
import AnimatedFrontColor from '../components/AnimatedFrontColor';
import CustomButton from '../components/CustomButton';
import 'react-native-url-polyfill/auto';

export default function App() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <AnimatedFrontColor />
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.content}>
          {/* Title */}
          <Text style={styles.title} className="font-pblack">SERT Alert</Text>
          <Text style={styles.subtitle}>Your Campus Emergency Reporting System</Text>

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
            containerStyles="w-60"
            textStyles={styles.buttonText}
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
  safeArea: {    backgroundColor: '#f0f4f8', // Light gradient color
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
    fontSize: 42,
    color: '#0e427e', // Dark blue
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 18,
    color: '#666',
    marginBottom: 20,
    fontFamily: 'Roboto', // Subtle contrasting font
  },
  logo: {
    width: 280,
    height: 280,
    marginBottom: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
    textAlign: 'center',
    marginLeft: 20,
    marginRight: 20
  },
});
