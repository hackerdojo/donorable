import React, {useState} from "react";
import {StyleSheet, Text,} from "react-native";
import {HStack} from 'react-native-stacks';

import styleguide from "../../styles/styleguide";

export default function FormNav(
  {text}
) {

  const styles = StyleSheet.create(styleguide);
  return (
    <HStack
      style={styles.listItem}
      onPress={()=>{alert(12)}}
      >
      <Text>{text}</Text>
    </HStack>
  );
};
