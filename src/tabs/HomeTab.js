import React from 'react';
import { createStackNavigator } from "@react-navigation/stack";
import {HomeScreen, LikedScreen, QuickDonateScreen, LearnMoreScreen} from "../screens";



export default function HomeTab () {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="QuickDonate" component={QuickDonateScreen}  options={({ route} ) => ({ title: route.params.title})} />
      <Stack.Screen name="Liked" component={LikedScreen}   options={({ route} ) => ({ title: route.params.title})} />
      <Stack.Screen name="LearnMore" component={LearnMoreScreen}   options={{title:"About"}} />
    </Stack.Navigator>
  )
}
