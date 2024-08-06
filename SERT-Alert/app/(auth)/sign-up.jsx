import React, { useState } from 'react'; 
import { View, Text, SafeAreaView, ScrollView} from 'react-native'
import { Link } from 'expo-router';
import { router } from 'expo-router';

import { Picker } from '@react-native-picker/picker';
import FormField from '../../components/FormField';
import CustomButton  from '../../components/CustomButton';


const SignUp = () => {
  const [form, setform] = useState({
    name: '',
    department: '',
    yearCourseSection: '',
    email: '',
    password:''
  })
  const [isSubmitting, setisSubmitting] = useState(false)
  const [yearCourseOptions, setYearCourseOptions] = useState([]);
  const [isYearCourseEnabled, setIsYearCourseEnabled] = useState(false);

  const handleDepartmentChange = (department) => {
    let options = [];
    switch (department) {
      case 'JHS Department':
        options = ['Grade 7', 'Grade 8', 'Grade 9', 'Grade 10'];
        break;
      case 'SHS Department':
        options = ['STEM', 'ICT', 'ABM', 'GAS', 'HUMSS'];
        break;
      case 'College Department':
        options = ['CHM', 'CCS', 'CED', 'CCJE', 'CBA'];
        break;
      default:
        options = [];
    }
    setform({ ...form, department, yearCourseSection: '' });
    setYearCourseOptions(options);
    setIsYearCourseEnabled(true);
  };

  const submit = () => {
    // Handle the form submission logic
  }
  return (
    <SafeAreaView className="bg-white h-full">
      <ScrollView>
        <View className="w-full justify-center min-h-[85vh] px-4 my-6">
          {/* <Image source={images.logo}
          resizeMode='contain' className="w-[115px] h-[35px]"/> */}
          <Text className="text-2xl text-black text-semibold mt-10 font-psemibold">Sign Up!</Text>

        {/* Name */}
        <FormField 
          title="Name"
          value={form.name}
          handleChangeText={(e) => setform({...form, name: e})}
          otherStyles="mt-7"
        />

        {/* Email */}
        <FormField 
          title="Email"
          value={form.email}
          handleChangeText={(e) => setform({...form, email: e})}
          otherStyles="mt-7"
          keyboardType="email-address"
        />

        {/* Password */}
        <FormField 
          title="Password"
          value={form.password}
          handleChangeText={(e) => setform({...form, password: e})}
          otherStyles="mt-7"
        />

        <CustomButton 
          title="Submit Request Account"
          handlePress={submit}
          containerStyles="mt-7"
          isLoading={isSubmitting}
        />

        <CustomButton 
          title="Back"
          handlePress={() => router.push('/sign-in')}
          containerStyles="mt-7"
          isLoading={isSubmitting}
        />

        {/* <View className='justify-center pt-5 flex-row gap-2'>
          <Text className='text-lg text-gray-100 font-pregular'>
            Don't have an account?
          </Text>
          <Link href="/sign-up" className="text-lg font-psemibold text-secondary">
            Sign-up
          </Link>
        </View> */}

        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default SignUp