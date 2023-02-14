import React from 'react';
import {createStackNavigator} from "@react-navigation/stack";
import {SettingsScreen, KeywordScreen, TestScreen} from "../screens";
import DonorableNavLogo from "../components/DonorableNavLogo";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

export default function SettingsTab() {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Settings"
        component={SettingsScreen}
        options={{
          headerLeft: () => <DonorableNavLogo/>,
          headerRight: () => <MaterialCommunityIcons style={{paddingRight: 10}} name={"cart"} size={30}/>
        }}
      />
      <Stack.Screen name="Test" component={TestScreen}/>
      <Stack.Screen name="Search For" component={KeywordScreen} options={({route}) => ({title: route.params.title})}/>
    </Stack.Navigator>
  )
}
