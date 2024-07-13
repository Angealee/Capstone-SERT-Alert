import { View, Text } from 'react-native'
import { Tabs, Redirect } from 'expo-router';
import { Image } from 'react-native';


import  { icons } from '../../constants'

const TabIcon = ({ icon, color, name, focused }) => {
  return (
    <View className="items-center justify-center gap-2">
      <Image
        source={icon}
        resizeMode="contain"
        tintColor={color}
        className="w-6 h-5"
      />

      {/* to style the text, use this snippet: 
      style={{ color:color}} */}
      <Text className={`${focused ? 'font-psemibold':'font-pregular'} text-xs`}>
        {name}
      </Text>
    </View>
  )
}
const TabsLayout = () => {
  return (
    <>
        <Tabs
          screenOptions={{
            tabBarShowLabel: false,
            tabBarActiveTintColor: '#EF2A39',
            tabBarInactiveTintColor:'#FD9BA2',
            tabBarStyle:{
            //backgroundColor: '',
              borderTopWidth: 1,
              borderTopColor: '232553',
              height: 78,
            }
          }}
        >
            <Tabs.Screen 
                name="SERTemergency"
                options={{
                  title: 'Emergency',
                  headerShown: false,
                  tabBarIcon: ({ color, focused }) => (
                    <TabIcon
                      icon={icons.emergency}
                      color={color}
                      name="Emergency"
                      focused={focused}
                      //style={{ width: 100, height: 100 }}
                    />
                    
                  )
                }}
            />
            <Tabs.Screen 
                name="SERTlearningModules"
                options={{
                  title: 'Learning Modules',
                  headerShown: false,
                  tabBarIcon: ({ color, focused }) => (
                    <TabIcon
                      icon={icons.learn}
                      color={color}
                      name="Learn"
                      focused={focused}
                    />
                    
                  )
                }}
            />
            <Tabs.Screen 
                name="SERTmenu"
                options={{
                  title: 'Menu',
                  headerShown: false,
                  tabBarIcon: ({ color, focused }) => (
                    <TabIcon
                      icon={icons.hamburgerMenu}
                      color={color}
                      name="Menu"
                      focused={focused}
                    />
                    
                  )
                }}
            />
        </Tabs>
    </>
  )
}

export default TabsLayout