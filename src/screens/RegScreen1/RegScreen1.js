import React from "react";
import { Image, Text, TouchableOpacity, View, StyleSheet } from "react-native";
import styleguide from "../../../styles/styleguide";
import FormButton from "../../components/FormButton";

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
      <Image
        source={require("../../../assets/DonorableHeartLogo.png")}
        style={styles.fullWidth}
        resizeMode={"contain"}
      />

      <Text style={styles.textCentered}>Create an Account</Text>

      <FormButton
        label={"Donor"}
        styles={styles}
        buttonStyle={styles.buttonPrimary}
        onPress={onDonorPress}
      />
      <FormButton
        label={"Non-Profit"}
        styles={styles}
        buttonStyle={styles.buttonSecondary}
        onPress={onNonProfitPress}
      />
      <Text/>
      <Text/>

    </View>
  );
}
