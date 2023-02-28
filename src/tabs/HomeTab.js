import React from 'react';
import {createStackNavigator} from "@react-navigation/stack";
import {HomeScreen, ListsScreen, DetailScreen, QuickDonateScreen, TestScreen} from "../screens";
import {DonorableNavLogo,AccountButton} from "../components";
import SettingsTab from "./SettingsTab";
import SearchForScreen from "../screens/SearchForScreen";

export default function HomeTab() {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerLeft: () => <DonorableNavLogo/>,
          headerRight: () => <AccountButton />
        }}
      />
      <Stack.Screen
        name="QuickDonate"
        component={QuickDonateScreen}
        options={({route}) => ({title: route.params.title})}
      />
      <Stack.Screen
        name="Settings"
        component={SettingsTab}
      />
      <Stack.Screen
        name="Search For"
        component={SearchForScreen}
      />
      <Stack.Screen
        name="Test"
        component={TestScreen}
      />
      <Stack.Screen
        name="Liked"
        component={ListsScreen}
      />
      <Stack.Screen
        name="Disliked"
        component={ListsScreen}
      />
      <Stack.Screen
        name="Detail"
        component={DetailScreen}
      />
    </Stack.Navigator>
  )
}
