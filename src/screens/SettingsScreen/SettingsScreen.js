import React, { useState } from "react";
-import { Image, Text, TouchableOpacity, View } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import styles from "./styles";
//import { firebase } from "../../firebase/config";

export default function SettingsScreen(props) {
  const onDonePress = () => {
    props.navigation.navigate("Home");
  };
  return (
    <View style={styles.container}>
      <KeyboardAwareScrollView
        style={{ flex: 1, width: "100%" }}
        keyboardShouldPersistTaps="always"
      >
        <Image source={require("../../../assets/donorable-title.png")} />
        <Text>ACCOUNT SETTINGS</Text>
        <Text>Phone Number</Text>
        <Text>Email</Text>
        <Text>Password</Text>
        <Text>Location</Text>
        <Text>Notifications</Text>
        <Text>Contact Us</Text>
        <Text>Delete Account</Text>
        <Text>Logout</Text>

        <TouchableOpacity style={styles.button} onPress={() => onDonePress()}>
          <Text style={styles.buttonTitle}>Done</Text>
        </TouchableOpacity>
      </KeyboardAwareScrollView>
    </View>
  );
}
