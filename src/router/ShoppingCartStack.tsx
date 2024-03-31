import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ShoopingCartScreen from '../screens/Cart';



const Stack = createNativeStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        component={ShoopingCartScreen}
        name="cart"
        options={{title: 'Shopping Cart'}}
      />
    </Stack.Navigator>
  );
};

export default HomeStack;
