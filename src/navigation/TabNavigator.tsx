import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Start from '../screens/Start';
import Cart from '../screens/Cart';
import WishList from '../screens/WishList';
import Chat from '../screens/Chat';
import Profile from '../screens/Profile';
import {
  Home,
  ShoppingBag,
  Heart,
  MessageCircle,
  User,
} from 'lucide-react-native';
import {StyleSheet, TouchableOpacity, View} from 'react-native';

interface TabButtonProps {
  children: React.ReactNode;
  onPress: () => void;
  accessibilityState: {selected: boolean};
}

const Tab = createBottomTabNavigator();

const TabButton = (props: any) => <CustomTabButton {...props} />;

function CustomTabButton({
  children,
  onPress,
  accessibilityState,
}: TabButtonProps) {
  const isSelected = accessibilityState?.selected;

  return (
    <TouchableOpacity onPress={onPress} style={[styles.tabButton]}>
      <View style={[isSelected && styles.selectedCircle]}>{children}</View>
    </TouchableOpacity>
  );
}

const StartIcon = ({color}: {color: string}) => (
  <Home size={24} color={color} />
);
const CartIcon = ({color}: {color: string}) => (
  <ShoppingBag size={24} color={color} />
);
const WishListIcon = ({color}: {color: string}) => (
  <Heart size={24} color={color} />
);
const ChatIcon = ({color}: {color: string}) => (
  <MessageCircle size={24} color={color} />
);
const ProfileIcon = ({color}: {color: string}) => (
  <User size={24} color={color} />
);

export default function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: styles.tabBar,
        tabBarShowLabel: false,
        tabBarActiveTintColor: '#6c543c',
        tabBarInactiveTintColor: '#9E9E9E',
      }}
      initialRouteName="Start">
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

const styles = StyleSheet.create({
  tabBar: {
    position: 'absolute',
    height: 60,
    marginLeft: 16,
    marginRight: 16,
    bottom: 30,
    borderRadius: 40,
    backgroundColor: '#1c232c',
  },
  tabButton: {
    height: 60,
    paddingRight: 10,
    alignItems: 'center',
    justifyContent: 'center',
    // backgroundColor: 'red',
  },
  selectedCircle: {
    width: 50,
    height: 50,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ffff',
  },
});
