import React, {useState} from "react";
import {StyleSheet, Text, TouchableOpacity,Switch} from "react-native";
import {HStack, Spacer} from 'react-native-stacks';

import styleguide from "../../styles/styleguide";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

export default function ListElementToggle(
  {text, onToggle, value, position=""}
) {
  const styles = StyleSheet.create(styleguide);
  return (
    <HStack
      style={[styles.listItem, styles["listItem"+position],{ alignItems:"center", justifyContent:"space-between"}]}>
      <Text style={styles.textLeft}>{text}</Text>
      <Spacer/>
      <Switch
        onValueChange={onToggle}
        value={value}/>
      <Text>&nbsp;&nbsp;</Text>
    </HStack>
  );
};
