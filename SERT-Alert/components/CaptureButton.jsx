import React from 'react';
import { TouchableOpacity, Text, ActivityIndicator, Image } from 'react-native';

const CustomButton = ({ title, handlePress, containerStyles, isLoading, icon }) => {
  return (
    <TouchableOpacity 
      onPress={handlePress} 
      activeOpacity={0.7}
      className ={`rounded-xl min-h-[50px] min-w-[42px] justify-center items-center ${containerStyles} ${isLoading ? 'opacity-50' : ''}`}
        style={[{backgroundColor: '#24579c'}]}

      disabled={isLoading}>
      <Text className={`text-white font-semibold text-lg &{textStyles}`}>
            {title}
        </Text>
    </TouchableOpacity>
  );
};

export default CustomButton;
