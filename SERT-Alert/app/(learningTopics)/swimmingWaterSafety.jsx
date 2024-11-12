import React, { useRef } from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { images } from '../../constants'; // Assuming you have images/constants set up

const swimmingWaterSafety = () => {

  const scrollViewRef = useRef(null);
  const waterSafetyRef = useRef(null);
  const rescueTechRef = useRef(null);
  const drownPrevRef = useRef(null);
  const waterRef = useRef(null);
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
            source={images.waterSafety} // Add your image here
            className="w-full h-56 rounded-lg mb-4"
            resizeMode='cover'
          />
          <Text className="text-2xl font-bold mb-4">Water Safety</Text>
          <Text className="text-lg mb-2">
          Water-related activities can be enjoyable, but they also come with risks. This module teaches swimming and water safety tips, including how to swim safely in pools, lakes, and oceans. You'll learn about the importance of life jackets, how to recognize and respond to drowning, and the basics of rescue techniques.
          </Text>
          <Text className="text-lg mb-2">
          Water safety is crucial for preventing accidents and ensuring everyone’s safety around water environments. This section provides essential guidelines for understanding water conditions, rescue techniques, drowning prevention, and water survival skills.
          </Text>

          <Text className="text-lg mt-4 mb-1">Topics covered for this module:</Text>

          {/* CHANGE THESE INTO THE RESPECTIVE MAIN TOPICS FOR FIRST AID TECHNIQUES */}
          <TouchableOpacity onPress={() => scrollToSection(waterSafetyRef)}>
            <Text className="text-lg font-bold pl-4 mb-3 mt-1">• Understanding Water Conditions</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => scrollToSection(rescueTechRef)}>
            <Text className="text-lg font-bold pl-4 mb-3 mt-1">• Rescue Techniques</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => scrollToSection(drownPrevRef)}>
            <Text className="text-lg font-bold pl-4 mb-3 mt-1">• Drown Prevention</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => scrollToSection(waterRef)}>
            <Text className="text-lg font-bold pl-4 mb-3 mt-1">• Water Survival Skills</Text>
          </TouchableOpacity>

          {/* Understanding Water Conditions */}
          <View ref={waterSafetyRef} className="mb-4 mt-4">
            <Text className="text-xl font-pbold mb-2">1. Understanding Water Conditions</Text>
            <Image 
              source={images.understandingWater} // Add your image here
              className="w-full h-56 mb-3 rounded-lg"
              resizeMode='contain'
            />

            <Text className="text-lg mb-2 pl-4 pr-2">
              Understanding the water conditions before entering is essential to avoid unexpected risks. Recognize currents, water depth, and weather changes that can impact safety.
            </Text>
            <View className="pl-8 pt-2 pr-5 mt-5 mb-5 border border-orange-50 rounded-3xl bg-orange-50">
              <View className="pl-2 pr-3">
                <Text className="font-bold text-lg">Tips:</Text>
                <View className="p-2">
                  <Text className="text-lg mb-2">• Check for any weather advisories or local warnings for the water area you plan to visit.</Text>
                  <Image 
                    source={images.severeWeather} // Add your image here
                    className="w-full h-40 rounded-lg mt-2 mb-6"
                    resizeMode='contain'
                  />
                  <Text className="text-lg mb-2">• Assess the water depth, especially in unfamiliar areas, to ensure it's safe for activities like diving or swimming.</Text>
                  <Text className="text-lg mb-2">• Be aware of any visible currents or rip tides. If caught in a rip current, swim parallel to the shore to escape.</Text>
                </View>
              </View>
            </View>

          {/* Rescue Techniques */}
          <View ref={rescueTechRef} className="mb-4 mt-4">
            <Text className="text-xl font-pbold mb-2">2. Rescue Techniques</Text>
            <Image 
              source={images.rescueTechniques} // Add your image here
              className="w-full h-56 mb-3 rounded-lg"
              resizeMode='contain'
            />
            <Text className="text-lg mb-2 pl-4 pr-2">
              Learning basic rescue techniques can be life-saving in water emergencies. These skills are valuable for helping others without putting oneself at risk.
            </Text>
            <View className="pl-8 pt-2 pr-5 mt-5 mb-5 border border-orange-50 rounded-3xl bg-orange-50">
              <View className="pl-2 pr-3">
                <Text className="font-bold text-lg">Tips or Steps</Text>
                <View className="p-2">
                  <Text className="text-lg mb-2">• Use a reaching object like a pole or stick to pull a person to safety from a distance.</Text>
                  <Image 
                    source={images.rescueStick} // Add your image here
                    className="w-full h-40 rounded-lg mt-2 mb-6"
                    resizeMode='contain'
                  />
                  <Text className="text-lg mb-2">• Throw a floatation device to the person in distress, allowing them to hold on as they are pulled to safety.</Text>
                  <Text className="text-lg mb-2">• Only attempt a direct rescue if you are trained to do so, as the individual in distress may panic and pull you under.</Text>
                </View>
              </View>
            </View>
          </View>

            {/* C. Drowning Prevention */}
          <View ref={drownPrevRef} className="mb-4 mt-4">
            <Text className="text-xl font-pbold mb-2">3. Drowning Prevention</Text>
            <Image 
              source={images.drownPrevention} // Add your image here
              className="w-full h-56 mb-3 rounded-lg"
              resizeMode='contain'
            />
            <Text className="text-lg mb-2 pl-4 pr-2">
              Drowning can happen quickly and silently. Practicing prevention techniques can minimize risks for children and adults alike.
            </Text>
            <View className="pl-8 pt-2 pr-5 mt-5 mb-5 border border-orange-50 rounded-3xl bg-orange-50">
              <View className="pl-2 pr-3">
                <Text className="font-bold text-lg">Tips or Steps</Text>
                <View className="p-2">
                  <Text className="text-lg mb-2">• Always supervise children closely near water, even in shallow pools or bathtubs.</Text>
                  <Image 
                    source={images.childPool} // Add your image here
                    className="w-full h-40 rounded-lg mt-2 mb-6"
                    resizeMode='contain'
                  />
                  <Text className="text-lg mb-2">• Avoid distractions when supervising, and never assume someone else is watching.</Text>
                  <Text className="text-lg mb-2">• Ensure life jackets are worn in open water or by individuals who are not strong swimmers.</Text>
                </View>
              </View>
            </View>
          </View>

          {/* Water Survival Skills */}
          <View ref={waterRef} className="mb-4 mt-4">
            <Text className="text-xl font-pbold mb-2">4. Water Survival Skills</Text>
            <Image 
              source={images.waterSurvival} // Add your image here
              className="w-full h-56 mb-3 rounded-lg"
              resizeMode='contain'
            />
            <Text className="text-lg mb-2 pl-4 pr-2">
              Knowing basic water survival skills can greatly increase chances of survival in dangerous situations. These include floating, treading water, and conserving energy.
            </Text>
            <View className="pl-8 pt-2 pr-5 mt-5 mb-5 border border-orange-50 rounded-3xl bg-orange-50">
              <View className="pl-2 pr-3">
                <Text className="font-bold text-lg">Tips or Steps</Text>
                <View className="p-2">
                  <Text className="text-lg mb-2">• Practice floating on your back to conserve energy and keep airways open.</Text>
                  <Image 
                    source={images.float} // Add your image here
                    className="w-full h-40 rounded-lg mt-2 mb-6"
                    resizeMode='contain'
                  />
                  <Text className="text-lg mb-2">• Learn to tread water by moving your arms and legs in a controlled manner, keeping your head above water.</Text>
                  <Text className="text-lg mb-2">• In cold water, try to limit movement to conserve heat and reduce the risk of hypothermia.</Text>
                </View>
              </View>
            </View>
          </View>
            <View >
              <TouchableOpacity onPress={() => scrollToSection(backToTopRef)}>
                <Text className="text-lg font-bold pl-4 mb-3 mt-4">Tap to go up!</Text>
              </TouchableOpacity>
            </View>
          </View>


        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default swimmingWaterSafety;
