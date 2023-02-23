import React, {useContext} from 'react';
import {createStackNavigator} from "@react-navigation/stack";
import {ListsScreen, DetailScreen} from "../screens";
import DonorableNavLogo from "../components/DonorableNavLogo";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import {PrincipalContext} from "../contexts/PrincipalContext";
import {indexedData} from "../mockdata/data";

export default function FavoritesTab() {
  const Stack = createStackNavigator();
  const {user, setUser} = useContext(PrincipalContext);

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Favorites"
        component={ListsScreen}
        options={{
          headerLeft: () => <DonorableNavLogo/>,
          headerRight: () => <MaterialCommunityIcons style={{paddingRight: 10}} name={"cart"} size={30}/>
        }}
        initialParams={{
          data:user.favorites.map( (id, index, data) => (
            indexedData[id]
          )),
          addToListVerb : "favorited"
        }}
      />
      <Stack.Screen
        name="FavoriteDetails"
        component={DetailScreen}
        options={({route}) => ({title: route.params.title})}
      />
    </Stack.Navigator>
  )
}
