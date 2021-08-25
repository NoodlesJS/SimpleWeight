import { StatusBar } from 'expo-status-bar';
import React from 'react';
import OnBoarding from './screens/onBoarding';
import MainApp from "./screens/main";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    // // <OnBoarding />
    // <Home />
    <NavigationContainer>
      <Stack.Navigator 
        screenOptions={{
          headerShown: false,
          detachPreviousScreen: true
          }}
      >
        <Stack.Screen name="onBoarding" component={OnBoarding} />
        <Stack.Screen name="home" component={MainApp} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

