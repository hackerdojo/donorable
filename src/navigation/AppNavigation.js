import React, { useEffect, useState , useCallback} from "react"; // react library
import {useDispatch, useSelector} from 'react-redux'
import {StyleSheet, Text, View} from 'react-native';
import {NavigationContainer} from "@react-navigation/native"; // react libraries for the navigation
import {createBottomTabNavigator} from  "@react-navigation/bottom-tabs";
import {createStackNavigator} from "@react-navigation/stack";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import  * as SplashScreen from "expo-splash-screen";
import firebase from "../firebase/config"; // firebase configuration
import {login, nullUserToStart} from "../features/principal/principalSlice";
import theme from "../../styles/theme.style";
import styleguide from "../../styles/styleguide";

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
import DonorableLogo from "../components/DonorableLogo";
import {DonorableNavLogo} from "../components";
import {Spacer} from "react-native-flex-layout";

SplashScreen.preventAutoHideAsync();


export default function  AppNavigation({onReady}) {
  const [authUser, setAuthUser] = useState(null);
  const dispatch = useDispatch();

  // I learned a thing here with principalStatus and selecting only principal.status
  // instead of principal.  Keep the selection to only the state you need so that
  // changes to the rest of the principal don't cause the app to completely
  // rerender and lose navigation state when submitting a simple form.
  const principalStatus = useSelector(state => state.principal.status);
  const styles = StyleSheet.create(styleguide);

  useEffect( ()  => {
      console.log(authUser);
      let userData = null;
      if (authUser === null ) {
        dispatch(nullUserToStart())
        return;
      }
      const userRef = firebase.doc(firebase.db, "users", authUser.uid);
      const userSnap = firebase.getDoc(userRef).then( (userSnap) => {
        if (userSnap.exists()) {
          userData = userSnap.data();
          dispatch(login(userData));
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
    alert("MainTabs render")
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
        {/*
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

  alert("AppNav render")
  // Routes & Navigation of different screens
  return (
      <NavigationContainer onReady={onReady}>
        <Stack.Navigator>
          { principalStatus === "checking" &&
          <Stack.Screen name={" "}>{() => (
            <View style={styles.screen} >
              <View style={styles.splashContainer} onLayout={onReady}>

                <DonorableLogo height={100} width={200}/>
                <Text numberOfLines={2} style={styles.textCenteredP2} >Find and Fund Your Passion</Text>
                <Spacer/>
              </View>
            </View>
          )}
          </Stack.Screen>
          }
          { principalStatus !== "loggedin" && (
            <>
              <Stack.Screen name="Donorable" component={MainTabs} options={{ headerShown: false }} />
              <Stack.Screen name="Welcome" component={WelcomeScreen} />
            </>
          )}
          { principalStatus == "guest" && (
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
