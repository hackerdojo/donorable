<<<<<<< Updated upstream
import "react-native-gesture-handler";
import React, { useEffect, useState } from "react";
import { firebase } from "./src/firebase/config";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import {
  LoginScreen,
  HomeScreen,
  RegistrationScreen,
  SettingsScreen,
} from "./src/screens";
import { decode, encode } from "base-64";

import { AppLoading } from "expo";
import { useFonts } from "expo-font";
import { Montserrat_400Regular } from "@expo-google-fonts/montserrat";

if (!global.btoa) {
  global.btoa = encode;
}
if (!global.atob) {
  global.atob = decode;
}
=======
import 'react-native-gesture-handler'; // gesture library of react-native
import React, { useEffect, useState } from 'react' // react library
import { firebase } from './src/firebase/config' // firebase configuration
import { NavigationContainer } from '@react-navigation/native' // react libraries for the navigation
import { createStackNavigator } from '@react-navigation/stack'
import { LoginScreen, HomeScreen, RegistrationScreen } from './src/screens' // different screens of the app
import {decode, encode} from 'base-64' // for the decode and encode of the text
if (!global.btoa) {  global.btoa = encode } // encodes to Base64
if (!global.atob) { global.atob = decode } // decodes from Base64
>>>>>>> Stashed changes

const Stack = createStackNavigator(); // react-native navigation

export default function App() {
  /* Import custom Google font */
  let fontsLoaded = useFonts({
    Montserrat_400Regular,
  });
  if (!fontsLoaded) {
    return <AppLoading />;
  }

<<<<<<< Updated upstream
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);
=======
  const [loading, setLoading] = useState(true) // variable handling for user's data
  const [user, setUser] = useState(null)
>>>>>>> Stashed changes

/* firebase persistent login */
/* user just login once and no need to login again */
  useEffect(() => {
    const usersRef = firebase.firestore().collection("users");
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
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
        setLoading(false);
      }
    });
  }, []);

  if (loading) {
    return <></>;
  }
  /* Routes & Navigation of different screens */
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {user ? (
          <>
            <Stack.Screen name="Home">
              {(props) => <HomeScreen {...props} extraData={user} />}
            </Stack.Screen>
            <Stack.Screen name="Settings" component={SettingsScreen} />
          </>
        ) : (
          <>
            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen name="Registration" component={RegistrationScreen} />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
