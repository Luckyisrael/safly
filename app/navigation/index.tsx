import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { colors } from 'app/constants/theme';
import { moderateScale } from 'app/lib/ResponsiveSize';
import Register from 'app/screens/Auth/register';
import Community from 'app/screens/Tabs/community';
import Emergency from 'app/screens/Tabs/emergency';
import FirstAid from 'app/screens/Tabs/firstAid';
import Home from 'app/screens/Tabs/home';
import Settings from 'app/screens/Tabs/settings';
import { MessageText1, Warning2, Home3, Hospital, Setting } from 'iconsax-react-native';

import Welcome from '../screens/welcome';

export type RootStackParamList = {
  Welcome: undefined;
  Register: undefined;
};

export type TabParamList = {
  Home: undefined;
  Community: undefined;
  Emergency: undefined;
  FirstAid: undefined;
  Settings: undefined;
};

export type AppStackParamList = {
  RegisterStack: undefined;
  TabNavigation: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();
const Tab = createBottomTabNavigator<TabParamList>();
const AppStack = createStackNavigator<AppStackParamList>();

const RootStack = () => {
  return (
    <Stack.Navigator initialRouteName="Welcome" screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Welcome" component={Welcome} />
      <Stack.Screen name="Register" component={Register} />
    </Stack.Navigator>
  );
};

const TabNavigation = () => (
  <Tab.Navigator
    screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, color, size }) => {
        if (route.name === 'Home') {
          return <Home3 size={32} color={color} variant={focused ? 'Bold' : 'Bulk'} />;
        } else if (route.name === 'Community') {
          return <MessageText1 size="32" color={color} variant={focused ? 'Bold' : 'Bulk'} />;
        } else if (route.name === 'Emergency') {
          return <Warning2 size="32" color={color} variant={focused ? 'Bold' : 'Bulk'} />;
        } else if (route.name === 'FirstAid') {
          return <Hospital size={32} color={color} variant={focused ? 'Bold' : 'Bulk'} />;
        } else if (route.name === 'Settings') {
          return <Setting size={32} color={color} variant={focused ? 'Bold' : 'Bulk'} />;
        }
      },
      headerShown: false,
      tabBarStyle: {
        borderTopWidth: 0,
        height: moderateScale(50),
        backgroundColor: colors.theme.primary
      },
      tabBarActiveTintColor: colors.theme.secondary,
      tabBarInactiveTintColor: colors.theme.secondary100,
    })}>
    <Tab.Screen name="Home" component={Home} />
    <Tab.Screen name="Community" component={Community}/>
    <Tab.Screen name="Emergency" component={Emergency} />
    <Tab.Screen name="FirstAid" component={FirstAid} />
    <Tab.Screen name="Settings" component={Settings} />
  </Tab.Navigator>
);

const MainAppNavigation = () => (
  <AppStack.Navigator>
    <AppStack.Screen name="RegisterStack" component={RootStack} options={{ headerShown: false }} />
    <AppStack.Screen
      name="TabNavigation"
      component={TabNavigation}
      options={{ headerShown: false }}
    />
  </AppStack.Navigator>
);

export { MainAppNavigation };
