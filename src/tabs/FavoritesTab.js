import React from 'react';
import {createStackNavigator} from "@react-navigation/stack";
import {FavoritesScreen, LikedScreen} from "../screens";
import DonorableNavLogo from "../components/DonorableNavLogo";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

export default function FavoritesTab() {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Favorites"
        component={FavoritesScreen}
        options={{
          headerLeft: () => <DonorableNavLogo/>,
          headerRight: () => <MaterialCommunityIcons style={{paddingRight: 10}} name={"cart"} size={30}/>
        }}
      />
      <Stack.Screen
        name="FavoriteDetails"
        component={LikedScreen}
        options={({route}) => ({title: route.params.title})}
      />
    </Stack.Navigator>
  )
}
