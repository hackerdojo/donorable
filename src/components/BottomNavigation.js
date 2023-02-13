import React from 'react';
import {View, Text, Pressable, Image} from 'react-native';

export const BottomNavigation = ({buttons, styles}) => {

  return (
    <View>
      {
        buttons.map(({image, text, action}) =>
          <Pressable onPress={action}>
            <Image source={image}/>
            <Text>text</Text>
          </Pressable>
        )
      }
    </View>
  )
}

