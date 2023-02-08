import React from 'react';
import { createStackNavigator } from "@react-navigation/stack";
import {HomeScreen, LikedScreen, QuickDonateScreen, LearnMoreScreen} from "../screens";
import {View, Image, StyleSheet} from "react-native";
import DonorableLogo from "../components/DonorableLogo";



export default function HomeTab () {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator >
      <Stack.Screen name="Home" component={HomeScreen} options={{headerBackground: () => <View style={{paddingTop:15, paddingLeft:10}}><DonorableLogo width={120}  /></View>}}/>
      <Stack.Screen name="QuickDonate" component={QuickDonateScreen}  options={({ route} ) => ({ title: route.params.title})} />
      <Stack.Screen name="Liked" component={LikedScreen}   options={({ route} ) => ({ title: route.params.title})} />
      <Stack.Screen name="LearnMore" component={LearnMoreScreen}   options={{title:"About"}} />
    </Stack.Navigator>
  )
}
