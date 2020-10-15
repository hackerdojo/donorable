import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import styles from "./styles";

export default function RegScreen1({ navigation }) {
  /* Needs event handler */
  const onRegPress = () => {
    navigation.navigate("Reg2");
  };

  /* Needs event handler */
  const onLoginPress = () => {
    navigation.navigate("Reg2");
  };

  /* View for the RegScreen */
  return (
    <View style={styles.container}>
      <KeyboardAwareScrollView
        style={{ flex: 1, width: "100%" }}
        keyboardShouldPersistTaps="always"
      >
        <Image
          source={require("../../../assets/donorable-title.png")}
          style={styles.title}
        />

        <Text style={styles.slogan}>create an account</Text>

        <TouchableOpacity
          style={styles.loginButton}
          onPress={() => onLoginPress()}
        >
          <Text style={styles.buttonTitle}>Donor</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.regButton} onPress={() => onRegPress()}>
          <Text style={styles.buttonTitle}>Nonprofit</Text>
        </TouchableOpacity>
      </KeyboardAwareScrollView>
    </View>
  );
}
