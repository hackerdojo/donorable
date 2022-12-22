import React from "react";
import { Image, Text, TouchableOpacity, View, StyleSheet} from "react-native";
import styleguide from "../../../styles/styleguide";
import FormButton from "../../components/FormButton";

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
      <Image
        source={require("../../../assets/DonorableHeartLogo.png")}
        style={styles.fullWidth}
        resizeMode={"contain"}
      />

      <Text style={styles.textCentered}>Fund your Purpose</Text>

      <FormButton
        label={"Login"}
        styles={styles}
        buttonStyle={styles.buttonPrimary}
        onPress={onLoginPress}
      />
      <FormButton
        label={"Register"}
        styles={styles}
        buttonStyle={styles.buttonSecondary}
        onPress={onRegPress}
      />
      <Text> </Text>
      <Text> </Text>
    </View>
  );
}
