import { StyleSheet, Text, View } from 'react-native'
import { StatusBar } from 'expo-status-bar';
import React from 'react'
import { Stack } from 'expo-router';

const TopicsLayout = () => {
  return (
    <>
      <Stack>
        <Stack.Screen
          name="emergencyResponseBasics"
          options={{
            headerShown:false,
          }}
        />
        <Stack.Screen
          name="firstAidTechniques"
          options={{
            headerShown:false,
          }}
        />
        <Stack.Screen
          name="naturalDisasterPreparedness"
          options={{
            headerShown:false,
          }}
        />
      </Stack>
      <StatusBar backgroundColor='#161622'
      style='light'/>

    </>
  )
}

export default TopicsLayout

const styles = StyleSheet.create({})