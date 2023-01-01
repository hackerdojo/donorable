import React from "react";
import { Image, Text, TouchableOpacity, View, StyleSheet } from "react-native";
import styleguide from "../../../styles/styleguide";
import FormButton from "../../components/FormButton";
import Logo from "../../components/Logo";

export default function RegScreen1({ navigation }) {

  const styles = StyleSheet.create(styleguide);
  /* Needs event handler */
  const onNonProfitPress = () => {
    navigation.navigate("Reg2");
  };

  /* Needs event handler */
  const onDonorPress = () => {
    navigation.navigate("Reg2");
  };

  /* View for the RegScreen */
  return (
    <View style={[styles.screen]} >
      <Logo
        source={require("../../../assets/DonorableHeartLogo.png")}
        styles={styles}
      />

      <Text style={styles.textCentered}>Create an Account</Text>

      <FormButton
        label={"Donor"}
        styles={styles}
        buttonStyle={"primary"}
        onPress={onDonorPress}
      />
      <FormButton
        label={"Non-Profit"}
        styles={styles}
        buttonStyle={"secondary"}
        onPress={onNonProfitPress}
      />
      <Text/>
      <Text/>

    </View>
  );
}
