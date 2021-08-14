import React from 'react';
import Root from "./src/index";
import { useFonts, Sen_400Regular, Sen_700Bold, Sen_800ExtraBold } from '@expo-google-fonts/sen';
import AppLoading from 'expo-app-loading';

export default function App() {
  const [fontsLoaded] = useFonts({
    senR: Sen_400Regular,
    senB: Sen_700Bold,
    senEB: Sen_800ExtraBold
  })
  if(!fontsLoaded) {
    return <AppLoading />
  } else {
    return (
      <Root />
    )
  }
}
