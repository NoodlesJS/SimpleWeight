import { StatusBar } from 'expo-status-bar';
import React from 'react';
import OnBoarding from './screens/onBoarding';
import Home from "./screens/home";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    // <OnBoarding />
    // <Home />
    <NavigationContainer>
      <Stack.Navigator 
        screenOptions={{
          headerShown: false,
          detachPreviousScreen: true
          }}
      >
        <Stack.Screen name="onBoarding" component={OnBoarding} />
        <Stack.Screen name="home" component={Home} />
      </Stack.Navigator>
   </NavigationContainer>
  );
}

