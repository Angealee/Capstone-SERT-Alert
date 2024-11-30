import { View, Text, SafeAreaView, ScrollView, TouchableOpacity } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient';
import { Redirect, router } from 'expo-router';
import CustomButton from '../../components/CustomButton';
import AnimatedGradientBackground1 from '../../components/AnimatedGradientBackground1';

//initial commit
const menu = () => {
const handleNavigate = (info) => {
  router.push(`/aboutInfo/${info}`);
  };

  return (
    <SafeAreaView className="flex-1 p-8">
    
      <AnimatedGradientBackground1/>
        <ScrollView>
          <View style={{backgroundColor:'#F1F7ED'}}className="rounded-xl justify-center px-10 pb-10 mt-40">
            <View className="w-full justify-center h-full[85vh] px-4 my-6">
              <Text className="text-2xl text-black text-semibold mt-10 font-psemibold">Menu</Text>

            </View>
          
            <TouchableOpacity 
              onPress={() => handleNavigate('aboutSERT')}>
                <LinearGradient
                  colors={['#233D4D', '#4b543b']}
                  style={{
                    width: '100%',
                    paddingVertical: 15,
                    borderRadius: 15,
                    shadowColor: '#EF2A39',
                    shadowOffset: { width: 0, height: 4 },
                    shadowOpacity: 0.3,
                    shadowRadius: 8,
                    marginTop: 15,
                    alignItems: 'center',
                  }}
                >
                <Text style={{ color: 'white', fontSize: 18, fontWeight: 'bold' }}>
                  About SERT
                </Text>
              </LinearGradient>
            </TouchableOpacity>
                
            <TouchableOpacity 
              onPress={() => handleNavigate('aboutDev')}>
                <LinearGradient
                  colors={['#233D4D', '#4b543b']}
                  style={{
                    width: '100%',
                    paddingVertical: 15,
                    borderRadius: 15,
                    shadowColor: '#EF2A39',
                    shadowOffset: { width: 0, height: 4 },
                    shadowOpacity: 0.3,
                    shadowRadius: 8,
                    marginTop: 15,
                    marginBottom: 20,
                    alignItems: 'center',
                  }}
                >
                <Text style={{ color: 'white', fontSize: 18, fontWeight: 'bold' }}>
                  About Developers
                </Text>
              </LinearGradient>
            </TouchableOpacity>
            
            <TouchableOpacity 
              onPress={() => router.push('/sign-in')}>
                <LinearGradient
                  colors={['#E22D2A', '#D1692D']}
                  style={{
                    width: '100%',
                    paddingVertical: 15,
                    borderRadius: 15,
                    shadowColor: '#EF2A39',
                    shadowOffset: { width: 0, height: 4 },
                    shadowOpacity: 0.3,
                    shadowRadius: 8,
                    marginTop: 25,
                    alignItems: 'center',
                  }}
                >
                <Text style={{ color: 'white', fontSize: 18, fontWeight: 'bold' }}>
                  Sign-in
                </Text>
              </LinearGradient>
            </TouchableOpacity>
          </View>
        </ScrollView>
    </SafeAreaView>
  )
}

export default menu
//initial UI modification