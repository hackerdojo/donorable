import React, { useState } from "react";
import { Text, TouchableOpacity, View} from "react-native";


export default function FormButton (
  { onPress, label, styles, buttonStyle, width = "100%", size="large"}
) {

  let styleName = buttonStyle.toLowerCase();
  styleName = styleName.charAt(0).toUpperCase() + styleName.slice(1);

  let sizeName = size.toLowerCase();
  sizeName = sizeName.charAt(0).toUpperCase() + sizeName.slice(1);

  return (
      <TouchableOpacity
        style={[
          styles["button" + styleName],
          {width:width},
          styles["buttonSize" + sizeName]
        ]}
        onPress={onPress}
      >
        <Text style={[
          styleName === "Ghost" ?
            styles.buttonTitleGhost
            : styles.buttonTitle,
          styles["buttonTitleSize" + sizeName]
          ]
        }>{label}</Text>
      </TouchableOpacity>
  );
};
