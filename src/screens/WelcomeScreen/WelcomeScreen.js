import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import styles from "./styles";

export default function WelcomeScreen({ navigation }) {
  /* Go to RegistrationScreen */
  const onRegPress = () => {
    navigation.navigate("Reg1");
  };

  /* Go to LoginScreen */
  const onLoginPress = () => {
    navigation.navigate("Login");
  };

  /* View for the WelcomeScreen */
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

        <Text style={styles.slogan}>Welcome to Donorable!</Text>
        <Text style={styles.slogan}>Meet people.</Text>
        <Text style={styles.slogan}>Make a difference.</Text>

        <TouchableOpacity
        style={styles.loginButton}
        onPress={() => onLoginPress()}
        >
          <Text style={styles.buttonTitle}>Walkthrough</Text>
        </TouchableOpacity>

        <TouchableOpacity 
        style={styles.regButton} 
        onPress={() => onRegPress()}
        >
          <Text style={styles.buttonTitle}>Start Swiping</Text>
        </TouchableOpacity>
      </KeyboardAwareScrollView>
    </View>
  );
}
