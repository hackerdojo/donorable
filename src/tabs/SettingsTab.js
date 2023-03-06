import React from 'react';
import {createStackNavigator} from "@react-navigation/stack";
import {SettingsScreen, KeywordScreen, TestScreen} from "../screens";

export default function SettingsTab() {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Settings"
        component={SettingsScreen}
        options={{
          headerShown:false
        }}
      />
    </Stack.Navigator>
  )
}
