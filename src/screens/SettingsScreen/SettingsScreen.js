import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
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
        <Text style={styles.text}>ACCOUNT SETTINGS</Text>
        <Text style={styles.text}>Phone Number</Text>
        <Text style={styles.text}>Email</Text>
        <Text style={styles.text}>Password</Text>
        <Text style={styles.text}>Location</Text>
        <Text style={styles.text}>Notifications</Text>
        <Text style={styles.text}>Contact Us</Text>
        <Text style={styles.text}>Delete Account</Text>
        <Text style={styles.text}>Logout</Text>

        <TouchableOpacity style={styles.button} onPress={() => onDonePress()}>
          <Text style={styles.buttonTitle}>Done</Text>
        </TouchableOpacity>
      </KeyboardAwareScrollView>
    </View>
  );
}
