import React from 'react';
import styleguide from "../../styles/styleguide";
import {Image,StyleSheet} from "react-native";


export default function HR() {
  const styles = StyleSheet.create(styleguide)
  return <Image style={styles.fullWidth} source={require("../../assets/div-bar.png")}/>
}
