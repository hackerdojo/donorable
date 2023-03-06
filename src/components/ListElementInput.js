import React, {useState} from "react";
import {StyleSheet, Text, TextInput} from "react-native";
import {HStack, Spacer} from 'react-native-flex-layout';

import styleguide from "../../styles/styleguide";
import View from "react-native-web/dist/vendor/react-native/Animated/components/AnimatedView";

export default function ListElementInput(
  {
    label,
    onChange,
    text,
    position="",
    keyboardType ='string',
    secureTextEntry = false,
    disabled=false,
    placeholder = ""
  }
)
{
  const styles = StyleSheet.create(styleguide);
  return (
    <HStack
      style={[styles.listItem, styles["listItem"+position],{ alignItems:"center", justifyContent:"space-between"}]}>
        <Text style={styles.textLeft}>{label}</Text>
        <TextInput
          style={[styles.listElementInput]}
          label=""
          onChangeText={onChange}
          value={text}
          placeholder={placeholder}
          editable={!disabled}
          keyboardType={keyboardType}
          underlineColorAndroid="transparent"
          autoCapitalize="none"
          secureTextEntry={secureTextEntry}
        />
    </HStack>
  );
};
