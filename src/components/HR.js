import React from 'react';
import styleguide from "../../styles/styleguide";
import {Image,StyleSheet} from "react-native";


export default function HR() {
  const styles = StyleSheet.create(styleguide)
  return <Image style={styles.divBar} source={require("../../assets/div-bar.png")}/>
}
