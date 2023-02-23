
import React, {useContext, useState} from 'react';
import {createStackNavigator} from "@react-navigation/stack";
import {HomeScreen, ListsScreen, DetailScreen, QuickDonateScreen} from "../screens";
import DonorableNavLogo from "../components/DonorableNavLogo";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import {PrincipalContext} from "../contexts/PrincipalContext";
import {indexedData} from "../mockdata/data";

export default function HomeTab() {
  const Stack = createStackNavigator();
  const [searchText, setSearchText] = useState("");
  const {user, updateUser} = useContext(PrincipalContext);


  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerLeft: () => <DonorableNavLogo/>,

          headerRight: () => <MaterialCommunityIcons style={{paddingRight: 10}} name={"cart"} size={30}/>
        }}
      />
      <Stack.Screen
        name="QuickDonate"
        component={QuickDonateScreen}
        options={({route}) => ({title: route.params.title})}
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
