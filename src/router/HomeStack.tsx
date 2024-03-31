import React, { useState } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/Home';
import ProductScreen from '../screens/Product';
import { Text, SafeAreaView, View, TextInput } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import Colors from '../constant/Colors';


const Stack = createNativeStackNavigator();



const HomeStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          title: 'Home',
          headerStyle: {
            backgroundColor: Colors.headerColor
          }
        }} />
      <Stack.Screen
        name="ProductDetails"
        component={ProductScreen}
        options={{
          headerStyle: {
            backgroundColor: Colors.headerColor
          }
        }} />
    </Stack.Navigator>
  );
};

export default HomeStack;
