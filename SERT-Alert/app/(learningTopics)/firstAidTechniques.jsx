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
          First Aid is a set of essential, immediate responses aimed at minimizing injury, preventing further harm, and stabilizing individuals until professional help arrives. In emergency situations, knowing how to apply basic first aid techniques can significantly impact outcomes, potentially saving lives. This section will walk you through fundamental first aid skills such as bleeding control, CPR, burns treatment, choking response, and fracture stabilization, providing both guidance and practical scenarios to illustrate these techniques in action.

          </Text>
          <Text className="text-lg mb-1">This covers the First Aid Techniques until professional help arrives, including:</Text>

          {/* CHANGE THESE INTO THE RESPECTIVE MAIN TOPICS FOR FIRST AID TECHNIQUES */}
          <TouchableOpacity onPress={() => scrollToSection(bleedRef)}>
            <Text className="text-lg font-bold pl-4 mb-3 mt-1">• Bleed Control</Text>
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
            Elevating the injured area above the heart level can reduce blood flow to the wound, helping to slow bleeding and encourage clotting. This method works best when combined with direct pressure.
            </Text>

          <Text className="text-lg font-bold mb-2 pl-4">C. Use of Bandages:</Text>
            <Text className="text-lg mb-2 pl-4 pr-2">
            Once initial bleeding is under control, a sterile bandage can be applied to protect the wound from contamination and further injury. Bandaging keeps the wound clean, promotes healing, and can help maintain pressure if done correctly.
            </Text>
            <View className="pl-8 pt-2 pr-5 mt-2 ml-2 border border-orange-50 rounded-3xl bg-orange-50">
            <Text className="text-lg font-bold"> 
            Step-by-Step:
            </Text> 
              <View className="p-4">
                <Text className= "text-lg">
                1. After bleeding has slowed, carefully wrap a sterile bandage around the wound.
                </Text>
                <Image 
                  source={images.afterBleeding} // Add your image here
                  className="w-full h-40 rounded-lg mt-2 mb-6"
                  resizeMode='contain'
                />
                <Text className= "text-lg">
                2. Wrap snugly but not so tight that it restricts blood flow; you should be able to slip a finger under the bandage.
                </Text>
                <Image 
                  source={images.wrapSnugly} // Add your image here
                  className="w-full h-40 rounded-lg mb-6"
                  resizeMode='contain'
                />
                <Text className= "text-lg mb-2">
                3. Secure the bandage ends to keep it from shifting
                </Text>
                <Image 
                  source={images.secureBandage} // Add your image here
                  className="w-full h-40 rounded-lg mb-6"
                  resizeMode='contain'
                />
                <Text className="text-lg font-bold mt-4"> 
                Tips:
                </Text> 
                <Text className= "text-lg mb-2">
                • Monitor the area for swelling, numbness, or discoloration, which may indicate the bandage is too tight.
                </Text>
                <Text className= "text-lg mb-2">
                • Avoid touching the wound directly, especially with unclean hands, to reduce infection risk.
                </Text>
              </View>
            </View>

          <Text className="text-lg font-bold mb-2 pl-4">D. Tourniquet Application:</Text>
            <Text className="text-lg mb-2 pl-4 pr-2">
            A tourniquet is a device or method used to stop severe bleeding on a limb when other methods (direct pressure, elevation) are ineffective. A tourniquet should be applied as a last resort in life-threatening situations where bleeding cannot be controlled.
            </Text>

            <View className="pl-8 pt-2 pr-5 mt-2 ml-2 border border-orange-50 rounded-3xl bg-orange-50">
            <Text className="text-lg font-bold"> 
            Step-by-Step:
            </Text> 
              <View className="p-4">
                <Text className= "text-lg">
                1. Place the tourniquet above the wound (closer to the body) and at least a few inches above the injury site.
                </Text>
                <Image 
                  source={images.torniquet} // Add your image here
                  className="w-full h-40 rounded-lg mt-2 mb-6"
                  resizeMode='contain'
                />
                <Text className= "text-lg mb-6">
                2. Tighten the tourniquet until the bleeding stops.
                </Text>
                <Text className= "text-lg mb-6">
                3. Note the time of application, as prolonged use can damage tissue.
                </Text>
                <Text className= "text-lg mb-6">
                4. Do not remove the tourniquet once applied; wait for medical professionals to take over.
                </Text>
                <Text className="text-lg font-bold mt-4"> 
                Tips:
                </Text> 
                <Text className= "text-lg mb-2">
                • Use a tourniquet only when bleeding is life-threatening, and you cannot control it with other methods.
                </Text>
                <Text className= "text-lg mb-2">
                • Avoid leaving a tourniquet on for extended periods, as it can cause serious tissue damage.
                </Text>
              </View>
            </View>

          <Text className="text-lg font-bold mb-2 mt-8 pl-4">E. Recognizing Shock Symptoms:</Text>
            <Text className="text-lg mb-2 pl-4 pr-2">
            Shock is a life-threatening condition that can result from severe blood loss, causing a drop in blood pressure and inadequate blood flow to organs. Recognizing shock symptoms and providing immediate assistance is crucial to stabilize the person until emergency help arrives.
            </Text>

            <View className="pl-8 pt-2 pr-5 mt-2 ml-2 border border-orange-50 rounded-3xl bg-orange-50">
            <Text className="text-lg font-bold"> 
            Signs of Shock:
            </Text> 
              <View className="p-4">
                <Text className= "text-lg mb-2">
                • Pale, clammy skin
                </Text>
                <Text className= "text-lg mb-2">
                • Rapid or weak pulse
                </Text>
                <Text className= "text-lg mb-2">
                • Rapid breathing
                </Text>
                <Text className= "text-lg mb-2">
                • Confusion or disorientation
                </Text>
                <Text className= "text-lg mb-2">
                • Weakness or fainting
                </Text>
              </View>
            </View>

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
          <View ref={burnRef} className="mb-4 mt-4">
            <Text className="text-xl font-pbold mb-2">3. Burns Treatment</Text>
            <Image 
              source={images.burnTreatment} // Add your image here
              className="w-full h-56 mb-3 rounded-lg"
              resizeMode='contain'
            />

            <Text className="text-lg mb-4 pl-4 pr-2">
              Burns can vary in severity, and providing immediate and correct first aid is essential for reducing pain, preventing infection, and promoting healing. Here are the steps to treat burns effectively.
            </Text>
            
            {/* A. Cool the Burn */}
            <Text className="text-lg font-bold mb-2 pl-4">A. Cool the Burn:</Text>
            <Text className="text-lg mb-2 pl-4 pr-2">
              Cooling the burn as soon as possible reduces pain and prevents the burn from worsening. Use cool (not ice-cold) water to calm the area and reduce heat.
            </Text>
            <View className="pl-8 pt-2 pr-5 mt-5 mb-5 border border-orange-50 rounded-3xl bg-orange-50">
              <View className="pl-2 pr-3">
                <Text className="font-bold text-lg">Step-by-Step</Text>
                <View className="p-2">
                  <Text className="text-lg mb-2">• Hold the burned area under cool running water for 10-15 minutes.</Text>
                    <Image 
                      source={images.washBurn} // Add your image here
                      className="w-full h-40 rounded-lg mt-2 mb-6"
                      resizeMode='contain'
                    />
                  <Text className="text-lg mb-2">• If running water isn’t available, use a clean, cool, damp cloth on the burn.</Text>
                    <Image 
                      source={images.torniquet} // Add your image here
                      className="w-full h-40 rounded-lg mt-2 mb-6"
                      resizeMode='contain'
                    />
                  <Text className="text-lg mb-2">• Avoid using ice, as this can cause further skin damage.</Text>
                </View>
              </View>
            </View>

            {/* B. Covering the Burn */}
            <Text className="text-lg font-bold mb-2 pl-4">B. Covering the Burn:</Text>
            <Text className="text-lg mb-2 pl-4 pr-2">
              After cooling, covering the burn protects it from infection and further injury. Use a sterile, non-stick bandage or a clean cloth to cover the affected area.
            </Text>
            <View className="pl-8 pt-2 pr-5 mt-5 mb-5 border border-orange-50 rounded-3xl bg-orange-50">
              <View className="pl-2 pr-3">
                <Text className="font-bold text-lg">Step-by-Step</Text>
                <View className="p-2">
                  <Text className="text-lg mb-2">• Gently apply a sterile, non-stick bandage or gauze over the burn.</Text>
                    <Image 
                      source={images.applyGauze} // Add your image here
                      className="w-full h-40 rounded-lg mt-2 mb-6"
                      resizeMode='contain'
                    />
                  <Text className="text-lg mb-2">• Secure the dressing without applying too much pressure to avoid pain or damage.</Text>
                </View>
              </View>
            </View>

            {/* C. Avoiding Ice */}
            <Text className="text-lg font-bold mb-2 mt-2 pl-4">C. Avoiding Ice:</Text>
            <Text className="text-lg mb-2 pl-4 pr-2">
              Never apply ice directly to a burn, as it can restrict blood flow and worsen tissue damage. Instead, rely on cool, running water to lower the burn's temperature safely.
            </Text>

            {/* D. Identifying Burn Severity */}
            <Text className="text-lg font-bold mb-2 mt-2 pl-4">D. Identifying Burn Severity:</Text>
            <Text className="text-lg mb-2 pl-4 pr-2"> 
              Burns are classified into three levels: first-degree (superficial), second-degree (partial-thickness), and third-degree (full-thickness). Recognizing the severity of a burn is essential for appropriate treatment and knowing when to seek medical help.
            </Text>
            <View className="pl-8 pt-2 pr-5 mt-5 mb-5 border border-orange-50 rounded-3xl bg-orange-50">
              <View className="pl-2 pr-3">
                <Text className="font-bold text-lg">Step-by-Step</Text>
                <View className="p-2">
                  <Text className="text-lg mb-2">• First-degree burns affect only the outer layer of skin and cause redness and pain.</Text>
                  <Text className="text-lg mb-2">• Second-degree burns affect deeper skin layers and cause blistering, redness, and swelling.</Text>
                  <Text className="text-lg mb-2">• Third-degree burns penetrate all skin layers and may appear white, charred, or leathery. These require immediate medical attention.</Text>
                </View>
              </View>
            </View>

            {/* E. Pain Relief Techniques */}
            <Text className="text-lg font-bold mt-2 mb-2 pl-4">E. Pain Relief Techniques:</Text>
            <Text className="text-lg mb-2 pl-4 pr-2"> 
              Pain relief is important in burn care to reduce discomfort and aid recovery. Over-the-counter pain relievers can be used, and some home treatments can also help soothe the burn.
            </Text>
            <View className="pl-8 pt-2 pr-5 mt-5 mb-5 border border-orange-50 rounded-3xl bg-orange-50">
              <View className="pl-2 pr-3">
                <Text className="font-bold text-lg">Step-by-Step</Text>
                <View className="p-2">
                  <Text className="text-lg mb-2">• Take an over-the-counter pain reliever, like ibuprofen or acetaminophen, to manage pain.</Text>
                  <Text className="text-lg mb-2">• Apply aloe vera gel or a moisturizing lotion after cooling the burn, as this can provide some relief.</Text>
                </View>
              </View>
            </View>
          </View>


          {/* Choking Response */}
          <View ref={chokingRef} className="mb-4 mt-4">
            <Text className="text-xl font-pbold mb-2">4. Choking Response</Text>
            <Image 
              source={images.choking} // Add your image here
              className="w-full h-56 rounded-lg"
              resizeMode='contain'
            />

            <Text className="text-lg mb-2 pl-4 pr-2">
              Choking occurs when an object blocks the airway, preventing breathing. Knowing how to respond quickly and effectively is crucial in a choking emergency. Here are the primary methods for aiding someone who is choking.
            </Text>

            {/* A. Back Blows */}
            <Text className="text-lg font-bold mb-2 pl-4">A. Back Blows:</Text>
            <Text className="text-lg mb-2 pl-4 pr-2">
              Back blows are the first step in relieving choking by helping dislodge the object blocking the airway. Only perform if the person is conscious.
            </Text>
            <View className="pl-8 pt-2 pr-5 mt-5 mb-5 border border-orange-50 rounded-3xl bg-orange-50">
              <View className="pl-2 pr-3">
                <Text className="font-bold text-lg">Step-by-Step</Text>
                <View className="p-2">
                  <Text className="text-lg mb-2">• Stand to the side and slightly behind the person.</Text>
                  <Text className="text-lg mb-2">• Support their chest with one hand and lean them forward.</Text>
                    <Image 
                      source={images.leanForward} // Add your image here
                      className="w-full h-40 rounded-lg mt-2 mb-6"
                      resizeMode='contain'
                    />
                  <Text className="text-lg mb-2">• Use the heel of your hand to give up to 5 firm back blows between their shoulder blades.</Text>
                </View>
              </View>
            </View>

            {/* B. Abdominal Thrusts (Heimlich Maneuver) */}
            <Text className="text-lg font-bold mb-2 pl-4">B. Abdominal Thrusts (Heimlich Maneuver):</Text>
            <Text className="text-lg mb-2 pl-4 pr-2">
              The Heimlich maneuver uses quick, upward abdominal thrusts to help expel the object. It’s effective if back blows do not relieve the choking.
            </Text>
            <View className="pl-8 pt-2 pr-5 mt-5 mb-5 border border-orange-50 rounded-3xl bg-orange-50">
              <View className="pl-2 pr-3">
                <Text className="font-bold text-lg">Step-by-Step</Text>
                <View className="p-2">
                  <Text className="text-lg mb-2">• Stand behind the person and wrap your arms around their waist.</Text>
                  <Text className="text-lg mb-2">• Make a fist with one hand, placing it just above their navel.</Text>
                    <Image 
                      source={images.makeFist} // Add your image here
                      className="w-full h-40 rounded-lg mt-2 mb-6"
                      resizeMode='contain'
                    />
                  <Text className="text-lg mb-2">• Grasp your fist with your other hand and perform quick, upward thrusts until the object is expelled.</Text>
                </View>
              </View>
            </View>

            {/* C. Choking in Infants */}
            <Text className="text-lg font-bold mb-2 pl-4">C. Choking in Infants:</Text>
            <Text className="text-lg mb-2 pl-4 pr-2">
              For infants under one year old, use a combination of back blows and chest thrusts as their smaller size and delicate structure require gentler techniques.
            </Text>
            <View className="pl-8 pt-2 pr-5 mt-5 mb-5 border border-orange-50 rounded-3xl bg-orange-50">
              <View className="pl-2 pr-3">
                <Text className="font-bold text-lg">Step-by-Step</Text>
                <View className="p-2">
                  <Text className="text-lg mb-2">• Place the infant face down on your forearm, supporting their head and neck.</Text>
                  <Text className="text-lg mb-2">• Deliver 5 gentle but firm back blows between the shoulder blades.</Text>
                  <Text className="text-lg mb-2">• If not relieved, turn the infant face up and use two fingers to perform 5 gentle chest thrusts in the center of the chest.</Text>
                </View>
              </View>
            </View>

            {/* D. Recognizing Silent Choking */}
            <Text className="text-lg font-bold mb-2 pl-4">D. Recognizing Silent Choking:</Text>
            <Text className="text-lg mb-2 pl-4 pr-2">
              Silent choking occurs when a person cannot cough, speak, or make noise due to a complete airway obstruction. Recognizing this is critical, as silent choking can quickly lead to unconsciousness.
            </Text>
            <View className="pl-8 pt-2 pr-5 mt-5 mb-5 border border-orange-50 rounded-3xl bg-orange-50">
              <View className="pl-2 pr-3">
                <Text className="font-bold text-lg">Tips:</Text>
                <View className="p-2">
                  <Text className="text-lg mb-2">• Look for hand signals, panic, or inability to speak.</Text>
                  <Text className="text-lg mb-2">• Act quickly with back blows and abdominal thrusts if the person is unable to respond vocally.</Text>
                </View>
              </View>
            </View>

            {/* E. Aftercare Post-Choking */}
            <Text className="text-lg font-bold mb-2 pl-4">E. Aftercare Post-Choking:</Text>
            <Text className="text-lg mb-2 pl-4 pr-2">
              After a choking incident, the airway may be sore or irritated. Encourage the person to see a healthcare provider, especially if abdominal thrusts were applied, to rule out any internal injuries.
            </Text>
          </View>


          {/* Fracture Stabilization */}
          <View ref={fractureRef} className="mb-4 mt-4">
            <Text className="text-xl font-pbold mb-">5. Fracture Stabilization</Text>
            <Image 
              source={images.fracture} // Add your image here
              className="w-full h-56 mt-4 mb-4 rounded-lg"
              resizeMode='contain'
            />

            <Text className="text-lg mb-6 pl-4 pr-2">
              Proper handling of fractures can prevent further injury and alleviate pain. This section explains the methods for immobilizing broken bones until professional help arrives.
            </Text>

            {/* A. Immobilization Techniques */}
            <Text className="text-lg font-bold mb-2 pl-4">A. Immobilization Techniques:</Text>
            <Text className="text-lg mb-2 pl-4 pr-2">
              Immobilizing the affected area helps prevent bone movement that could lead to additional injury. Use splints or makeshift materials to secure the fracture site.
            </Text>
            <View className="pl-8 pt-2 pr-5 mt-5 mb-5 border border-orange-50 rounded-3xl bg-orange-50">
              <View className="pl-2 pr-3">
                <Text className="font-bold text-lg">Step-by-Step</Text>
                <View className="p-2">
                  <Text className="text-lg mb-2">• Find a rigid object, such as a board or stick, to serve as a splint.</Text>
                  <Text className="text-lg mb-2">• Place the splint along the limb, ensuring it extends past the joints above and below the fracture.</Text>
                  <Image 
                    source={images.pilay} // Add your image here
                    className="w-full h-56 rounded-lg"
                    resizeMode='contain'
                  />
                  <Text className="text-lg mb-2">• Secure the splint with cloth, gauze, or other soft materials, ensuring it's tight but not cutting off circulation.</Text>
                </View>
              </View>
            </View>

            {/* B. Avoiding Movement */}
            <Text className="text-lg font-bold mb-2 pl-4">B. Avoiding Movement:</Text>
            <Text className="text-lg mb-2 pl-4 pr-2">
              Minimize movement of the fractured area as much as possible to prevent further injury or displacement of the bone.
            </Text>

            {/* C. Cold Application */}
            <Text className="text-lg font-bold mb-2 pl-4">C. Cold Application:</Text>
            <Text className="text-lg mb-2 pl-4 pr-2">
              Applying ice or a cold pack helps reduce swelling and relieve pain. Be sure to avoid direct contact between the ice and skin by wrapping the ice pack in a cloth.
            </Text>
            <View className="pl-8 pt-2 pr-5 mt-5 mb-5 border border-orange-50 rounded-3xl bg-orange-50">
              <View className="pl-2 pr-3">
                <Text className="font-bold text-lg">Step-by-Step</Text>
                <View className="p-2">
                  <Text className="text-lg mb-2">• Wrap ice or a cold pack in a thin cloth.</Text>
                  <Text className="text-lg mb-2">• Gently place it over the injured area, keeping it there for 15-20 minutes.</Text>
                  <Text className="text-lg mb-2">• Remove for 20 minutes and reapply as needed.</Text>
                </View>
              </View>
            </View>

            {/* D. Identifying Different Fracture Types */}
            <Text className="text-lg font-bold mb-2 pl-4">D. Identifying Different Fracture Types:</Text>
            <Text className="text-lg mb-2 pl-4 pr-2">
              Fractures can vary in severity and appearance. Open fractures involve a bone breaking through the skin, while closed fractures remain under the skin. Knowing the type of fracture can aid responders in determining proper treatment.
            </Text>

            {/* E. Elevating the Limb */}
            <Text className="text-lg font-bold mb-2 pl-4">E. Elevating the Limb:</Text>
            <Text className="text-lg mb-2 pl-4 pr-2">
              Elevate the fractured limb if possible to help reduce swelling. Ensure it is supported properly and remains as still as possible during elevation.
            </Text>
            <View className="pl-8 pt-2 pr-5 mt-5 mb-5 border border-orange-50 rounded-3xl bg-orange-50">
              <View className="pl-2 pr-3">
                <Text className="font-bold text-lg">Step-by-Step</Text>
                <View className="p-2">
                  <Text className="text-lg mb-2">• Place pillows or other soft supports under the limb to elevate it slightly.</Text>
                  <Text className="text-lg mb-2">• Ensure the limb remains immobilized while elevated.</Text>
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

export default FirstAidTechniques;
