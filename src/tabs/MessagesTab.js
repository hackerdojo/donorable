import React from 'react';
import {createStackNavigator} from "@react-navigation/stack";
import {MessageScreen} from "../screens";
import DonorableNavLogo from "../components/DonorableNavLogo";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

export default function MessagesTab() {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Messages"
        component={MessageScreen}
        options={{
          headerLeft: () => <DonorableNavLogo/>,
          headerRight: () => <MaterialCommunityIcons style={{paddingRight: 10}} name={"cart"} size={30}/>
        }}/>
      {/*}      <Stack.Screen name="Message Screen" component={ConversationScreen}  options={({ route} ) => ({ title: route.params.title})} />
      */}
    </Stack.Navigator>
  )
}
