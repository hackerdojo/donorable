import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import styles from "./styles";
//import { firebase } from "../../firebase/config";

export default function MessageScreen(props) {
  const onDonePress = () => {
    props.navigation.navigate("Home");
  };
  return (
    <View>
        <Text>This is message screen</Text>
    </View>
  );
}
