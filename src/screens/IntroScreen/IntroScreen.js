import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import styles from "./styles";

export default function IntroScreen({ navigation }) {
  /* Go to RegistrationScreen */
  const onRegPress = () => {
    navigation.navigate("Reg1");
  };

  /* Go to LoginScreen */
  const onLoginPress = () => {
    navigation.navigate("Login");
  };

  /* View for the IntroScreen */
  return (
    <View style={styles.container} >
      <Image
        source={require("../../../assets/DonorableHeartLogo.png")}
        style={styles.title}
        resizeMode={"contain"}
      />


      <Text style={styles.slogan}>Fund your Purpose</Text>

      <TouchableOpacity
        style={styles.loginButton}
        onPress={() => onLoginPress()}
      >
        <Text style={styles.buttonTitle}>Login</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.regButton} onPress={() => onRegPress()}>
        <Text style={styles.buttonTitle}>Register</Text>
      </TouchableOpacity>
      <Text> </Text>
      <Text> </Text>
    </View>
  );
}
