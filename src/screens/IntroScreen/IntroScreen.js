import React from "react";
import { Image, Text, TouchableOpacity, View, StyleSheet} from "react-native";
import styleguide from "../../../styles/styleguide";
import FormButton from "../../components/FormButton";
import Logo from "../../components/Logo";

export default function IntroScreen({ navigation }) {

  const styles = StyleSheet.create(styleguide);

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
    <View style={[styles.screen]} >
     <Logo
       source={require("../../../assets/DonorableHeartLogo.png")}
       styles={styles}
     />

      <Text style={styles.textCentered}>Fund your Purpose</Text>

      <FormButton
        label={"Login"}
        styles={styles}
        buttonStyle={"primary"}
        onPress={onLoginPress}
      />
      <FormButton
        label={"Register"}
        styles={styles}
        buttonStyle={"secondary"}
        onPress={onRegPress}
      />
      <Text/>
      <Text/>
      <Text/>
    </View>
  );
}
