import React from "react";
import { Image, Text, TouchableOpacity, View, StyleSheet } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import styles from "./styles";
//import { firebase } from "../../firebase/config";

export default function MessageScreen(props) {

  const onDonePress = () => {
    props.navigation.navigate("Home");
  };

  return (
    <View style={styles.containerMessage}>
      {/* <Image source={image} style={styles.avatar} />
      <View style={styles.content}>
        <Text>{name}</Text>
        <Text style={styles.message}>{lastMessage}</Text>
      </View> */}
      <View style={styles.content}>
        <Text style={styles.message}>This is Message Screen</Text>
      </View>
    </View>
  );
}

const style = StyleSheet.create({
  containerMessage: {
		flex: 1,
		// alignItems: "center",
		// justifyContent: "flex-start",
		// flexDirection: "row",
    // paddingHorizontal: 10,
		// width: DIMENSION_WIDTH - 100
  },
  content: {

  },
  message: {

  }
});
