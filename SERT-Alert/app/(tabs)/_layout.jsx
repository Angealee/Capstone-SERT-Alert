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
        className="w-7 h-10"
      />

      {/* to style the text, use this snippet: 
      style={{ color:color}} */}
      <Text className={`${focused ? 'font-psemibold':'font-pregular'} text-sm`}>
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
            backgroundColor: 'white',
              borderTopWidth: 1,
              borderTopColor: '232553',
              height: 78,
            }
          }}
        >
            <Tabs.Screen 
                name="emergency"
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
                }}h
            />
            <Tabs.Screen 
                name="learningModules"
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
                name="menu"
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