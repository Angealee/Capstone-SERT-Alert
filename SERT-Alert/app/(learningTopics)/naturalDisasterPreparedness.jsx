import React, { useRef } from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { images } from '../../constants'; // Assuming you have images/constants set up

const naturalDisasterPreparedness = () => {

  const scrollViewRef = useRef(null);
  const earthquakeRef = useRef(null);
  const fireEvacuationRef = useRef(null);
  const floodSafetyRef = useRef(null);
  const heatwaveSafetyRef = useRef(null);
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
            source={images.naturalDisaster} // Add your image here
            className="w-full h-56 rounded-lg mb-4"
            resizeMode='cover'
          />
          <Text className="text-2xl font-bold mb-4">Natural Disaster Preparedness</Text>
          <Text className="text-lg mb-2" style={{textAlign: 'justify'}}>
          Natural disasters can strike at any time, often with little warning, making preparedness essential for safety. Understanding the appropriate safety measures for different types of disasters can greatly improve survival chances and reduce risk. Natural disaster preparedness is the process of planning and preparing for potential natural disasters, such as earthquakes, floods, wildfires, and many more. It involves taking proactive steps to minimize the impact of these events on individuals, families, and communities. 
          </Text>

          <Text className="text-lg mb-1" style={{textAlign: 'justify'}}>This covers preparedness for earthquakes, fires, floods, and heatwaves, focusing on proactive steps to take before, during, and after each event to stay as safe as possible.</Text>

          {/* CHANGE THESE INTO THE RESPECTIVE MAIN TOPICS FOR FIRST AID TECHNIQUES */}
          <TouchableOpacity onPress={() => scrollToSection(earthquakeRef)}>
            <Text className="text-lg font-bold pl-4 mb-3 mt-1">• Earthquake Safety Measures</Text>
          </TouchableOpacity>
          
          <TouchableOpacity onPress={() => scrollToSection(fireEvacuationRef)}>
            <Text className="text-lg font-bold pl-4 mb-3">• Fire Evacuation Procedures</Text>
          </TouchableOpacity>
          
          <TouchableOpacity onPress={() => scrollToSection(floodSafetyRef)}>
            <Text className="text-lg font-bold pl-4 mb-4">• Flood Safety Measures</Text>
          </TouchableOpacity>
          
          <TouchableOpacity onPress={() => scrollToSection(heatwaveSafetyRef)}>
            <Text className="text-lg font-bold pl-4 mb-4">• Heatwave Safety</Text>
          </TouchableOpacity>

          {/* Earthquake Safety Measures */}
          <View ref={earthquakeRef} className="mb-4 mt-4">
            <Text className="text-xl font-pbold mb-2">1. Earthquake Safety Measures</Text>
            <Image 
              source={images.dropCover} // Add your earthquake safety image here
              className="w-full h-56 mb-3 rounded-lg"
              resizeMode='contain'
            />
            <Text className="text-lg mb-4 pl-4 pr-2">
              Earthquakes can happen unexpectedly, causing structural damage and injury. Knowing safety measures before, during, and after an earthquake can help you stay safe and minimize risks.
            </Text>
            
            {/* A. Before an Earthquake */}
            <Text className="text-lg font-bold mb-2 pl-4">A. Before an Earthquake:</Text>
            <Text className="text-lg mb-1 pl-4 pr-2">
              Prepare your home and family to ensure safety when an earthquake occurs. Secure heavy objects, prepare an emergency kit, and have an action plan.
            </Text>
            <View className="pl-8 pt-2 pr-5 mt-5 mb-5 border border-orange-50 rounded-3xl bg-orange-50">
              <View className="pl-2 pr-3">
                <Text className="font-bold text-lg">Tips:</Text>
                <View className="p-2">
                  <Text className="text-lg mb-2">• Secure heavy furniture and appliances to prevent tipping.</Text>
                  <Text className="text-lg mb-2">• Prepare an emergency kit with essentials like water, food, and first aid supplies.</Text>
                  <Text className="text-lg mb-2">• Identify safe spots to take cover in each room, like under sturdy tables.</Text>
                </View>
              </View>
            </View>

            {/* B. During an Earthquake */}
            <Text className="text-lg font-bold mb-2 pl-4">B. During an Earthquake:</Text>
            <Text className="text-lg mb-2 pl-4 pr-2">
              Stay calm and remember the "Drop, Cover, and Hold On" technique. Protect yourself from falling debris and stay put until the shaking stops.
            </Text>
            <View className="pl-8 pt-2 pr-5 mt-5 mb-5 border border-orange-50 rounded-3xl bg-orange-50">
              <View className="pl-2 pr-3">
                <Text className="font-bold text-lg">Tips:</Text>
                <View className="p-2">
                  <Text className="text-lg mb-2">• Drop to your hands and knees to avoid being knocked over.</Text>
                  <Image 
                    source={images.earthquakeSafety} // Add image for Drop, Cover, and Hold On
                    className="w-full h-40 rounded-lg mt-2 mb-6"
                    resizeMode='contain'
                  />
                  <Text className="text-lg mb-2">• Take cover under sturdy furniture and hold on until the shaking stops.</Text>
                  <Text className="text-lg mb-2">• Stay away from windows, outside walls, and objects that could fall.</Text>
                </View>
              </View>
            </View>

            {/* C. After an Earthquake */}
            <Text className="text-lg font-bold mb-2 pl-4">C. After an Earthquake:</Text>
            <Text className="text-lg mb-2 pl-4 pr-2">
              Once the shaking stops, check for injuries, avoid dangerous areas, and be prepared for aftershocks.
            </Text>
            <View className="pl-8 pt-2 pr-5 mt-5 mb-5 border border-orange-50 rounded-3xl bg-orange-50">
              <View className="pl-2 pr-3">
                <Text className="font-bold text-lg">Tips:</Text>
                <View className="p-2">
                  <Text className="text-lg mb-2">• Check yourself and others for injuries and provide first aid if needed.</Text>
                  <Text className="text-lg mb-2">• Avoid damaged buildings, fallen power lines, and gas leaks.</Text>
                  <Image 
                    source={images.fallenLines} // Add image for Drop, Cover, and Hold On
                    className="w-full h-40 rounded-lg mt-2 mb-6"
                    resizeMode='contain'
                  />
                  <Text className="text-lg mb-2">• Limit phone use to emergencies and prepare for possible aftershocks.</Text>
                </View>
              </View>
            </View>

            {/* D. Emergency Contacts and Communication */}
            <Text className="text-lg font-bold mb-2 pl-4">D. Emergency Contacts and Communication:</Text>
            <Text className="text-lg mb-2 pl-4 pr-2">
              Communication is vital during an earthquake. Set up a plan for how to contact loved ones and know emergency contacts.
            </Text>
            <View className="pl-8 pt-2 pr-5 mt-5 mb-5 border border-orange-50 rounded-3xl bg-orange-50">
              <View className="pl-2 pr-3">
                <Text className="font-bold text-lg">Tips:</Text>
                <View className="p-2">
                  <Text className="text-lg mb-2">• Identify an out-of-town contact person to help relay messages.</Text>
                  <Text className="text-lg mb-2">• Save important emergency numbers and rely on text messages if networks are overloaded.</Text>
                  <Text className="text-lg mb-2">• Know local emergency shelters and evacuation routes.</Text>
                </View>
              </View>
            </View>
          </View>


          {/* Fire Evacuation Procedures */}
          <View ref={fireEvacuationRef} className="mb-4 mt-4">
            <Text className="text-xl font-pbold mb-2">2. Fire Evacuation Procedures</Text>
            <Image 
              source={images.fireEvacuation} // Add your fire evacuation image here
              className="w-full h-56 mb-3 rounded-lg"
              resizeMode='contain'
            />
            <Text className="text-lg mb-4 pl-4 pr-2" style={{textAlign: 'justify'}}>
              Having a clear and practiced fire evacuation plan can save lives. This section covers essential steps and tips to ensure a safe and orderly evacuation in case of a fire.
            </Text>

            {/* A. Prepare an Evacuation Plan */}
            <Text className="text-lg font-bold mb-2 pl-4">A. Prepare an Evacuation Plan:</Text>
            <Text className="text-lg mb-2 pl-4 pr-2">
              A well-thought-out evacuation plan identifies safe exit routes, meeting points, and ensures everyone knows what to do in an emergency.
            </Text>
            <View className="pl-8 pt-2 pr-5 mt-5 mb-5 border border-orange-50 rounded-3xl bg-orange-50">
              <View className="pl-2 pr-3">
                <Text className="font-bold text-lg">Tips:</Text>
                <View className="p-2">
                  <Text className="text-lg mb-2">• Identify at least two exits from each room in your home or building.</Text>
                  <Text className="text-lg mb-2">• Establish a designated meeting point a safe distance away from the building.</Text>
                    <Image 
                      source={images.exitTwo} // Add your fire evacuation image here
                      className="w-full h-56 mb-3 rounded-lg"
                      resizeMode='contain'
                    />
                  <Text className="text-lg mb-2">• Practice evacuation drills with all household members or coworkers regularly.</Text>
                </View>
              </View>
            </View>

            {/* B. Fire Safety Equipment */}
            <Text className="text-lg font-bold mb-2 pl-4">B. Fire Safety Equipment:</Text>
            <Text className="text-lg mb-2 pl-4 pr-2">
              Fire safety equipment, such as smoke detectors, fire extinguishers, and emergency lights, is essential for early fire detection and safe evacuation.
            </Text>
            <View className="pl-8 pt-2 pr-5 mt-5 mb-5 border border-orange-50 rounded-3xl bg-orange-50">
              <View className="pl-2 pr-3">
                <Text className="font-bold text-lg">Tips or Steps</Text>
                <View className="p-2">
                  <Text className="text-lg mb-2">• Install smoke detectors on every floor and test them monthly.</Text>
                  <Image 
                    source={images.smokeDetector} // Add image for smoke detector
                    className="w-full h-40 rounded-lg mt-2 mb-6"
                    resizeMode='contain'
                  />
                  <Text className="text-lg mb-2">• Ensure you have a working fire extinguisher in key locations like the kitchen.</Text>
                  <Text className="text-lg mb-2">• Keep flashlights or emergency lights accessible in case of power outages.</Text>
                </View>
              </View>
            </View>

            {/* C. During a Fire Evacuation */}
            <Text className="text-lg font-bold mb-2 pl-4">C. During a Fire Evacuation:</Text>
            <Text className="text-lg mb-2 pl-4 pr-2">
              In the event of a fire, act quickly and calmly, follow your evacuation plan, and avoid dangerous actions.
            </Text>
            <View className="pl-8 pt-2 pr-5 mt-5 mb-5 border border-orange-50 rounded-3xl bg-orange-50">
              <View className="pl-2 pr-3">
                <Text className="font-bold text-lg">Tips or Steps</Text>
                <View className="p-2">
                  <Text className="text-lg mb-2">• If you encounter smoke, stay low and cover your nose and mouth.</Text>
                  <Image 
                    source={images.smokeLow} // Add image for staying low in smoke
                    className="w-full h-40 rounded-lg mt-2 mb-6"
                    resizeMode='contain'
                  />
                  <Text className="text-lg mb-2">• Use the back of your hand to check doors for heat before opening them.</Text>
                  <Text className="text-lg mb-2">• Do not use elevators; always take the stairs.</Text>
                </View>
              </View>
            </View>

            {/* D. After Evacuation */}
            <Text className="text-lg font-bold mb-2 pl-4">D. After Evacuation:</Text>
            <Text className="text-lg mb-2 pl-4 pr-2">
              After safely evacuating, ensure that everyone is accounted for, avoid re-entering the building, and call emergency services if necessary.
            </Text>
            <View className="pl-8 pt-2 pr-5 mt-5 mb-5 border border-orange-50 rounded-3xl bg-orange-50">
              <View className="pl-2 pr-3">
                <Text className="font-bold text-lg">Tips or Steps</Text>
                <View className="p-2">
                  <Text className="text-lg mb-2">• Conduct a headcount at the designated meeting point to ensure everyone is safe.</Text>
                  <Text className="text-lg mb-2">• Call 911 or your local emergency number if the fire department has not arrived.</Text>
                  <Text className="text-lg mb-2">• Do not re-enter the building until it is deemed safe by officials.</Text>
                </View>
              </View>
            </View>
          </View>

          {/* Flood Safety Measures */}
          <View ref={floodSafetyRef} className="mb-4 mt-4">
            <Text className="text-xl font-pbold mb-2">3. Flood Safety Measures</Text>
            <Image 
              source={images.flooding} // Add your flood safety image here
              className="w-full h-56 mb-3 rounded-lg"
              resizeMode='contain'
            />
            <Text className="text-lg mb-4 pl-4 pr-2">
              Floods can happen quickly and unexpectedly, so knowing how to prepare and respond can make all the difference. This section covers essential flood safety tips for before, during, and after a flood.
            </Text>

            {/* A. Preparing for a Flood */}
            <Text className="text-lg font-bold mb-2 pl-4">A. Preparing for a Flood:</Text>
            <Text className="text-lg mb-2 pl-4 pr-2">
              Preparation is key to staying safe during a flood. These steps will help you be ready if a flood warning is issued.
            </Text>
            <View className="pl-8 pt-2 pr-5 mt-5 mb-5 border border-orange-50 rounded-3xl bg-orange-50">
              <View className="pl-2 pr-3">
                <Text className="font-bold text-lg">Tips or Steps</Text>
                <View className="p-2">
                  <Text className="text-lg mb-2">• Have an emergency kit ready with essentials like water, food, and first aid supplies.</Text>
                  <Image 
                    source={images.supplyKit} // Add image for emergency kit
                    className="w-full h-40 rounded-lg mt-2 mb-6"
                    resizeMode='contain'
                  />
                  <Text className="text-lg mb-2">• Elevate electrical devices and valuable items to prevent water damage.</Text>
                  <Text className="text-lg mb-2">• Know your area’s flood risk and the nearest evacuation routes.</Text>
                </View>
              </View>
            </View>

            {/* B. During a Flood Warning */}
            <Text className="text-lg font-bold mb-2 pl-4">B. During a Flood Warning:</Text>
            <Text className="text-lg mb-2 pl-4 pr-2">
              During a flood warning, stay alert and take necessary precautions to protect yourself and your loved ones.
            </Text>
            <View className="pl-8 pt-2 pr-5 mt-5 mb-5 border border-orange-50 rounded-3xl bg-orange-50">
              <View className="pl-2 pr-3">
                <Text className="font-bold text-lg">Tips:</Text>
                <View className="p-2">
                  <Text className="text-lg mb-2">• Monitor local news or weather updates for evacuation instructions.</Text>
                  <Text className="text-lg mb-2">• Move to higher ground if flooding is imminent in your area.</Text>
                  <Text className="text-lg mb-2">• Avoid walking or driving through floodwaters, as they can be deeper and stronger than they appear.</Text>
                </View>
              </View>
            </View>

            {/* C. Evacuation During a Flood */}
            <Text className="text-lg font-bold mb-2 pl-4">C. Evacuation During a Flood:</Text>
            <Text className="text-lg mb-2 pl-4 pr-2">
              If evacuation is required, follow these steps to ensure a safe exit from the flood zone.
            </Text>
            <View className="pl-8 pt-2 pr-5 mt-5 mb-5 border border-orange-50 rounded-3xl bg-orange-50">
              <View className="pl-2 pr-3">
                <Text className="font-bold text-lg">Tips or Steps</Text>
                <View className="p-2">
                  <Text className="text-lg mb-2">• Secure your home, turn off utilities, and disconnect appliances.</Text>
                  <Image 
                    source={images.unplugged} // Add image for securing home before evacuation
                    className="w-full h-40 rounded-lg mt-2 mb-6"
                    resizeMode='contain'
                  />
                  <Text className="text-lg mb-2">• Follow marked evacuation routes and avoid taking shortcuts.</Text>
                  <Text className="text-lg mb-2">• Keep in touch with family members and inform them of your location.</Text>
                </View>
              </View>
            </View>

            {/* D. After the Flood */}
            <Text className="text-lg font-bold mb-2 pl-4">D. After the Flood:</Text>
            <Text className="text-lg mb-2 pl-4 pr-2">
              Once floodwaters recede, take these actions to ensure safety and start the recovery process.
            </Text>
            <View className="pl-8 pt-2 pr-5 mt-5 mb-5 border border-orange-50 rounded-3xl bg-orange-50">
              <View className="pl-2 pr-3">
                <Text className="font-bold text-lg">Tips or Steps</Text>
                <View className="p-2">
                  <Text className="text-lg mb-2">• Avoid entering flooded areas until authorities declare them safe.</Text>
                  <Image 
                    source={images.floodedArea} // Add image for flooded area
                    className="w-full h-40 rounded-lg mt-2 mb-6"
                    resizeMode='contain'
                  />
                  <Text className="text-lg mb-2">• Wear protective clothing and gear during cleanup to avoid contamination.</Text>
                  <Text className="text-lg mb-2">• Document damages with photos and contact your insurance company if applicable.</Text>
                </View>
              </View>
            </View>
          </View>

          {/* Heatwave Safety */}
          <View ref={heatwaveSafetyRef} className="mb-4 mt-4">
            <Text className="text-xl font-pbold mb-2">4. Heatwave Safety</Text>
            <Image 
              source={images.Heatwave} // Add your heatwave safety image here
              className="w-full h-56 mb-3 rounded-lg"
              resizeMode='contain'
            />
            <Text className="text-lg mb-4 pl-4 pr-2">
              During extreme heat, it’s essential to take measures to stay cool and avoid heat-related illnesses. This section covers key tips for staying safe during a heatwave.
            </Text>

            {/* A. Staying Cool Indoors */}
            <Text className="text-lg font-bold mb-2 pl-4">A. Staying Cool Indoors:</Text>
            <Text className="text-lg mb-2 pl-4 pr-2">
              Keeping your living space cool can reduce your risk of heat-related illnesses. Here are some tips to help you stay comfortable indoors.
            </Text>
            <View className="pl-8 pt-2 pr-5 mt-5 mb-5 border border-orange-50 rounded-3xl bg-orange-50">
              <View className="pl-2 pr-3">
                <Text className="font-bold text-lg">Tips or Steps</Text>
                <View className="p-2">
                  <Text className="text-lg mb-2">• Close blinds and curtains to keep out direct sunlight.</Text>
                  <Text className="text-lg mb-2">• Use fans and air conditioning to circulate cool air.</Text>
                  <Text className="text-lg mb-2">• Avoid using heat-generating appliances like ovens during peak hours.</Text>
                </View>
              </View>
            </View>

            {/* B. Protecting Yourself Outdoors */}
            <Text className="text-lg font-bold mb-2 pl-4">B. Protecting Yourself Outdoors:</Text>
            <Text className="text-lg mb-2 pl-4 pr-2">
              If you need to be outside, take steps to protect yourself from the heat and sun exposure.
            </Text>
            <View className="pl-8 pt-2 pr-5 mt-5 mb-5 border border-orange-50 rounded-3xl bg-orange-50">
              <View className="pl-2 pr-3">
                <Text className="font-bold text-lg">Tips or Steps</Text>
                <View className="p-2">
                  <Text className="text-lg mb-2">• Wear lightweight, loose-fitting clothing and a wide-brimmed hat.</Text>
                  <Image 
                    source={images.heatProtection} // Add image of sun protection items
                    className="w-full h-40 rounded-lg mt-2 mb-6"
                    resizeMode='contain'
                  />
                  <Text className="text-lg mb-2">• Apply sunscreen with SPF 30 or higher to exposed skin.</Text>
                  <Text className="text-lg mb-2">• Take frequent breaks in shaded or air-conditioned areas.</Text>
                </View>
              </View>
            </View>

            {/* C. Recognizing Heat-Related Illnesses */}
            <Text className="text-lg font-bold mb-2 pl-4">C. Recognizing Heat-Related Illnesses:</Text>
            <Text className="text-lg mb-2 pl-4 pr-2">
              Knowing the symptoms of heat exhaustion and heatstroke can help you take prompt action if someone shows signs of heat-related illness.
            </Text>
            <View className="pl-8 pt-2 pr-5 mt-5 mb-5 border border-orange-50 rounded-3xl bg-orange-50">
              <View className="pl-2 pr-3">
                <Text className="font-bold text-lg">Signs and Symptoms</Text>
                <View className="p-2">
                  <Text className="text-lg mb-2">• Dizziness, excessive sweating, and weakness are signs of heat exhaustion.</Text>
                  <Text className="text-lg mb-2">• Confusion, nausea, and high body temperature may indicate heatstroke, a medical emergency.</Text>
                </View>
              </View>
            </View>

            {/* D. Helping Vulnerable Individuals */}
            <Text className="text-lg font-bold mb-2 pl-4">D. Helping Vulnerable Individuals:</Text>
            <Text className="text-lg mb-2 pl-4 pr-2">
              Elderly people, children, and those with health conditions are especially vulnerable during heatwaves. Ensure they stay safe with these measures.
            </Text>
            <View className="pl-8 pt-2 pr-5 mt-5 mb-5 border border-orange-50 rounded-3xl bg-orange-50">
              <View className="pl-2 pr-3">
                <Text className="font-bold text-lg">Tips or Steps</Text>
                <View className="p-2">
                  <Text className="text-lg mb-2">• Check on elderly neighbors and family members to ensure they have a cool environment.</Text>
                  <Text className="text-lg mb-2">• Ensure children are drinking plenty of water and staying indoors during peak heat hours.</Text>
                  <Text className="text-lg mb-2">• Help those with limited mobility access air-conditioned areas if possible.</Text>
                </View>
              </View>
            </View>
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

export default naturalDisasterPreparedness;
