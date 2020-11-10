import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import styles from "./styles";

export default function KeywordScreen({ navigation }) {

  /* Go strait to HomeScreen */
  const onStartPress = () => {
    navigation.navigate("Welcome");
  };

  /* View for the KeywordScreen */
  return (
    <View style={styles.container}>
      <KeyboardAwareScrollView
        style={{ flex: 1, width: "100%" }}
        keyboardShouldPersistTaps="always"
      >



        <View style={styles.hViewBottom}>
            <Text style={styles.header}>Test.</Text>
        </View>


        

        <TouchableOpacity
        style={styles.walkButton}
        onPress={() => onWalkPress()}
        >
          <Text style={styles.buttonTitle}>Walkthrough</Text>
        </TouchableOpacity>



      </KeyboardAwareScrollView>
    </View>
  );
}
