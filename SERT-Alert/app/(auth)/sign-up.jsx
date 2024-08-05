import React, { useState } from 'react'; 
import { View, Text, SafeAreaView, ScrollView} from 'react-native'
import { Link } from 'expo-router';
import { router } from 'expo-router';

import { Picker } from '@react-native-picker/picker';
import FormField from '../../components/FormField';
import CustomButton  from '../../components/CustomButton';
import { createUser } from '../../lib/appwrite';


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
    createUser();
  }
  return (
    <SafeAreaView className="bg-white h-full">
      <ScrollView>
        <View className="w-full justify-center min-h-[85vh] px-4 my-6">
          {/* <Image source={images.logo}
          resizeMode='contain' className="w-[115px] h-[35px]"/> */}
          <Text className="text-2xl text-black text-semibold mt-10 font-psemibold">Sign Up!</Text>

        <FormField 
          title="Name"
          value={form.name}
          handleChangeText={(e) => setform({...form, name: e})}
          otherStyles="mt-7"
        />
        <View className="mt-7">
        <Text className="text-base text-black-100 font-pmedium">Department</Text>
            <View className="border-2 border-red-500 w-full h-16 px-4 bg-white-100 rounded-2xl focus:border-secondary items-center flex-row">
              <Picker
                selectedValue={form.department}
                onValueChange={handleDepartmentChange}
                style={{ flex: 1, color: '#000' }}
              >
                <Picker.Item label="Select Department" value="" />
                <Picker.Item label="JHS Department" value="JHS Department" />
                <Picker.Item label="SHS Department" value="SHS Department" />
                <Picker.Item label="College Department" value="College Department" />
              </Picker>
            </View>
        </View>
        
        <View className="mt-7">
            <Text className="text-base text-black-100 font-pmedium">Year/Course/Section</Text>
            <View className="border-2 border-red-500 w-full h-16 px-4 bg-white-100 rounded-2xl focus:border-secondary items-center flex-row">
              <Picker
                selectedValue={form.yearCourseSection}
                onValueChange={(value) => setForm({ ...form, yearCourseSection: value })}
                enabled={isYearCourseEnabled}
                style={{ flex: 1, color: '#000' }}
              >
                <Picker.Item label="Select Year/Course/Section" value="" />
                {yearCourseOptions.map((option, index) => (
                  <Picker.Item key={index} label={option} value={option} />
                ))}
              </Picker>
            </View>
          </View>

        <FormField 
          title="Email"
          value={form.email}
          handleChangeText={(e) => setform({...form, email: e})}
          otherStyles="mt-7"
          keyboardType="email-address"
        />
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