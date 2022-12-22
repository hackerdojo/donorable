import React, { useState } from "react";
import { Text, TouchableOpacity, View} from "react-native";


export default function FormButton (
  { onPress, label, styles, buttonStyle}
) {
  return (
      <TouchableOpacity
        style={buttonStyle}
        onPress={onPress}
      >
        <Text style={styles.buttonTitle}>{label}</Text>
      </TouchableOpacity>
  );
};
