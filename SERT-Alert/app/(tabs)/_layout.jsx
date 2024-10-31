import { Platform, View, Text } from 'react-native';
import { Tabs } from 'expo-router';
import { Image } from 'react-native';
import { icons } from '../../constants';

//tabs for User UI
const TabIcon = ({ icon, color, name, focused }) => {
  return (
    <View className="items-center justify-center gap-2" style={styles.tabIconContainer}>
      <Image
        source={icon}
        resizeMode="contain"
        tintColor={color}
        className="w-5 h-5"
        style={Platform.OS === 'ios' ? styles.iconIOS : styles.iconDefault}
      />

      <Text style={{ color: color }} className={`${focused ? 'font-psemibold' : 'font-pregular'} text-xs`}>
        {name}
      </Text>
    </View>
  );
};

const TabsLayout = () => {
  return (
    <>
      <Tabs
        screenOptions={{
          tabBarShowLabel: false,
          tabBarActiveTintColor: '#ab0505',
          tabBarInactiveTintColor: '#EF2A39',
          tabBarStyle: {
            backgroundColor: '#ECB548',
            borderTopWidth: 0,
            borderTopColor: '232553',
            height: Platform.OS === 'ios' ? 70 : 70, // Increased height for iOS
          },
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
              />
            ),
          }}
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
            ),
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
            ),
          }}
        />
      </Tabs>
    </>
  );
};

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

export default TabsLayout;
