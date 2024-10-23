import { View, Text, SafeAreaView, ScrollView, StyleSheet } from 'react-native';
import React from 'react';
import { router } from 'expo-router';  // Correct import for navigation

import { images } from '../../constants';
import CustomButton from '../../components/CustomButton';

const menu = () => {
  
  // Navigation handler for different information pages
  const handleNavigate = (info) => {
    router.push(`/aboutInfo/${info}`);
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView>
        <View style={styles.content}>

          {/* Menu Title */}
          <Text style={styles.title}>The Menu for your options!</Text>
          
        </View>

        {/* Buttons Section */}
        <View style={styles.buttonContainer}>
          <CustomButton 
            title="About SERT"
            handlePress={() => handleNavigate('aboutSERT')}
            containerStyles={styles.button}
          />

          <CustomButton 
            title="About Dev"
            handlePress={() => handleNavigate('aboutDev')}
            containerStyles={styles.button}
          />

          <CustomButton 
            title="Sign In"
            handlePress={() => router.push('/sign-in')}
            containerStyles={styles.button}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

// StyleSheet for consistent styling
const styles = StyleSheet.create({
  safeArea: {
    backgroundColor: '#f9f9f9',
    flex: 1,
  },
  content: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginVertical: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: '600',
    marginVertical: 20,
    color: '#333',
  },
  buttonContainer: {
    backgroundColor: '#fff',
    borderRadius: 10,
    paddingHorizontal: 16,
    paddingVertical: 20,
    marginTop: 20,
  },
  button: {
    marginTop: 15,
    width: '100%',
    alignItems: 'center',
  },
});

export default menu;
