import React from "react";
import { Image, Text, TouchableOpacity, View, StyleSheet } from "react-native";
import styleguide from "../../../styles/styleguide";

export default function RegScreen1({ navigation }) {

  const styles = StyleSheet.create(styleguide);
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
    <View style={styles.screen} >
      <Image
        source={require("../../../assets/DonorableHeartLogo.png")}
        style={styles.fullWidth}
        resizeMode={"contain"}
      />

      <Text style={styles.textCentered}>Create an Account</Text>

        <TouchableOpacity
          style={styles.buttonPrimary}
          onPress={() => onLoginPress()}
        >
          <Text style={styles.buttonTitle}>Donor</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.buttonSecondary} onPress={() => onRegPress()}>
          <Text style={styles.buttonTitle}>Nonprofit</Text>
        </TouchableOpacity>
      <Text> </Text>
      <Text> </Text>
    </View>
  );
}
