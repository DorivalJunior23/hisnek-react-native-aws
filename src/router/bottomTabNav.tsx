import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Entypo from 'react-native-vector-icons/Entypo';
import HomeStack from './HomeStack';
import ShoppingCartStack from './ShoppingCartStack';
import { MaterialIcons } from '@expo/vector-icons';
import HomeScreen from '../screens/Home';
import ProfileScreen from '../screens/Profile';
import CartScreen from '../screens/Cart';
import Colors from '../constant/Colors';
import { Authenticator } from '@aws-amplify/ui-react-native';
import ProfileAuth from '../components/ProfileAuth';



const Tab = createBottomTabNavigator();

const BottomTabNav = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarActiveTintColor: Colors.tintColor,
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeStack}
        options={{
          tabBarIcon: ({ color }) => <MaterialIcons name="home" color={color} size={25} />,
          headerShown: false
        }}
      />
      <Tab.Screen
        name='Cart'
        component={CartScreen}
        options={{
          tabBarIcon: ({ color }) => <MaterialIcons name="shopping-cart" color={color} size={25} />,
          headerStyle: {
            backgroundColor: Colors.headerColor
          }
        }}
      />
      
          <Tab.Screen
            name="Profile"
            component={ProfileAuth}
            options={{
              tabBarIcon: ({ color }) => <MaterialIcons name="person" color={color} size={25} />,
              headerStyle: {
                backgroundColor: Colors.headerColor
              }
            }}
          />
       
    </Tab.Navigator>
  );
};

export default BottomTabNav;
