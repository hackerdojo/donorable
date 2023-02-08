import React from 'react';
import { View, Image,StyleSheet } from 'react-native';


export const ImageMask = (
  {
    source,
    size,
    borderColor = "black",
    backgroundColor = "white",
    radius =2,  // default is size which does a circle.  Smaller radius will do a rounded rectangle.
    borderWidth=0, // width of the border
    backgroundWidth=0,  // width of the background border that surrounds the border.
  }) => {

  let myRadius = radius || size;

  return (
    <View  style={{
      alignContent:"center",
      justifyContent:"center",
      width:size+(borderWidth+backgroundWidth) * 2,
      position:"relative",
      shadowColor:"grey",
      shadowOpacity:0.5,
      shadowRadius:2,
      shadowOffset: {width:1,height:1},
      backgroundColor: backgroundColor,
      borderRadius: radius,
      height:size+(borderWidth+backgroundWidth) * 2,
    }}>
      <Image
        source={source}
        resizeMode={"contain"}
        style={
          { top: borderWidth+backgroundWidth+2.5,
            left: borderWidth+backgroundWidth+2.5,
            width:size-5,
            height:size-5,
            position:"absolute",
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
        borderColor:borderColor,
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
