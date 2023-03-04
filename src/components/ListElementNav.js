import React, {useState} from "react";
import {StyleSheet, Text, TouchableOpacity,} from "react-native";
import {HStack, Spacer} from 'react-native-flex-layout';

import styleguide from "../../styles/styleguide";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

export default function ListElementNav(
  {text, onPress, position=""}
) {
  const styles = StyleSheet.create(styleguide);
  return (
    <TouchableOpacity onPress={onPress}>
      <HStack
        style={[styles.listItem, styles["listItem"+position],{ alignItems:"center", justifyContent:"space-between"}]}>
        <Text style={styles.textLeft}>{text}</Text>
        <Spacer/>
        <MaterialCommunityIcons name={"chevron-right"} size={28} color={styles.inActiveTabColor.color}/>
      </HStack>
    </TouchableOpacity>
  );
};
