import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, ScrollView, Text, View, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { router } from 'expo-router';
import { images } from '../constants';
import AnimatedFrontColor from '../components/AnimatedFrontColor';
import CustomButton from '../components/CustomButton';
import 'react-native-url-polyfill/auto';
import AnimatedGradientBackground1 from '../components/AnimatedGradientBackground1';

export default function App() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <AnimatedFrontColor />
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.content}>
          {/* Title */}
          <Text style={styles.title} className="font-pblack">SERT Alert</Text>
          {/* <Text style={styles.subtitle}>An Emergency App</Text> */}

          {/* Logo */}
          <Image
            source={images.SERTlogo}
            style={styles.logo}
            resizeMode="contain"
          />

          {/* Call to Action Button */}
          <View style={styles.halfCircle}>
          <Image
              source={images.bird} // Replace with your bird image path
              style={styles.birdImage}
            />

            <TouchableOpacity 
              onPress={() => router.push('/emergency')}
              style={{
                borderRadius: 100, 
                padding: 20,
                width: 200,
                height: 100,
                alignItems: 'center',
                alignContent: 'center',
                marginTop: 30,
                backgroundColor: '#E22D2A'}}
            >
              <Text 
              style={{
                color: 'white', 
                fontSize: 22, 
                fontWeight:'bold', 
                marginTop: 14}}
              textStyles={styles.buttonText}>
                Report Now!
              </Text>
            </TouchableOpacity>
          </View> 
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
    fontSize: 52,
    color: '#0e427e', // Dark blue
  },
  subtitle: {
    fontSize: 19,
    color: 'black',
    marginBottom: 20,
    fontFamily: 'Roboto', // Subtle contrasting font
  },
  logo: {
    width: 280,
    height: 280,
    marginBottom: 170,
  },
  birdImage: {
    position: 'absolute',
    top: -120, // Adjust as needed to position the bird on top
    zIndex: 1,
    width: 200, // Adjust size as needed
    height: 200,
  },
  halfCircle: {
    width: '140%',
    height: 208,
    backgroundColor: '#0F2949',
    borderTopLeftRadius: 200,
    borderTopRightRadius: 200,
    marginTop: 20,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    bottom: 0,
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
