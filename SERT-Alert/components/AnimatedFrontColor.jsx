import React, { useEffect } from 'react';
import { Animated, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const AnimatedFrontColor = () => {
  const animatedValue = new Animated.Value(0);

  useEffect(() => {
    Animated.loop(
      Animated.timing(animatedValue, {
        toValue: 1,
        duration: 1000, // Adjust duration for slower/faster transition
        useNativeDriver: false,
      })
    ).start();
  }, []);

  // Interpolate colors
  const backgroundColor = animatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['#E65F5C', '#FFFF82'] // Customize these colors
  });

  return (
    <Animated.View style={[StyleSheet.absoluteFill, { backgroundColor }]}>
      <LinearGradient
        colors={['#f4f4f9', '#FCB97D']}
        start={{ x: 1, y: 1 }}
        end={{ x: 1, y: 0 }}
        style={StyleSheet.absoluteFill}
      />
    </Animated.View>
  );
};

export default AnimatedFrontColor;
