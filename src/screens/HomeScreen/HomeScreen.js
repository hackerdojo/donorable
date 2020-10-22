import React, { useEffect, useState } from "react";
import {
  Image,
  FlatList,
  Keyboard,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  StyleSheet,
  Dimensions,
  Animated
} from "react-native";
import styles from "./styles";
import { firebase } from "../../firebase/config";


export default function HomeScreen(props) {
  /* Navigate to settings screen */
  const onSettingsPress = () => {
    props.navigation.navigate("Settings");
  };

  /* Navigate to message screen */
  const onMessagePress = () => {
    props.navigation.navigate("Message");
  };

  /* Profile Card Variables */




  /* View for the Home Screen */
  return (
    <View style={styles.container}>
      {/* Setting Icon Press */}
      <TouchableOpacity style={styles.settingsIcon} onPress={onSettingsPress}>
        <Image
          style={styles.settingsIcon}
          source={require("../../../assets/settings-icon.png")}
        />
      </TouchableOpacity>

      {/* Message Icon on Press */}
      <TouchableOpacity style={styles.messageIcon} onPress={onMessagePress}>
        <Image
          style={styles.messageIcon}
          source={require("../../../assets/message.png")}
        />
      </TouchableOpacity>

      {/* Donorable App Logo */}
      <Image
        style={styles.donorableTitle}
        source={require("../../../assets/donorable-title.png")}
      />
    </View>
  );
}
