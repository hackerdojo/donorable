import React, {useState} from "react";
import {Text, TouchableOpacity, View} from "react-native";

export default function FormButton(
  {
    onPress, label, styles,
    buttonStyle = "primary",
    width = "100%",
    size = "medium",
    disabled = false
  }
) {

  let styleName = buttonStyle.toLowerCase();
  styleName = styleName.charAt(0).toUpperCase() + styleName.slice(1);

  let sizeName = size.toLowerCase();
  sizeName = sizeName.charAt(0).toUpperCase() + sizeName.slice(1);

  return (
    <TouchableOpacity
      style={[
        styles.button,
        styles["button" + styleName],
        {width: width},
        styles["buttonSize" + sizeName]
      ]}
      onPress={onPress}
      disabled={disabled}
    >
      <Text style={[
        styleName === "Ghost" ?
          styles.buttonTitleGhost
          : styles["button"+styleName],
        styles["buttonTitleSize" + sizeName]
      ]
      }>{label}</Text>
    </TouchableOpacity>
  );
};
