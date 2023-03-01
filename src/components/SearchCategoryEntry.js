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
      <HStack>
        <MaterialCommunityIcons name={selected ? "checkbox-marked-circle": "circle-outline"} size={24} color={selected ? "#137dfb":"grey"} />
        <MaterialCommunityIcons name={icon} size={24} color={styles.text.color}/>
        <Text
          style={[
            styles.textLeft,
          ]}
        >{label}
        </Text>
      </HStack>
    </TouchableOpacity>
  );
};
