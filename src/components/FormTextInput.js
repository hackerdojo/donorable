import React, { useState } from "react";
import { Text, TextInput, View} from "react-native";


export default function FormTextInput (
  { text, onChangeText, label, styles, secureTextEntry, disabled, keyboardType='string'}
) {
  return (
    <View>
      <Text style={styles.inputLabel}>{label}</Text>
      <View style={disabled ? styles.inputContainerDisabled : styles.inputContainer}>
        <TextInput
          style={styles.input}
          label="E-mail"
          onChangeText={onChangeText}
          value={text}
          editable={!disabled}
          keyboardType={keyboardType}
          underlineColorAndroid="transparent"
          autoCapitalize="none"
          secureTextEntry={secureTextEntry}
        />
      </View>
    </View>
  );
};
