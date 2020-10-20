import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import styles from "./styles";

export default function WelcomeScreen({ navigation }) {
  /* Start walkthrough (needs to be implemented) */
  const onWalkPress = () => {
    navigation.navigate("Home");
  };

  /* Go strait to HomeScreen */
  const onStartPress = () => {
    navigation.navigate("Home");
  };

  /* View for the WelcomeScreen */
  return (
    <View style={styles.container}>
      <KeyboardAwareScrollView
        style={{ flex: 1, width: "100%" }}
        keyboardShouldPersistTaps="always"
      >

        <View style={styles.hViewTop}>
            <Text style={styles.header}>Welcome to</Text>
            <Text style={styles.header}>Donorable!</Text>
        </View>

        <View style={styles.hViewBottom}>
            <Text style={styles.header}>Meet people.</Text>
            <Text style={styles.header}>Make a difference.</Text>
        </View>


        <Image
          source={require("../../../assets/coffee.png")}
        />

        <TouchableOpacity
        style={styles.walkButton}
        onPress={() => onWalkPress()}
        >
          <Text style={styles.buttonTitle}>Walkthrough</Text>
        </TouchableOpacity>

        <TouchableOpacity 
        style={styles.startButton} 
        onPress={() => onStartPress()}
        >
          <Text style={styles.buttonTitle}>Start Swiping</Text>
        </TouchableOpacity>
      </KeyboardAwareScrollView>
    </View>
  );
}
