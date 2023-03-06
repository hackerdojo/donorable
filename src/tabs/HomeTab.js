import React from 'react';
import {Button} from 'react-native';
import {createStackNavigator} from "@react-navigation/stack";
import {HomeScreen, ListsScreen, DetailScreen, QuickDonateScreen, TestScreen, ProfileScreen} from "../screens";
import {DonorableNavLogo,AccountButton} from "../components";
import SettingsTab from "./SettingsTab";
import SearchForScreen from "../screens/SearchForScreen";

export default function HomeTab() {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator >
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerLeft: () => <DonorableNavLogo/>,
          headerRight: () => <AccountButton/>
        }}
      />
      <Stack.Screen
        name="QuickDonate"
        component={QuickDonateScreen}
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
        name="Profile"
        component={ProfileScreen}
        options={{
          headerRight: () => <Button title={"Done"}/>
        }}
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
