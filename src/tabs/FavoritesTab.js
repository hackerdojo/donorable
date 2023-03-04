import React from 'react';
import {createStackNavigator} from "@react-navigation/stack";
import {DetailScreen, ListsScreen, QuickDonateScreen} from "../screens";
import DonorableNavLogo from "../components/DonorableNavLogo";
import SettingsTab from "./SettingsTab";
import {AccountButton} from "../components";
import PrincipalListsDataLoader from "../loaders/PrincipalListsDataLoader";

export default function FavoritesTab() {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Favorites"
        component={PrincipalListsDataLoader}
        options={{
          headerLeft: () => <DonorableNavLogo/>
        }}
        initialParams={
          {
            principalListProperty:"favorites",
            addToListVerb :"favorited"
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
        name="Detail"
        component={DetailScreen}
        options={({route}) => ({title: route.params.title})}
      />
    </Stack.Navigator>
  )
}
