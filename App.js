//import "react-native-gesture-handler"; // gesture library of react-native
import React, { useEffect, useState , useCallback} from "react"; // react library
import { Provider, useDispatch } from 'react-redux'
import {StyleSheet, Text, View} from 'react-native';
import { NavigationContainer } from "@react-navigation/native"; // react libraries for the navigation
import {createBottomTabNavigator} from  "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import  * as SplashScreen from "expo-splash-screen";
import { useFonts,  loadAsync } from "expo-font";
import firebase from "./src/firebase/config"; // firebase configuration
import store from './src/app/store'
import {login} from "./src/features/principal/principalSlice";
import theme from "./styles/theme.style"
import { decode, encode } from "base-64";
import AppNavigation from "./src/navigation/AppNavigation"; // for the decode and encode of the text

if (!global.btoa) {
  global.btoa = encode;
} // encodes to Base64
if (!global.atob) {
  global.atob = decode;
} // decodes from Base64

SplashScreen.preventAutoHideAsync();

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: "Montserrat_900Black",
    fontSize: '40rem'
  },
  text: {
    fontFamily: theme.FONT_FAMILY,
    fontSize: '40rem'
  }
});

export default function  App() {

  // Import custom fonts
  const [fontsLoaded] = useFonts({
    'Montserrat_400Regular': require ('./assets/fonts/Montserrat_400Regular.ttf'),
    'Montserrat_900Black': require ('./assets/fonts/Montserrat_900Black.ttf'),
    'Whitney-Medium':  require('./assets/fonts/Whitney-Medium.ttf')
  });



  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  // Routes & Navigation of different screens
  return (
    <Provider store={store}>
      <AppNavigation onReady={onLayoutRootView}/>
    </Provider>
  );
}
