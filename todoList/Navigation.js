import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import Home from './screens/Home.js'
import Completed from './screens/Completed.js';

const Stack = createNativeStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="To Do List" component={Home} options={{headerShown: false}} />
      <Stack.Screen name="Completed" component={Completed} />
    </Stack.Navigator>
  );
}

export default function Navigation () {
    return (
        <NavigationContainer>
            <MyStack/>
        </NavigationContainer>
    )
}
