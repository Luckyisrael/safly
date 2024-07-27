
import "react-native-gesture-handler";
import * as DevClient from 'expo-dev-client'
import { NavigationContainer } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import React, { useState, useEffect, useCallback } from 'react';
import { Dimensions } from 'react-native';
import { MainAppNavigation } from "app/navigation";


export default function App() {
  const [appReady, setAppReady] = useState(false);

 const [fontsLoaded] = useFonts({
    'CircularStd-Black': require('./assets/fonts/CircularStd-Black.otf'),
    'CircularStd-BlackItalic': require('./assets/fonts/CircularStd-BlackItalic.otf'),
    'CircularStd-Bold': require('./assets/fonts/CircularStd-Bold.otf'),
    'CircularStd-BoldItalic': require('./assets/fonts/CircularStd-BoldItalic.otf'),
    'CircularStd-Book': require('./assets/fonts/CircularStd-Book.otf'),
    CircularStd: require('./assets/fonts/CircularStd.otf'),
    'CircularStd-Light': require('./assets/fonts/CircularStd-Light.otf'),
    'CircularStd-Medium': require('./assets/fonts/CircularStd-Medium.otf'),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  } 
   
    
 

		return (
      <NavigationContainer onReady={() => onLayoutRootView()}>
      <MainAppNavigation />
    </NavigationContainer>
    );
	
}
