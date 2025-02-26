import React from 'react';
import {Platform} from 'react-native';
import {
  BottomTabBarButtonProps,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import Start from '../screens/Start';
import Cart from '../screens/Cart';
import WishList from '../screens/WishList';
import Chat from '../screens/Chat';
import Profile from '../screens/Profile';
import CustomTabButton from '../components/CustomTabButton';
import {
  StartIcon,
  CartIcon,
  WishListIcon,
  ChatIcon,
  ProfileIcon,
} from '../components/Icons';

const Tab = createBottomTabNavigator();
const isAndroid = Platform.OS === 'android';

const screenOptions = {
  headerShown: false,
  tabBarStyle: {
    position: 'absolute' as 'absolute',
    height: 75,
    marginLeft: 16,
    marginRight: 16,
    bottom: isAndroid ? 14 : 32,
    borderRadius: 40,
    backgroundColor: '#1c232c',
    paddingHorizontal: isAndroid ? 3 : 0,
  },
  tabBarShowLabel: false,
  tabBarActiveTintColor: '#6c543c',
  tabBarInactiveTintColor: '#9E9E9E',
};

const TabButton = (props: BottomTabBarButtonProps) => (
  <CustomTabButton
    children={props.children}
    onPress={props.onPress}
    accessibilityState={props.accessibilityState}
  />
);

export default function TabNavigator() {
  return (
    <Tab.Navigator screenOptions={screenOptions} initialRouteName="Start">
      <Tab.Screen
        name="Start"
        component={Start}
        options={{
          tabBarIcon: StartIcon,
          tabBarButton: TabButton,
        }}
      />
      <Tab.Screen
        name="Cart"
        component={Cart}
        options={{
          tabBarIcon: CartIcon,
          tabBarButton: TabButton,
        }}
      />
      <Tab.Screen
        name="WishList"
        component={WishList}
        options={{
          tabBarIcon: WishListIcon,
          tabBarButton: TabButton,
        }}
      />
      <Tab.Screen
        name="Chat"
        component={Chat}
        options={{
          tabBarIcon: ChatIcon,
          tabBarButton: TabButton,
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ProfileIcon,
          tabBarButton: TabButton,
        }}
      />
    </Tab.Navigator>
  );
}
