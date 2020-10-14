import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import styles from "./styles";

/* Design matches wireframe */
/* To-do: design Login page and route to it via the Login button, 
complete registration page in new branch */

export default function IntroScreen({ navigation }) {
  /* Go to RegistrationScreen */
  const onRegPress = () => {
    navigation.navigate("Registration");
  };

  /* Go to LoginScreen */
  const onLoginPress = () => {
    navigation.navigate("Login");
  };

  /* View for the IntroScreen */
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

        <Text style={styles.slogan}>an easier way</Text>
        <Text style={styles.slogan}>to donate</Text>

        <TouchableOpacity
          style={styles.loginButton}
          onPress={() => onLoginPress()}
        >
          <Text style={styles.buttonTitle}>Login</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.regButton} onPress={() => onRegPress()}>
          <Text style={styles.buttonTitle}>Register</Text>
        </TouchableOpacity>
      </KeyboardAwareScrollView>
    </View>
  );
}
