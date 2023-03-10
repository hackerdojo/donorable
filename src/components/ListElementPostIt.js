import React, {useState} from "react";
import {StyleSheet, View} from "react-native";
import {HStack} from 'react-native-flex-layout';

import styleguide from "../../styles/styleguide";

export default function ListElementPostIt(
  {children, position =""}
) {
  const styles = StyleSheet.create(styleguide);
  return (
    <View
      style={[styles.listItem,styles.listItemPostIt,{ alignItems:"flex-start", justifyContent:"space-between"}]}
    >{children}
    </View>
  );
};
