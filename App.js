//import "react-native-gesture-handler"; // gesture library of react-native
import React, { useEffect, useState , useCallback} from "react"; // react library
//import { firebase } from "./src/firebase/config"; // firebase configuration
import { NavigationContainer } from "@react-navigation/native"; // react libraries for the navigation
import { createStackNavigator } from "@react-navigation/stack";

import {
  IntroScreen,
  LoginScreen,
  HomeScreen,
  RegScreen1,
  RegScreen2,
  SettingsScreen,
  WelcomeScreen,
  RecoverScreen,
  MessageScreen,
  KeywordScreen,
  QuickDonateScreen,
  LikedScreen
} from "./src/screens"; // different screens of the app


import { decode, encode } from "base-64"; // for the decode and encode of the text
import {StyleSheet, Text, View} from 'react-native';
import theme from './styles/theme.style.js';

/* Async loading Google Font */
import  * as SplashScreen from "expo-splash-screen";
import { useFonts,  loadAsync } from "expo-font";

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


export default function App() {


  const [loading, setLoading] = useState(true); // variable handling for user's data
  const [user, setUser] = useState(null);


  // Import custom Google font

  const [fontsLoaded] = useFonts({
    'Montserrat_400Regular': require ('./assets/fonts/Montserrat_400Regular.ttf'),
    'Montserrat_900Black': require ('./assets/fonts/Montserrat_900Black.ttf')
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);


  if (!fontsLoaded) {
    return null;
  }


  // Firebase login

/*
  useEffect(() => {
    const usersRef = firebase.firestore().collection("users");
    firebase
      .auth()
      .onAuthStateChanged((user) => {
        if (user) {
          //User is signed in
          usersRef
            .doc(user.uid)
            .get()
            .then((document) => {
              const userData = document.data();
              setLoading(false);
              setUser(userData);
            })
            .catch((error) => {
              setLoading(false);
            });
        } else {
          //User is not signed in
          //Return to Intro on logout
          setLoading(false);
          setUser(null);
        }
      });
  }, []);

*/
  console.log(loading);
  // Initialize React Navigation stack navigator
  // allows app to transition between screens and manage navigation history
  const Stack = createStackNavigator();


  if (false && loading) {
    return ( <View style={styles.container} onLayout={onLayoutRootView}><Text style={styles.text} >Hello</Text></View>);
  }


  // Routes & Navigation of different screens
  return (
    <NavigationContainer onReady={onLayoutRootView}>
      <Stack.Navigator>
        {user ? (
          <>
            <Stack.Screen name="Home" options={{title:"Donorable"}}>
              {(props) => <HomeScreen {...props} extraData={user} />}
            </Stack.Screen>
            <Stack.Screen name="Keyword" component={KeywordScreen}  options={{title:"Search"}}/>
            <Stack.Screen name="Welcome" component={WelcomeScreen} />
            <Stack.Screen name="Settings" component={SettingsScreen} />
            <Stack.Screen name="Message" component={MessageScreen} />
            <Stack.Screen name="QuickDonate" component={QuickDonateScreen}  options={{title:"Quick Donate"}}/>
            <Stack.Screen name="Liked" component={LikedScreen} />
          </>
        ) : (
          <>
            <Stack.Screen name="Intro" component={IntroScreen} options={{title:"Donorable"}}/>
            <Stack.Screen name="Login" component={LoginScreen}  />


            <Stack.Screen name="Recover" component={RecoverScreen}  options={{title:"Recover Password"}}/>

            <Stack.Screen name="Reg1" component={RegScreen1}  options={{title:"Register"}}/>
            <Stack.Screen name="Reg2" component={RegScreen2}  options={{title:"Register (2)"}}/>
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );

}
