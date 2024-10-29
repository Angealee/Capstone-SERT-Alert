import { Platform, View, Text } from 'react-native'
import { Tabs, Redirect } from 'expo-router';
import { Image } from 'react-native';
import  { icons } from '../../constants'

//tabs for SERT UI
const TabIcon = ({ icon, color, name, focused }) => {
  return (
    <View className="items-center justify-center gap-2" style={styles.tabIconContainer}>
      <Image
        source={icon}
        resizeMode="contain"
        tintColor={color}
        className="w-6 h-5"
      />

      {/* to style the text, use this snippet: 
      style={{ color:color}} */}
      <Text style={{ color: color }} className={`${focused ? 'font-psemibold' : 'font-pregular'} text-xs`}>
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
            tabBarActiveTintColor: '#ab0505',
            tabBarInactiveTintColor:'#EF2A39',
            tabBarStyle:{
              backgroundColor: '#ECB548',
              borderTopWidth: 0,
              borderTopColor: '232553',
              height: Platform.OS === 'ios' ? 70 : 70, // Increased height for iOS
            },
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
                    />
                  ),
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
                  ),
                }}
            />
            <Tabs.Screen 
                name="Notification"
                options={{
                  title: 'Notification',
                  headerShown: false,
                  tabBarIcon: ({ color, focused }) => (
                    <TabIcon
                      icon={icons.notification}
                      color={color}
                      name="Notification"
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

const styles = {
  tabIconContainer: {
    marginBottom: Platform.OS === 'ios' ? -25 : 0, // Adjust icon position only on iOS
  },
  iconIOS: {
    width: 25, // Adjust icon size for iOS
    height: 25,
  },
  iconDefault: {
    width: 20,
    height: 20,
  },
};

export default TabsLayout