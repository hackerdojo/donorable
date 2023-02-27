//import "react-native-gesture-handler"; // gesture library of react-native
import React, { useEffect, useState , useCallback} from "react"; // react library
import { Provider, useDispatch, useSelector } from 'react-redux'
import {StyleSheet, Text, View} from 'react-native';
import { NavigationContainer } from "@react-navigation/native"; // react libraries for the navigation
import {createBottomTabNavigator} from  "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import  * as SplashScreen from "expo-splash-screen";
import firebase from "../firebase/config"; // firebase configuration
import {login, nullUserToStart} from "../features/principal/principalSlice";

import theme from "../../styles/theme.style"

import {
  IntroScreen,
  LoginScreen,
  RegScreen1,
  RegScreen2,
  WelcomeScreen,
  RecoverScreen,
} from "../screens"; // different screens of the app
import {
  HomeTab,
  FavoritesTab,
  SettingsTab,
  MessagesTab
} from "../tabs";

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


export default function  AppNavigation({onReady}) {
  const [loading, setLoading] = useState(true); // variable handling for user's data

  const [authUser, setAuthUser] = useState(null);
  const dispatch = useDispatch();
  const principal = useSelector(state => state.principal);

  // Import custom fonts


  useEffect( ()  => {
      console.log(authUser);
      let userData = null;
      if (authUser === null ) {
        dispatch(nullUserToStart())
        setLoading(false);
        return;
      }
      const userRef = firebase.doc(firebase.db, "users", authUser.uid);
      const userSnap = firebase.getDoc(userRef).then( (userSnap) => {
        if (userSnap.exists()) {
          userData = userSnap.data();
          dispatch(login(userData));
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

  const Tab = createBottomTabNavigator();

  function MainTabs() {
    return (
      <Tab.Navigator
        screenOptions={{
          tabBarActiveTintColor: theme.ACTIVE_TAB_ICON_COLOR,
          tabBarInactiveTintColor: theme.INACTIVE_TAB_ICON_COLOR,
          tabBarStyle: { backgroundColor: 'white' },
        }}
      >
        <Tab.Screen
          name="Home"
          component={HomeTab}
          options = {{
            tabBarIcon: ({color, size}) => (
              <MaterialCommunityIcons name="home" color={color} size={size}/>
            ),
            headerShown: false
          }}
        />

         <Tab.Screen
          name="Settings"
          component={SettingsTab}
          options = {{
            tabBarIcon: ({color, size}) => (
              <MaterialCommunityIcons name="cog" color={color} size={size}/>
            ),
            headerShown: false
          }}
        />
        {/*

        <Tab.Screen
          name="Messages"
          component={MessagesTab}
          options = {{
            tabBarIcon: ({color, size}) => (
              <MaterialCommunityIcons name="message-bulleted" color={color} size={size}/>
            ),
            headerShown: false
          }}
        />

          */}
        <Tab.Screen
          name="Favorites"
          component={FavoritesTab}
          options = {{
            tabBarIcon: ({color, size}) => (
              <MaterialCommunityIcons name="heart" color={color} size={size}/>
            ),
            headerShown: false
          }}
        />
        <Tab.Screen
          name="Cart"
          component={FavoritesTab}
          options = {{
            tabBarIcon: ({color, size}) => (
              <MaterialCommunityIcons name="cart" color={color} size={size}/>
            ),
            headerShown: false
          }}
        />

      </Tab.Navigator>
    );
  }

  // Routes & Navigation of different screens
  return (
      <NavigationContainer onReady={onReady}>
        <Stack.Navigator>
          { principal.status === "checking" &&
          <Stack.Screen name={"Checking"}>{() => (
            <View style={styles.container} onLayout={onReady}><Text style={styles.text} >Hello</Text></View>
          )}
          </Stack.Screen>
          }
          { principal.status !== "loggedin" && (
            <>
              <Stack.Screen name="Donorable" component={MainTabs} options={{ headerShown: false }} />
              <Stack.Screen name="Welcome" component={WelcomeScreen} />
            </>
          )}
          { principal.status == "guest" && (
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
  );
}
