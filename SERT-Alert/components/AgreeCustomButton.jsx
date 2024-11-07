import { TouchableOpacity, Text } from 'react-native'
import React from 'react'

const AgreeCustomButton = ({ title, handlePress, containerStyles, textStyles, isLoading}) => {
  return (
    <TouchableOpacity
    hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }} 
    onPress={handlePress}
    activeOpacity={0.7}
    className ={`bg-primary rounded-xl min-h-[62px] min-w-[42px] justify-center items-center ${containerStyles} ${isLoading ? 'opacity-50' : ''}`}
    disabled={isLoading}>
        <Text className={`text-white font-semibold text-lg &{textStyles}`}>
            {title}
        </Text>
    </TouchableOpacity>
  )
}

export default AgreeCustomButton