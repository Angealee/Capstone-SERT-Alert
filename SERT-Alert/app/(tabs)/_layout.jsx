import { Tabs } from 'expo-router';
import { View, Text, Image } from 'react-native';
import { icons } from '../../constants';

const TabIcon = ({ icon, color, name, focused }) => {
  return (
    <View className="items-center justify-center gap-2">
      <Image
        source={icon}
        resizeMode="contain"
        tintColor={color}
        className="w-5 h-5"
      />
      <Text className={`${focused ? 'font-psemibold':'font-pregular'} text-xs`}>
        {name}
      </Text>
    </View>
  );
};

export default function TabsLayout() {
  return (
    <>
        <Tabs
          screenOptions={{
            tabBarShowLabel: false,
            tabBarActiveTintColor: '#ab0505',
            tabBarInactiveTintColor:'#EF2A39',
            tabBarStyle:{
            backgroundColor: '#ECB548',
              borderTopWidth: 0,
              borderTopColor: '232553',
              height: 60,
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
