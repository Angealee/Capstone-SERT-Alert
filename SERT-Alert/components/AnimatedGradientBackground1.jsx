import React, { useEffect } from 'react';
import { Animated, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const AnimatedGradientBackground1 = () => {
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
    outputRange: ['#FE7F2D', '#233D4D'] // Customize these colors
  });

  return (
    <Animated.View style={[StyleSheet.absoluteFill, { backgroundColor }]}>
      <LinearGradient
        colors={['#FE7F2D', '#233D4D']}
        start={{ x: 1, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={StyleSheet.absoluteFill}
      />
    </Animated.View>
  );
};

export default AnimatedGradientBackground1;
