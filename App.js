//import "react-native-gesture-handler"; // gesture library of react-native
import React, { useEffect, useState , useCallback} from "react"; // react library
import firebase from "./src/firebase/config"; // firebase configuration
import { PrincipalContext} from './src/contexts/PrincipalContext';
import { NavigationContainer } from "@react-navigation/native"; // react libraries for the navigation
import { createStackNavigator } from "@react-navigation/stack";
import theme from "./styles/theme.style"
import {StyleSheet, Text, View} from 'react-native';

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


export default function  App() {

  const [loading, setLoading] = useState(true); // variable handling for user's data
  const [user, setUser] = useState("checking");
  const [authUser, setAuthUser] = useState(null);
  const [userUid, setUserUid] = useState(null);

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

  const handleUpdateUser = async (user) => {
    const userRef = firebase.doc(firebase.db, "users", user.id);
    await firebase.updateDoc(userRef, user);
    setUser(user);

  }

  useEffect( ()  => {
    console.log(authUser);
    let userData = null;
    if (authUser === null ) {
      setUser(null);
      setLoading(false);
      return;
    }
    const userRef = firebase.doc(firebase.db, "users", authUser.uid);
    const userSnap = firebase.getDoc(userRef).then( (userSnap) => {
      if (userSnap.exists()) {
        userData = userSnap.data();
        setUser(userData);
        setLoading(false);
      }
    })
    },[authUser]
  );

  // Firebase login handle authentication change returned from google generated from login page.

  firebase
    .onAuthStateChanged(firebase.auth, async (authUser) => {
      setAuthUser(authUser);
    }
  );


  // Initialize React Navigation stack navigator
  // allows app to transition between screens and manage navigation history
  const Stack = createStackNavigator();
  console.log("app")
  console.log("loading" + user)

  if (!fontsLoaded) {
    return null;
  }

  // Routes & Navigation of different screens
  return (
    <PrincipalContext.Provider value={{user:user, updateUser: handleUpdateUser}} >
    <NavigationContainer onReady={onLayoutRootView}>
      <Stack.Navigator>
        { user === "checking" &&
         <Stack.Screen name={"Checking"}>{() => (
           <View style={styles.container} onLayout={onLayoutRootView}><Text style={styles.text} >Hello</Text></View>
           )}
         </Stack.Screen>
        }
        {(user && user !== "checking") && (
          <>
            <Stack.Screen name="Welcome" component={WelcomeScreen} />
            <Stack.Screen name="Home" options={{title:theme.APP_TITLE}} component={HomeScreen} />

            <Stack.Screen name="Keyword" component={KeywordScreen}  options={{title:"Search"}} />
            <Stack.Screen name="QuickDonate" component={QuickDonateScreen}  options={({ route} ) => ({ title: route.params.title})} />

            <Stack.Screen name="Settings" component={SettingsScreen} />
            <Stack.Screen name="Messages" component={MessageScreen} />

            <Stack.Screen name="Liked" component={LikedScreen}  initialParams={{user}}  options={({ route} ) => ({ title: route.params.title})}/>
          </>
        )}
        { !user && (
          <>
            <Stack.Screen name="Intro" component={IntroScreen} options={{title:"Donorable"}}/>
            <Stack.Screen name="Login" component={LoginScreen}  />
            <Stack.Screen name="Recover" component={RecoverScreen}  options={{title:"Recover Password"}}/>
            <Stack.Screen name="Reg1" component={RegScreen1}  options={{title:"Register"}}/>
            <Stack.Screen name="Reg2" component={RegScreen2}  options={{title:"New Account"}}/>
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
    </PrincipalContext.Provider>
  );

}
