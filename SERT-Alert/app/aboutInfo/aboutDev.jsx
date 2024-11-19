import React from 'react';
import { View, Text, Image, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { images } from '../../constants'; // Assuming you have images/constants set up

const AboutDev = () => {
  return (
    <SafeAreaView className="bg-white h-full">
      <ScrollView>
        <View className="p-4">
        <Image 
            source={images.kobyMacale} // Add your image here
            className="w-full h-56 rounded-lg mb-4"
            style={{ width: '100%', height: 300 }}
            resizeMode='cover'
          />
          <Text className="text-2xl font-bold mb-4" >Koby Macale: The Programmer</Text>
          <Text className="text-lg mb-20" style={{textAlign: 'justify'}}>
          The backbone of the technical team, proficient in React Native, C#, JavaScript, and IoT systems. Facing challenges for debugging and other problems, The programmer ensures integration between a mobile app to web app to hardware, making ideas into reality. Beyond coding, sharing expertise in tools like Git and GitHub is also an important skills a programmer should possess.
          </Text>

          <Image 
            source={images.charldrinBello} // Add your image here
            className="w-full h-56 rounded-lg mb-4"
            style={{ width: '100%', height: 300 }}
            resizeMode='cover'
          />
          <Text className="text-2xl font-bold mb-4">Charldrin Bello: Project Manager</Text>
          <Text className="text-lg mb-20" style={{textAlign: 'justify'}}>
          The project manager is the strategic mind behind the SERT Alert capstone, coordinating efforts to meet deadlines and achieve goals. With a talent for organization and a deep understanding of user-centric design, this position ensures that every project remains focused on delivering value.
          </Text>

          <Image 
            source={images.kiokiSerrano} // Add your image here
            className="w-full h-56 rounded-lg mb-4"
            style={{ width: '100%', height: 400 }}
            resizeMode='cover'
          />
          <Text className="text-2xl font-bold mb-4">Kioki Serrano: Member</Text>
          <Text className="text-lg mb-20" style={{textAlign: 'justify'}}>
          The team's problem-solver, providing key support in development and research. Always eager to take on challenges. Perseverance and analytical mindset help processes and deliver effective solutions.
          </Text>

          <Image 
            source={images.luisMagdangal} // Add your image here
            className="w-full h-56 rounded-lg mb-4"
            style={{ width: '100%', height: 300 }}
            resizeMode='cover'
          />
          <Text className="text-2xl font-bold mb-4">Luis Magdangal: Member</Text>
          <Text className="text-lg mb-2" style={{textAlign: 'justify'}}>
          He brings creativity and critical thinking to the team, contributing innovative ideas and ensuring attention to detail in every aspect of development. With a dedication to learning and a passion for exploring new technologies
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default AboutDev;
