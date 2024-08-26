import { StyleSheet, Text, View } from 'react-native'
import { StatusBar } from 'expo-status-bar';
import React from 'react'
import { Stack } from 'expo-router';

const TopicsLayout = () => {
  return (
    <>
      <Stack
        screenOptions={({ route }) => ({
          headerTitle: getHeaderTitle(route.name),
          headerStyle: {
            backgroundColor: '#ea580b', // Customize header background color
          },
          headerTintColor: '#fff', // Customize header text color
        })}
    >
      <Stack.Screen
        name="emergencyResponseBasics"
        options={{
          title: 'Emergency Response Basics',
        }}
      />
      <Stack.Screen
        name="firstAidTechniques"
        options={{
          title: 'First Aid Techniques',
        }}
      />
      <Stack.Screen
        name="naturalDisasterPreparedness"
        options={{
          title: 'Natural Disaster Preparedness',
        }}
      />
      <Stack.Screen
        name="swimmingWaterSafety"
        options={{
          title: 'Swimming and Water Safety',
        }}
      />
      {/* Add more screens as needed */}
    </Stack>
    
      <StatusBar backgroundColor='#161622'
      style='light'/>

    </>
  )
}

// Helper function to get the header title based on the route name
const getHeaderTitle = (routeName) => {
  switch (routeName) {
    case 'emergencyResponseBasics':
      return 'Emergency Response Basics';
    case 'firstAidTechniques':
      return 'First Aid Techniques';
    case 'naturalDisasterPreparedness':
      return 'Natural Disaster Preparedness';
    case 'swimmingWaterSafety':
      return 'Swimming and Water Safety';
    default:
      return 'Learning Module';
  }
};


export default TopicsLayout

const styles = StyleSheet.create({})