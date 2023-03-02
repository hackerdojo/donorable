import React from 'react';
import {Button} from 'react-native';
import {createStackNavigator} from "@react-navigation/stack";
import {DetailScreen, SearchForScreen} from "../screens";
import DonorableNavLogo from "../components/DonorableNavLogo";
import SettingsTab from "./SettingsTab";
import {AccountButton} from "../components";
import PrincipalListsDataLoader from "../loaders/PrincipalListsDataLoader";

export default function SearchTab() {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Search For"
        component={SearchForScreen}
        options={{
          headerLeft: () => <DonorableNavLogo/>,
          headerRight: () => <Button title={"Done"}/>
        }}
      />
    </Stack.Navigator>
  )
}
