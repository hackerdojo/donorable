import React from 'react';
import { View, Image,StyleSheet } from 'react-native';
import { Stack, HStack, VStack } from 'react-native-flex-layout';


export const ImageMask = (
  {
    source,
    size,
    borderColor,
    backgroundColor,
    radius,  // default is size which does a circle.  Smaller radius will do a rounded rectangle.
    borderWidth=3, // width of the border
    backgroundWidth=10,  // width of the background border that surrounds the border.
  }) => {

  let myRadius = radius || size;

  return (
    <View  style={{
      alignContent:"center",
      justifyContent:"center",
      width:size+(borderWidth+backgroundWidth) * 2,
      position:"relative",
      height:size+(borderWidth+backgroundWidth) * 2,
    }}>
      <Image
        source={source}
        style={
          { top: borderWidth+backgroundWidth,
            left: borderWidth+backgroundWidth,
            width:size,
            height:size,
            position:"absolute"
          }
        }
      />

      <View style={{
        position:"absolute",
        elevation:3,
        zIndex:3,
        top: backgroundWidth,
        left: backgroundWidth,
        width:size+borderWidth*2,
        height:size+borderWidth*2,
        borderRadius:myRadius,
        borderWidth:borderWidth,
        borderColor:borderColor
      }}/>
      <View style={{
        position:"absolute",
        elevation:4,
        zIndex:4,
        top: borderWidth,
        left: borderWidth,
        width:size+borderWidth*2+ backgroundWidth,
        height:size+ borderWidth*2 + backgroundWidth,
        borderRadius:myRadius,
        borderWidth:backgroundWidth,
        borderColor: backgroundColor,
      }}/>
    </View>
);
};



export default ImageMask;
