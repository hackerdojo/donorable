import React, { useState } from "react";
import { Image, Text, TextInput, TouchableOpacity, View } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import styles from "./styles";
//import { firebase } from "../../firebase/config";

export default function SettingsScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <KeyboardAwareScrollView
        style={{ flex: 1, width: "100%" }}
        keyboardShouldPersistTaps="always"
      >
        <Image
          //style={styles.logo}
          source={require("../../../assets/donorable-title.png")}
        />
        <Text>
          ACCOUNT SETTINGS -- Phone Number email password Location ---
          Notifications Contact us Delete account Logout
        </Text>

        <TouchableOpacity style={styles.button} onPress={() => onLoginPress()}>
          <Text style={styles.buttonTitle}>Log in</Text>
        </TouchableOpacity>
        <View style={styles.footerView}>
          <Text>Done button (return to Home Screen)</Text>
        </View>
      </KeyboardAwareScrollView>
    </View>
  );
}
