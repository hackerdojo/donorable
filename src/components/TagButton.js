import React, { useState,useEffect } from "react";
import { Text, TouchableOpacity, View} from "react-native";


export default function TagButton (
  { onPress, label, styles, tagState}
) {

  const [selected, setSelected]= useState(false);

  useEffect( () => {
    setSelected(tagState)
  },[tagState]);

  const handlePress = () => {
    setSelected(!selected);
    onPress && onPress(!selected)
  }

  return (
    <TouchableOpacity
      style={selected ? styles.tagSelected : styles.tagUnselected}
      onPress={handlePress}
    >
      <Text style={styles.buttonTitle}>{label}</Text>
    </TouchableOpacity>
  );
};
