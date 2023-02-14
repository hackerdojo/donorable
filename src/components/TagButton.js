import React, {useState, useEffect} from "react";
import {Text, TouchableOpacity} from "react-native";

export default function TagButton(
  {onPress, label, styles, tagState, size = "medium"}
) {

  const [selected, setSelected] = useState(false);

  useEffect(() => {
    setSelected(tagState)
  }, [tagState]);

  const handlePress = () => {
    setSelected(!selected);
    onPress && onPress(!selected)
  }

  let sizeName = size.toLowerCase();
  sizeName = sizeName.charAt(0).toUpperCase() + sizeName.slice(1);


  return (
    <TouchableOpacity
      style={[
        styles.button,
        selected ? styles.tagSelected : styles.tagUnselected,
        styles["buttonSize" + sizeName]
        ]
      }
      onPress={handlePress}
    >
      <Text
        style={[
          styles.buttonTitle,
          styles["buttonTitleSize" + sizeName]
        ]}
      >{label}
      </Text>

    </TouchableOpacity>
  );
};
