import React from  "react";
import {StyleSheet, TouchableOpacity} from "react-native";
import {useNavigation} from "@react-navigation/native";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import styleguide from "../../styles/styleguide";

export default function AccountButton() {
  const styles = StyleSheet.create(styleguide);
  const navigation = useNavigation();
  return (
    <TouchableOpacity onPress={()=> navigation.navigate("Settings")}>
      <MaterialCommunityIcons
        style={{paddingRight: 10}}
        name={"account"}
        size={30}
        color={ styles.inActiveTabColor.color}
      />
  </TouchableOpacity>
  )
}
