import React from 'react';
import { View, Text, Image, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { images } from '../../constants'; // Assuming you have images/constants set up

const AboutSERT = () => {
  return (
    <SafeAreaView className="bg-white h-full">
      <ScrollView>
        <View className="p-4">
          <Image 
            source={images.SERT} // Add your image here
            className="w-full h-56 rounded-lg mb-4"
            style={{ width: '100%', height: 230 }}
            resizeMode='cover'
          />
          <Text className="text-2xl font-bold mb-4">Student Emergency Response Team</Text>
          <Text className="text-lg mb-6" style={{textAlign: 'justify'}}>
          The Student Emergency Response Team (SERT) at Dominican College of Tarlac has faced challenges in ensuring timely and effective emergency response. The current communication infrastructure, which relies on walkie-talkies and direct communication with students, has room for improvement. Communication breakdowns can hinder the dissemination of critical information during emergencies, highlighting the need for strategic enhancements to the emergency response protocols.
          </Text>
          <Text className="text-lg mb-6" style={{textAlign: 'justify'}}>
          SERT was established on July 30, 2019, by Mr. John Arvin D. Miguel, a registered Nurse, Emergency Medical Technician (EMT), Safety Officer, and Senior High School facilitator at Dominican College of Tarlac. With the assistance of Angel Miranda, a standout Senior High School STEM student, the team initially comprised 13 members from Junior High School (JHS), Senior High School (SHS), and College. SERT quickly gained recognition as the first emergency response team organization at Dominican College of Tarlac, setting high standards in emergency preparedness and response.
          </Text>
          <Image 
            source={images.SERTpicture} // Add your image here
            className="w-full h-56 rounded-lg mb-4"
            style={{ width: '100%', height: 220 }}
            resizeMode='cover'
          />
          <Text className="text-lg mb-6" style={{textAlign: 'justify'}}>
          By 2024, SERT has grown to 144 active members, including alumni and current students. It has become the first student organization in Tarlac Province under the Tarlac Diocese School Association (TDSA). Officially registered with the Office of the Students Association at DCT, SERT's commitment to excellence is further demonstrated by its Memorandum of Understanding with the MDRRMC in Capas Province. Through continuous education, training, and community outreach, SERT has significantly contributed to creating safer environments, ensuring every student has essential emergency response skills.
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default AboutSERT;
