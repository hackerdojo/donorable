import React, {useState} from "react";
import {StyleSheet, Text,} from "react-native";
import {HStack} from 'react-native-flex-layout';

import styleguide from "../../styles/styleguide";

export default function ListElement(
  {children, position =""}
) {
  const styles = StyleSheet.create(styleguide);
  return (
    <HStack
      style={[styles.listItem, styles.listItemText, styles["listItem" + position],{ alignItems:"center", justifyContent:"space-between"}]}
    >{children}
    </HStack>
  );
};
