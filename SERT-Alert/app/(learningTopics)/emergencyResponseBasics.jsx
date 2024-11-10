import React, { useRef } from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { images } from '../../constants';

const EmergencyResponseBasics = () => {

  const scrollViewRef = useRef(null);
  const assessRef = useRef(null);
  const helpRef = useRef(null);
  const supportRef = useRef(null);
  const stayingCalmRef = useRef(null);
  const initialStepsToEmergencyRef = useRef(null);
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
            source={images.emergencyResponseHeader} // Add your image here
            className="w-full h-56 rounded-lg mb-4"
            resizeMode='cover'
          />
          <Text className="text-2xl font-pbold mb-4">Basic Emergency Response</Text>
          <Text className="text-lg mb-2">
            In emergency situations, quick and effective response can save lives. The first few minutes of an emergency are crucial for actions done. Early intervention and warnings can reduce the risk of physical harm to buildings and other assets, save lives, and improve resilience.
          </Text>
          <Text className="text-lg mb-2">This covers the basics of emergency response until professional help arrives, including:</Text>

          <TouchableOpacity onPress={() => scrollToSection(assessRef)}>
            <Text className="text-lg font-bold pl-4 mb-3 mt-4">• Assessing the situation</Text>
          </TouchableOpacity>
          
          <TouchableOpacity onPress={() => scrollToSection(helpRef)}>
            <Text className="text-lg font-bold pl-4 mb-3">• Calling for help</Text>
          </TouchableOpacity>
          
          <TouchableOpacity onPress={() => scrollToSection(supportRef)}>
            <Text className="text-lg font-bold pl-4 mb-4">• Providing basic support</Text>
          </TouchableOpacity>
          
          <TouchableOpacity onPress={() => scrollToSection(stayingCalmRef)}>
            <Text className="text-lg font-bold pl-4 mb-4">• Importance of staying calm</Text>
          </TouchableOpacity>
          
          <TouchableOpacity onPress={() => scrollToSection(initialStepsToEmergencyRef)}>
            <Text className="text-lg font-bold pl-4 mb-4">• Initial steps to take in an emergency</Text>
          </TouchableOpacity>
          

          {/* Assessing the Situation Section */}
          <View ref={assessRef} className="mb-4 mt-4" >
            <Text className="text-xl font-pbold mb-2">1. Assessing the Situation</Text>
            <Image 
              source={images.riskAssessment} // Add your image here
              className="w-full h-56 rounded-lg"
              resizeMode='contain'
            />

            <Text className="text-lg mb-2 pl-4 pr-2">
              Begin by identifying immediate dangers, such as fire, hazardous materials, or structural damage. Take note of any injuries and consider if the environment is safe to approach or if you need to wait for professional responders.
            </Text>
            
            <Text className="text-lg font-bold mb-2 pl-4">A. Situational Awareness:</Text>
            <Text className="text-lg mb-2 pl-4 pr-2">
              Situational awareness is crucial as it involves recognizing what is happening around you to identify dangers, hazards, or ongoing threats. Assessing the scene quickly and accurately ensures the safety of both the responder and those needing assistance.
            </Text>
          </View>

          <Text className="text-lg font-bold mb-2 pl-4">B. Identifying Hazards:</Text>
            <Text className="text-lg mb-2 pl-4 pr-2">
              Look out for immediate hazards such as smoke, fire, gas leaks, or falling debris. Identifying these threats helps responders choose safe positions and avoid areas where they might be at risk.
            </Text>

            <Text className="text-lg font-bold mb-2 pl-4">C. Evaluating Environmental Conditions:</Text>
            <Text className="text-lg mb-2 pl-4 pr-2">
              Environmental factors like weather, visibility, and structural stability can impact response actions. In cases of floods, fires, or extreme temperatures, these conditions might affect both the approach and the tools required to help safely.
            </Text>

            <Text className="text-lg font-bold mb-2 pl-4">D. Assessing Victim Needs:</Text>
            <Text className="text-lg mb-2 pl-4 pr-2">
              Determine the condition of any victims. Are they conscious or unconscious? Are there any visible injuries, or do they need immediate assistance? This assessment helps prioritize aid based on the severity of the situation and the available resources.
            </Text>
          </View>

          {/* Calling for Help Section */}
          <View ref={helpRef} className="mb-4 p-4">
            <Text className="text-xl font-pbold mb-2">2. Calling for Help</Text>
            <Image 
              source={images.callforhelp} // Add your image here
              className="w-full h-56 rounded-lg"
              resizeMode='contain'
            />
            <Text className="text-lg mb-2 pl-4 pr-2">
              Once the situation is assessed, call for help immediately. Contact emergency services, provide them with specific information about the location, nature of the emergency, and any immediate threats.
            </Text>

            <Text className="text-lg font-bold mb-2 pl-4">A. Providing Clear Information:</Text>
            <Text className="text-lg mb-2 pl-4 pr-2">
              Communicate clearly when calling for help. Describe the situation, location, and type of emergency. This helps responders prepare and ensures they have the necessary resources to handle the situation.
            </Text>

            <Text className="text-lg font-bold mb-2 pl-4">B. Knowing Emergency Numbers:</Text>
            <Text className="text-lg mb-2 pl-4 pr-2">
              Make sure you know the emergency numbers for local services (e.g., 911 in the US). If you're in an unfamiliar area, locate this information quickly. Some areas also have specialized hotlines for medical, fire, or police emergencies.
            </Text>

            <Text className="text-lg font-bold mb-2 pl-4">C. Staying Calm and Focused:</Text>
            <Text className="text-lg mb-2 pl-4 pr-2">
              Staying calm helps you communicate information accurately and effectively. Try to control any stress or panic, as calmness can make it easier to deliver clear instructions and follow responders' guidance.
            </Text>

            <Text className="text-lg font-bold mb-2 pl-4">D. Following Instructions from Dispatch:</Text>
            <Text className="text-lg mb-2 pl-4 pr-2">
              Emergency operators may give you specific instructions for immediate actions or precautions until responders arrive. Listen carefully, follow these instructions, and ask questions if anything is unclear.
            </Text>

          {/* Providing Basic Support */}
          <View ref={supportRef} className="mb-4 mt-4">
            <Text className="text-xl font-pbold mb-2">3. Providing Basic Support</Text>
            <Image 
              source={images.basicSupport} // Add your image here
              className="w-full h-56 rounded-lg"
              resizeMode='contain'
            />
            <Text className="text-lg mb-2 pl-4 pr-2">
              While waiting for help, provide basic support if it is safe to do so. This may include first aid, reassuring victims, and keeping them calm.
            </Text>
            <Text className="text-lg font-bold mb-2 pl-4">A. First Aid:</Text>
            <Text className="text-lg mb-2 pl-4 pr-2">
              If trained, administer first aid such as controlling bleeding, performing CPR, or treating minor injuries. Avoid moving injured individuals unless they are in immediate danger.
            </Text>
            <Text className="text-lg font-bold mb-2 pl-4">B. Keeping Calm:</Text>
            <Text className="text-lg mb-2 pl-4 pr-2">
              In emergencies, panic can worsen the situation. By staying calm and speaking reassuringly, you can help others remain composed until professional help arrives.
            </Text>

            <Text className="text-lg font-bold mb-2 pl-4">C. Assisting with Basic Needs</Text>
            <Text className="text-lg mb-2 pl-4 pr-2">
              In some cases, victims may need help with basic needs like drinking water or a blanket to stay warm. Offering this support can provide comfort and reduce shock.
            </Text>

            <Text className="text-lg font-bold mb-2 pl-4">D. Comforting and Reassuring</Text>
            <Text className="text-lg mb-2 pl-4 pr-2">
              Provide comforting words and reassurance to keep victims calm and cooperative. Emotional support can be as important as physical aid in emergencies.
            </Text>
          </View>

          {/* Importance of Staying Calm Section */}
          <View ref={stayingCalmRef} className="mb-4">
            <Text className="text-xl font-pbold mb-2">4. Importance of Staying Calm</Text>
            <Image 
              source={images.keepCalm} // Add your image here
              className="w-full h-56 rounded-lg"
              resizeMode='contain'
            />
            <Text className="text-lg mb-2 pl-4 pr-2">
              Staying calm in an emergency helps responders communicate effectively, make sound decisions, and provide clear guidance to others.
            </Text>

            <Text className="text-lg font-bold mb-2 pl-4">A. Reducing Panic</Text>
            <Text className="text-lg mb-2 pl-4 pr-2">
              By remaining calm, you can prevent panic, which can often worsen the situation.
            </Text>

            <Text className="text-lg font-bold mb-2 pl-4">B. Clear Communication</Text>
            <Text className="text-lg mb-2 pl-4 pr-2">
              Calmness helps you communicate clearly, ensuring responders understand the situation.
            </Text>

            <Text className="text-lg font-bold mb-2 pl-4">C. Improving Decision-Making</Text>
            <Text className="text-lg mb-2 pl-4 pr-2">
              Staying calm allows you to think more clearly and make better decisions, which can lead to more effective actions in critical moments.
            </Text>

            <Text className="text-lg font-bold mb-2 pl-4">D. Setting a Positive Example</Text>
            <Text className="text-lg mb-2 pl-4 pr-2">
              Remaining composed sets an example for others, helping to reduce fear and maintain order in the situation.
            </Text>
          </View>

          {/* Initial Steps to Take in an Emergency Section */}
          <View ref={initialStepsToEmergencyRef}className="mb-4">
            <Text className="text-xl font-pbold mb-2">5. Initial Steps to Take in an Emergency</Text>
            <Image 
              source={images.takeInEmergency} // Add your image here
              className="w-full h-56 rounded-lg"
              resizeMode='contain'
            />
            <Text className="text-lg mb-2 pl-4 pr-2">
              The initial steps in an emergency are crucial for ensuring safety and obtaining help quickly.
            </Text>

            <Text className="text-lg font-bold mb-2 pl-4">A. Assessing Immediate Dangers</Text>
            <Text className="text-lg mb-2 pl-4 pr-2">
              Identify any immediate hazards, such as fire or flooding, and take measures to move to a safe location.
            </Text>

            <Text className="text-lg font-bold mb-2 pl-4">B. Calling for Help</Text>
            <Text className="text-lg mb-2 pl-4 pr-2">
              Contact emergency services, providing accurate information about the emergency and location.
            </Text>

            <Text className="text-lg font-bold mb-2 pl-4">C. Ensuring Personal Safety</Text>
            <Text className="text-lg mb-2 pl-4 pr-2">
              Before assisting others, make sure you are safe. Avoid putting yourself in harm’s way and assess if it’s safe to provide help.
            </Text>

            <Text className="text-lg font-bold mb-2 pl-4">D. Identifying Nearby Resources</Text>
            <Text className="text-lg mb-2 pl-4 pr-2">
              Look for nearby resources like fire extinguishers, first aid kits, or emergency exits. Knowing where these are can help you act more effectively.
            </Text>
          </View>
          
          <View >
            <TouchableOpacity onPress={() => scrollToSection(backToTopRef)}>
              <Text className="text-lg font-bold pl-4 mb-3 mt-4">Tap to go up!</Text>
            </TouchableOpacity>
          </View>

        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default EmergencyResponseBasics;
