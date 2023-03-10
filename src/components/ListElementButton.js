import React,  from "react";
import {Text, TouchableOpacity} from "react-native";

export default function ListElementButton(
  {
    onPress, label, styles,
    buttonStyle = "primary",
    width = "100%",
    position = "Alone",
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
        styles.listItem,
        styles["listItem"+ position],
        { alignItems:"center", justifyContent:"center"},
        styles["button" + styleName],
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
