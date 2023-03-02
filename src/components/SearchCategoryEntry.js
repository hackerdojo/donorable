import React, {useState, useEffect} from "react";
import {Text, TouchableOpacity} from "react-native";
import {HStack} from 'react-native-stacks';
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

export default function SearchCategoryEntry(
  {onPress, label, icon, styles, tagState, size = "medium"}, position
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
        styles.listUnselected,
        styles["listItem"+position]
        ]
      }
      onPress={handlePress}
    >
      <HStack spacing={5}>
        <MaterialCommunityIcons name={selected ? "checkbox-marked-circle": "circle-outline"} size={20} color={selected ? "#137dfb":"grey"} />
        <MaterialCommunityIcons name={icon} size={20} color={styles.text.color}/>
        <Text numberOfLines={2}
          style={[
            styles.textLeft,
            {maxWidth:"80%"}
          ]}
        >{label}</Text>
      </HStack>
    </TouchableOpacity>
  );
};
