import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { Image } from 'react-native';
import { icons } from '../constants'

const SearchInput = ({ title, value, placeholder, handleChangeText, otherStyles, ...props}) => {
    const [showPassword, setshowPassword] = useState(false)
  return (
        <View className="bg-white w-[92%] h-12 px-6 bg-white-100 rounded-2xl focus:border-secondary items-center flex-row space-x-4">
            <TextInput 
                className="text-base mt-0.5 text-black flex-1 font-pregular"
                value={value}
                placeholder="Search a learning material"
                placeholderTextColor="#7b7b8b"
                onChangeText={handleChangeText}
            />

            <TouchableOpacity>
                <Image
                source={icons.search}
                className='w-5 h-5'
                resizeMode='contain'
                />
            </TouchableOpacity>
        </View>
  )
}

export default SearchInput