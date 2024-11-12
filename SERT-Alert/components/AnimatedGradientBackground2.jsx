import React, { useEffect } from 'react';
import { Animated, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const AnimatedGradientBackground2 = () => {
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
    outputRange: ['#FE7F2D', '#C63434'] // Customize these colors
  });

  return (
    <Animated.View style={[StyleSheet.absoluteFill, { backgroundColor }]}>
      <LinearGradient
        colors={['#FE7F2D', '#C63434']}
        start={{ x: 0, y: 1 }}
        end={{ x: 0, y: 0 }}
        style={StyleSheet.absoluteFill}
      />
    </Animated.View>
  );
};

export default AnimatedGradientBackground2;
