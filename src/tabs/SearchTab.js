import React from 'react';
import {Button} from 'react-native';
import {createStackNavigator} from "@react-navigation/stack";
import {SearchForScreen} from "../screens";
import DonorableNavLogo from "../components/DonorableNavLogo";


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
