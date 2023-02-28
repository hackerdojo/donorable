import React from 'react';
import {useSelector} from "react-redux";
import {createStackNavigator} from "@react-navigation/stack";
import {ListsScreen, DetailScreen} from "../screens";
import DonorableNavLogo from "../components/DonorableNavLogo";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import SettingsTab from "./SettingsTab";
import {AccountButton} from "../components";

export default function FavoritesTab() {
  const Stack = createStackNavigator();
  const principal = useSelector(state => state.principal);
  const cards = useSelector(state=>state.cardDeck);

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Favorites"
        component={ListsScreen}
        options={{
          headerLeft: () => <DonorableNavLogo/>,
          headerRight: () => <AccountButton/>
        }}
        initialParams={{
          data:principal.favorites.map( (id, index, data) => (
            cards.indexedCards[id]
          )),
          addToListVerb : "favorited"
        }}
      />
      <Stack.Screen
        name="Settings"
        component={SettingsTab}
      />
      <Stack.Screen
        name="FavoriteDetails"
        component={DetailScreen}
        options={({route}) => ({title: route.params.title})}
      />
    </Stack.Navigator>
  )
}
