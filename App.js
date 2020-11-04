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
  RecoverScreen,
  MessageScreen
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

  /* Firebase login */
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

  if (loading) {
    return <></>;
  }

  /* Initialize React Navigation stack navigator */
  /* allows app to transition between screens and manage navigation history */
  const Stack = createStackNavigator(); 



  /* Routes & Navigation of different screens */
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {user ? (
          <>
            <Stack.Screen name="Home">
              {(props) => <HomeScreen {...props} extraData={user} />}
            </Stack.Screen>
            <Stack.Screen name="Welcome" component={WelcomeScreen} />
            <Stack.Screen name="Settings" component={SettingsScreen} />
            <Stack.Screen name="Message" component={MessageScreen} />
          </>
        ) : (
          <>
            <Stack.Screen name="Intro" component={IntroScreen} />
            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen name="Recover" component={RecoverScreen} />
            <Stack.Screen name="Reg1" component={RegScreen1} />
            <Stack.Screen name="Reg2" component={RegScreen2} />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
