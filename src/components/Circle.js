import React from 'react';
import {View, Text} from 'react-native';

const Circle = ({color, radius, visible = true, style}) => {
  return (
    <View style={
      {
        width: radius * 2,
        height: radius * 2,
        backgroundColor: visible ? color : "transparent",
        borderRadius: radius,
        ...style
      }}/>
  )
}

export default Circle;
