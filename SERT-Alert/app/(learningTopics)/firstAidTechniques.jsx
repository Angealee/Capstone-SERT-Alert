import React, { useRef } from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { images } from '../../constants';

const FirstAidTechniques = () => {

  const scrollViewRef = useRef(null);
  const bleedRef = useRef(null);
  const cprRef = useRef(null);
  const burnRef = useRef(null);
  const chokingRef = useRef(null);
  const fractureRef = useRef(null);
  const backToTopRef = useRef(null);

  const scrollToSection = (ref) => {
    ref.current?.measureLayout(
      scrollViewRef.current,
      (x, y) => {
        scrollViewRef.current?.scrollTo({ y: y, animated: true });
      }
    )
  };

  return (
    <SafeAreaView className="bg-white h-full">
      <ScrollView ref={scrollViewRef}>
        <View ref={backToTopRef} className="p-4">
          <Image 
            source={images.firstAidHeader} // Add your image here
            className="w-full h-56 rounded-lg mb-4"
            resizeMode='cover'
          />
          <Text className="text-2xl font-pbold mb-4">First Aid Techniques</Text>
          <Text className="text-lg mb-2">
            //input description here
          </Text>
          <Text className="text-lg mb-2">This covers the First Aid Techniques until professional help arrives, including:</Text>

          {/* CHANGE THESE INTO THE RESPECTIVE MAIN TOPICS FOR FIRST AID TECHNIQUES */}
          <TouchableOpacity onPress={() => scrollToSection(bleedRef)}>
            <Text className="text-lg font-bold pl-4 mb-3 mt-4">• Bleed Control</Text>
          </TouchableOpacity>
          
          <TouchableOpacity onPress={() => scrollToSection(cprRef)}>
            <Text className="text-lg font-bold pl-4 mb-3">• CPR (Cardiopulmonary Resuscitation)</Text>
          </TouchableOpacity>
          
          <TouchableOpacity onPress={() => scrollToSection(burnRef)}>
            <Text className="text-lg font-bold pl-4 mb-4">• Burns Treatment</Text>
          </TouchableOpacity>
          
          <TouchableOpacity onPress={() => scrollToSection(chokingRef)}>
            <Text className="text-lg font-bold pl-4 mb-4">• Choking Response</Text>
          </TouchableOpacity>
          
          <TouchableOpacity onPress={() => scrollToSection(fractureRef)}>
            <Text className="text-lg font-bold pl-4 mb-4">• Fracture Stabilization</Text>
          </TouchableOpacity>
          

          {/* Bleed Control */}
          <View ref={bleedRef} className="mb-4 mt-4" >
            <Text className="text-xl font-pbold mb-2">1. Bleed Control</Text>
            <Image 
              source={images.bleedControl} // Add your image here
              className="w-full h-56 rounded-lg"
              resizeMode='contain'
            />

            <Text className="text-lg mb-2 pl-4 pr-2">
            Proper bleeding control can prevent life-threatening blood loss in an emergency. This section covers techniques to safely manage and control bleeding.
            </Text>
            
            <Text className="text-lg font-bold mb-2 pl-4">A. Direct Pressure:</Text>
            <Text className="text-lg mb-2 pl-4 pr-2">
            //input descriptin here
            </Text>
          </View>

          <Text className="text-lg font-bold mb-2 pl-4">B. Elevation:</Text>
            <Text className="text-lg mb-2 pl-4 pr-2">
            //input descriptin here
            </Text>

          <Text className="text-lg font-bold mb-2 pl-4">C. Use of Bandages:</Text>
            <Text className="text-lg mb-2 pl-4 pr-2">
            //input descriptin here
            </Text>

          <Text className="text-lg font-bold mb-2 pl-4">D. Tourniquet Application:</Text>
            <Text className="text-lg mb-2 pl-4 pr-2">
            //input descriptin here
            </Text>

          <Text className="text-lg font-bold mb-2 pl-4">E. Recognizing Shock Symptoms:</Text>
            <Text className="text-lg mb-2 pl-4 pr-2">
            //input descriptin here
            </Text>

            {/* CPR */}
          <View ref={cprRef} className="mb-4 mt-4" >
            <Text className="text-xl font-pbold mb-2">2. CPR (Cardiopulmonary Resuscitation)</Text>
            <Image 
              source={images.cpr} // Add your image here
              className="w-full h-56 rounded-lg"
              resizeMode='contain'
            />

            <Text className="text-lg mb-2 pl-4 pr-2">
            CPR is a lifesaving technique used in cases of cardiac arrest. It helps maintain blood flow and oxygen to the brain and vital organs until professional medical help arrives.
            </Text>
            
            <Text className="text-lg font-bold mb-2 pl-4">A. Chest Compressions::</Text>
            <Text className="text-lg mb-2 pl-4 pr-2">
            //input descriptin here
            </Text>

            <Text className="text-lg font-bold mb-2 pl-4">B. Rescue Breathsc:</Text>
            <Text className="text-lg mb-2 pl-4 pr-2">
            //input descriptin here
            </Text>

            <Text className="text-lg font-bold mb-2 pl-4">C. Hands-Only CPR:</Text>
            <Text className="text-lg mb-2 pl-4 pr-2">
            //input descriptin here
            </Text>

            <Text className="text-lg font-bold mb-2 pl-4">D. CPR for Children and Infants:</Text>
            <Text className="text-lg mb-2 pl-4 pr-2">
            //input descriptin here
            </Text>
          </View>

          {/* Burns Treatment */}
          <View ref={burnRef} className="mb-4 mt-4" >
            <Text className="text-xl font-pbold mb-2">3. Burns Treatment</Text>
            <Image 
              source={images.burnTreatment} // Add your image here
              className="w-full h-56 rounded-lg"
              resizeMode='contain'
            />

            <Text className="text-lg mb-2 pl-4 pr-2">
              //input descriptin here
            </Text>
            
            <Text className="text-lg font-bold mb-2 pl-4">A. Cool the Burn:</Text>
            <Text className="text-lg mb-2 pl-4 pr-2">
            //input descriptin here
            </Text>

            <Text className="text-lg font-bold mb-2 pl-4">B. Covering the Burn:</Text>
            <Text className="text-lg mb-2 pl-4 pr-2">
            //input descriptin here
            </Text>

            <Text className="text-lg font-bold mb-2 pl-4">C. Avoiding Ice:</Text>
            <Text className="text-lg mb-2 pl-4 pr-2">
            //input descriptin here
            </Text>

            <Text className="text-lg font-bold mb-2 pl-4">D. Identifying Burn Severity:</Text>
            <Text className="text-lg mb-2 pl-4 pr-2"> 
            //input descriptin here
            </Text>

            <Text className="text-lg font-bold mb-2 pl-4">E. Pain Relief Techniques:</Text>
            <Text className="text-lg mb-2 pl-4 pr-2"> 
            //input descriptin here
            </Text>
          </View>

          {/* Choking Response */}
          <View ref={chokingRef} className="mb-4 mt-4" >
            <Text className="text-xl font-pbold mb-2">4. Choking Response</Text>
            <Image 
              source={images.choking} // Add your image here
              className="w-full h-56 rounded-lg"
              resizeMode='contain'
            />

            <Text className="text-lg mb-2 pl-4 pr-2">
              //input descriptin here
            </Text>
            
            <Text className="text-lg font-bold mb-2 pl-4">A. Back Blows: </Text>
            <Text className="text-lg mb-2 pl-4 pr-2">
            //input descriptin here
            </Text>

            <Text className="text-lg font-bold mb-2 pl-4">B. Abdominal Thrusts (Heimlich Maneuver):</Text>
            <Text className="text-lg mb-2 pl-4 pr-2">
            //input descriptin here
            </Text>

            <Text className="text-lg font-bold mb-2 pl-4">C. Choking in Infants:</Text>
            <Text className="text-lg mb-2 pl-4 pr-2">
            //input descriptin here
            </Text>

            <Text className="text-lg font-bold mb-2 pl-4">D. Recognizing Silent Choking:</Text>
            <Text className="text-lg mb-2 pl-4 pr-2">
            //input descriptin here
            </Text>

            <Text className="text-lg font-bold mb-2 pl-4">E. Aftercare Post-Choking:</Text>
            <Text className="text-lg mb-2 pl-4 pr-2">
            //input descriptin here
            </Text>
          </View>

          {/* Fracture Stabilization */}
          <View ref={fractureRef} className="mb-4 mt-4" >
            <Text className="text-xl font-pbold mb-2">5. Fracture Stabilization</Text>
            <Image 
              source={images.fracture} // Add your image here
              className="w-full h-56 rounded-lg"
              resizeMode='contain'
            />

            <Text className="text-lg mb-2 pl-4 pr-2">
            Proper handling of fractures can prevent further injury and alleviate pain. This section explains the methods for immobilizing broken bones until professional help arrives.
            </Text>
            
            <Text className="text-lg font-bold mb-2 pl-4">A. Immobilization Techniques:</Text>
            <Text className="text-lg mb-2 pl-4 pr-2">
            //input descriptin here
            </Text>

            <Text className="text-lg font-bold mb-2 pl-4">B. Avoiding Movement:</Text>
            <Text className="text-lg mb-2 pl-4 pr-2">
            //input descriptin here
            </Text>

            <Text className="text-lg font-bold mb-2 pl-4">C. Cold Application:</Text>
            <Text className="text-lg mb-2 pl-4 pr-2">
            //input descriptin here
            </Text>

            <Text className="text-lg font-bold mb-2 pl-4">D. Identifying Different Fracture Types:</Text>
            <Text className="text-lg mb-2 pl-4 pr-2">
            //input descriptin here
            </Text>

            <Text className="text-lg font-bold mb-2 pl-4">E. Elevating the Limb:</Text>
            <Text className="text-lg mb-2 pl-4 pr-2">
            //input descriptin here
            </Text>
          </View>


        </View>

        <View >
          <TouchableOpacity onPress={() => scrollToSection(backToTopRef)}>
            <Text className="text-lg font-bold pl-4 mb-3 mt-4">Tap to go up!</Text>
          </TouchableOpacity>
        </View>

      </ScrollView>
    </SafeAreaView>
  );
}

export default FirstAidTechniques;
