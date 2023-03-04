import React, {useState} from 'react';
import {StyleSheet, Button,Text} from 'react-native';
import {HStack} from 'react-native-flex-layout';
import styleguide from "../../styles/styleguide";

// selections: an object of keys and display names
// { interests : "Interests",
//   needs: "Needs"
// }
// onChange: function called when selection changed.

export default function TabBar(
  {
    selections = {},
    onChange
  }) {
  const styles = StyleSheet.create(styleguide);
  const [currentSelection, setCurrentSelection] = useState(Object.keys(selections)[0])
  const handleChange = (nextSelection) => {
    if (nextSelection != currentSelection) {
      setCurrentSelection(nextSelection)
      if (onChange) onChange(nextSelection)
    }
  }
  return (
    <HStack
      divider={true}
      style={{
        backgroundColor: "#fff",
        borderRadius: 20,
        justifyContent: "center",
        width: "90%"
      }}>
      {Object.keys(selections).map((key, index) => (
        <Button
          key={key}
          title={selections[key]}
          onPress={() => handleChange(key)}
          color={ key === currentSelection ? styles.activeTabColor.color :styles.inActiveTabColor.color}
        />
      ))
      }
    </HStack>
  )
}


