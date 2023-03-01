import React, {useState, useEffect} from "react";
import {Text, TouchableOpacity} from "react-native";

export default function SearchCategoryEntry(
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
        styles.listItem,
        selected ? styles.listSelected : styles.listUnselected,
        styles["listItem"+position]
        ]
      }
      onPress={handlePress}
    >
      <Text
        style={[
          styles.textLeft,
        ]}
      >{label}
      </Text>
    </TouchableOpacity>
  );
};
