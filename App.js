import "react-native-gesture-handler"; // gesture library of react-native
import React, { useEffect, useState } from "react"; // react library
import { firebase } from "./src/firebase/config"; // firebase configuration
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
} from "./src/screens"; // different screens of the app
import { decode, encode } from "base-64"; // for the decode and encode of the text

/* Async loading Google Font */
import { AppLoading } from "expo";
import { useFonts } from "expo-font";
import { Montserrat_400Regular } from "@expo-google-fonts/montserrat";

if (!global.btoa) {
  global.btoa = encode;
} // encodes to Base64
if (!global.atob) {
  global.atob = decode;
} // decodes from Base64

const Stack = createStackNavigator(); // react-native navigation

export default function App() {
  /* Import custom Google font */
  let fontsLoaded = useFonts({
    Montserrat_400Regular,
  });
  if (!fontsLoaded) {
    return <AppLoading />;
  }

  const [loading, setLoading] = useState(true); // variable handling for user's data
  const [user, setUser] = useState(null);

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

  /* TEMPORARY: FIX LOGOUT */
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {user ? (
          <>
            <Stack.Screen name="Welcome" component={WelcomeScreen} />
            <Stack.Screen name="Home">
              {(props) => <HomeScreen {...props} extraData={user} />}
            </Stack.Screen>
            <Stack.Screen name="Settings" component={SettingsScreen} />

            <Stack.Screen name="Intro" component={IntroScreen} />
            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen name="Reg1" component={RegScreen1} />
            <Stack.Screen name="Reg2" component={RegScreen2} />
            
          </>
        ) : (
          <>
            <Stack.Screen name="Intro" component={IntroScreen} />
            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen name="Reg1" component={RegScreen1} />
            <Stack.Screen name="Reg2" component={RegScreen2} />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
