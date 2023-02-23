import React, {useState, useEffect} from "react";
import {Text, TouchableOpacity} from "react-native";

export default function TagButton(
  {onPress, label, styles, tagState, size = "medium"}, position
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
        styles.tag,
        selected ? styles.tagSelected : styles.tagUnselected,
        styles["buttonSizeMedium" ],
        styles["tagPosition"+ position]
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
