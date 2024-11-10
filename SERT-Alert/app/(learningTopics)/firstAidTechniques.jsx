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
    <SafeAreaView className="bg-orange-80 h-full">
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
              className="w-full h-56 rounded-lg mt-4 mb-3"
              resizeMode='contain'
            />

            <Text className="text-lg mb-2 pl-4 pr-2">
            Proper bleeding control can prevent life-threatening blood loss in an emergency. This section covers techniques to safely manage and control bleeding.
            </Text>
            
            <Text className="text-lg font-bold mb-2 mt-6 pl-4">A. Direct Pressure:</Text>
            <Text className="text-lg mb-2 pl-4 pr-2">
            Direct pressure is a crucial first aid technique for controlling bleeding by applying firm, consistent pressure on the wound. This slows blood flow, allowing natural clotting to begin, which helps prevent significant blood loss.
            </Text>
            <View className="pl-8 pt-2 pr-5 mt-2 ml-2 border border-orange-50 rounded-3xl bg-orange-50">
            <Text className="text-lg font-bold"> 
            Step-by-Step:
            </Text> 
              <View className="p-4">
                <Text className= "text-lg">
                1. Place a clean cloth or sterile gauze pad directly on the wound.
                </Text>
                <Image 
                  source={images.cleanCloth} // Add your image here
                  className="w-full h-40 rounded-lg mt-2 mb-6"
                  resizeMode='contain'
                />
                <Text className= "text-lg">
                2. Press down firmly with your hand, maintaining steady pressure.
                </Text>
                <Image 
                  source={images.stopBleeding} // Add your image here
                  className="w-full h-40 rounded-lg mb-6"
                  resizeMode='contain'
                />
                <Text className= "text-lg mb-2">
                3. If blood soaks through, do not remove the cloth; add more layers on top.
                </Text>
                <Image 
                  source={images.addCloth} // Add your image here
                  className="w-full h-40 rounded-lg mb-6"
                  resizeMode='contain'
                />
                <Text className= "text-lg mb-2">
                4. Continue pressing until bleeding stops or is significantly reduced.
                </Text>
                <Image 
                  source={images.presstillStop} // Add your image here
                  className="w-full h-40 rounded-lg mb-6"
                  resizeMode='contain'
                />
              </View>
            </View>
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
            <Text className="text-lg pl-4 pr-2">
            Chest compressions are the core of CPR, acting as an artificial heartbeat. By pressing down hard and fast in the center of the chest, you help pump blood through the heart to vital organs like the brain and lungs, which need oxygen to function.
            </Text>
            <View className="pl-8 pt-2 pr-5 mt-5 border border-orange-50 rounded-3xl bg-orange-50">
            <Text className="text-lg font-bold"> 
            Chess Compression Step-by-Step:
            </Text> 
              <View className="p-4">
                <Text className= "text-lg">
                1. Place the heel of one hand in the center of the chest (on the lower half of the breastbone).
                </Text>
                <Image 
                  source={images.placeTheHeel} // Add your image here
                  className="w-full h-40 rounded-lg mb-6"
                  resizeMode='contain'
                />
                <Text className= "text-lg mb-2">
                2. Place your other hand on top, interlocking fingers.
                </Text>
                <Image 
                  source={images.placeHand} // Add your image here
                  className="w-full h-40 rounded-lg mb-6"
                  resizeMode='contain'
                />
                <Text className= "text-lg mb-2">
                3. Keep your arms straight, shoulders directly above your hands.
                </Text>
                <Image 
                  source={images.straightHand} // Add your image here
                  className="w-full h-40 rounded-lg mb-6"
                  resizeMode='contain'
                />
                <Text className= "text-lg mb-2">
                4. Push down about 2 inches deep, allowing the chest to fully rise between compressions.
                </Text>
                <Image 
                  source={images.pushDown} // Add your image here
                  className="w-full h-40 rounded-lg mb-6"
                  resizeMode='contain'
                />
                <Text className= "text-lg mb-2">
                5. Maintain a pace of 100-120 compressions per minute, similar to the beat of the song "Stayin' Alive."
                </Text>
                <Image 
                  source={images.paceCompression} // Add your image here
                  className="w-full h-40 rounded-lg mb-6"
                  resizeMode='contain'
                />
              </View>
            </View>
            
            <Text className="text-lg font-bold mt-6 mb-2 pl-4">B. Rescue Breaths:</Text>
            <Text className="text-lg mb-2 pl-4 pr-2">
            Rescue breaths provide oxygen directly to the person's lungs, which is crucial if their body cannot breathe independently. Rescue breaths are given in conjunction with chest compressions to maintain circulation and oxygenation.
            </Text>

              <View className="pl-8 pt-2 pr-5 mt-5 border border-orange-50 rounded-3xl bg-orange-50">
                <View className="pl-2 pr-3">
                  <Text className= "font-bold text-lg">
                  Tips:
                  </Text>
                  <View className="p-2">
                    <Text className="text-lg mb-2">
                    • After 30 compressions, tilt the person’s head back slightly to open the airway.
                    </Text>
                    <Text className="text-lg mb-2">
                    • Pinch their nose shut to prevent air from escaping.
                    </Text>
                    <Text className="text-lg mb-2">
                    • Seal your mouth over theirs and give a slow, steady breath, watching for the chest to rise.
                    </Text>
                    <Text className="text-lg mb-2">
                    • Deliver a second breath, then resume compressions.
                    </Text>
                  </View>
                  </View>
                  <View className="bg-white-20">
                    <Text className="text-lg pb-4 pt-5">
                      During a cardiac emergency, a trained responder alternates between 30 compressions and two rescue breaths. The responder tilts the head back, pinches the nose, and delivers two breaths before resuming compressions, keeping the process continuous until medical help arrives.
                    
                    </Text>
                </View>
              </View>

            <Text className="text-lg font-bold mb-2 mt-4 pl-4">C. Hands-Only CPR:</Text>
            <Text className="text-lg mb-2 pl-4 pr-2">
            Hands-only CPR is ideal for those untrained in full CPR. It focuses solely on chest compressions without rescue breaths, which is effective for adults experiencing sudden cardiac arrest.
            </Text>
            <Text className="font-bold mt-4 pl-4 pr-2">
            Example Scenario:</Text> 
            <Text className="text-lg mb-2 pl-7 pr-2">
              A person collapses in a public place, and a bystander calls 911. Following the dispatcher's instructions, they immediately start hands-only CPR, focusing on compressions. They continue rhythmically pressing on the chest without attempting breaths, as this technique can still maintain blood flow to the brain and heart.
            </Text>

            <Text className="text-lg font-bold mb-2 mt-4 pl-4">D. CPR for Children and Infants:</Text>
            <Text className="text-lg mb-2 pl-4 pr-2">
            CPR for children (ages 1-8) and infants requires gentler compressions and breaths because of their smaller body sizes. This modified approach reduces the risk of injury and is tailored to be effective for young individuals in cardiac distress.
            </Text>
            <View className="pl-8 pt-2 pr-5 mt-5 border border-orange-50 rounded-3xl bg-orange-50">
                <View className="pl-2 pr-3">
                  <Text className= "font-bold text-lg">
                  Step-by-Step for Children:
                  </Text>
                  <View className="p-2">
                    <Text className="text-lg mb-2">
                    • Use one hand for chest compressions, pressing about 2 inches deep.
                    </Text>
                    <Text className="text-lg mb-2">
                    • Provide 30 compressions followed by two gentle breaths.
                    </Text>
                  </View>
                  <View>
                    <Text className= "font-bold text-lg">
                    Step-by-Step for Infants:
                    </Text>
                    <View className="p-2">
                    <Text className="text-lg mb-2">
                    • Use two fingers to press on the center of the chest, compressing about 1.5 inches deep.
                    </Text>
                    <Text className="text-lg mb-2">
                    • Cover the infant’s mouth and nose with your mouth to deliver gentle breaths.
                    </Text>
                    </View>
                  </View>
                  
                  </View>
                  <View className="bg-white-20">
                    <Text className="text-lg pb-4 pt-5">
                    A caregiver finds a young child unresponsive. After confirming they are not breathing, the caregiver places one hand on the child’s chest, performing gentle compressions. They tilt the head back slightly and give two small breaths after every 30 compressions. For an infant, they would instead use two fingers and perform the steps carefully, paying attention to the infant’s smaller size.
                    </Text>
                </View>
              </View>


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
