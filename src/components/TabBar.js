import React, {useState} from 'react';
import {Button} from 'react-native';
import {HStack} from 'react-native-stacks';

// selections: an object of keys and display names
// { interests : "Interests",
//   needs: "Needs"
// }
// onChange: function called when selection changed.

export default function TabBar(
  {
    selections = [],
    onChange
  }) {
  const [currentSelection, setCurrentSelection] = useState(selections[0])
  const handleChange = (nextSelection) => {
    if (nextSelection != currentSelection) {
      if (onChange) onChange(nextSelection)
    }
  }
  return (
    <HStack
      style={{
        backgroundColor: "white",
        borderRadius: 20,
        justifyContent: "center",
        width: "90%"
      }}>
      {Object.keys(selections).map((key, index) => (
        <Button key={key} title={selections[key]} onPress={() => handleChange(key)}/>
      ))
      }
    </HStack>
  )
}


