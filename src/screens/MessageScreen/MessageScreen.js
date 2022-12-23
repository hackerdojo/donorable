import React, { useState } from "react";
import {Image, FlatList, Text, TouchableOpacity, View, StyleSheet} from "react-native";
import { Stack, HStack, VStack } from 'react-native-flex-layout';
import styleguide from "../../../styles/styleguide";
import theme from "../../../styles/theme.style";
import {Circle} from "../../components/Circle";
//import { firebase } from "../../firebase/config";

import messagesdata from "./messasgesdata";
import ImageMask from "../../components/ImageMask";


export default function MessageScreen(props) {

  const styles = StyleSheet.create(styleguide);
  /* Return to swiping */
  const onBackPress = () => {
    props.navigation.goBack();
  };


  /* Quick Donate option */
  /* to be implemented in "like screen" in future */
  const onCardPress = (to) => {
    navigate("QuickDonate",{param:to} );
  };



  /* View for the Message screen */
  return (
    <View style={[styles.screen, styles.messageScreen]}>
        <FlatList
          data = {messagesdata}
          keyExtractor={message => message.id}
          renderItem ={({item}) => (
            <View key={item.id} style={{width:"90%"}}>
              <TouchableOpacity
                onPress={(message) => onCardPress(item.from)}
              >
                <HStack style={styles.messageCard} spacing={25}>
                  <Circle
                    color={"blue"}
                    radius={7}
                    style={[styles.messageLight, styles.messageGap]}/>
                  <ImageMask
                    source={{uri: item.avatar}}
                    size={50}
                    backgroundColor={"transparent"}
                    borderColor={theme.PRIMARY_COLOR}
                    radius = {5}
                  />
                  <Text style={[styles.messagePreview, styles.messageGap]}>{item.text}</Text>
                </HStack>
              </TouchableOpacity>
              <Image style={styles.divBar} source={require("../../../assets/div-bar.png")}/>
            </View>
          )
          }
        />
    </View>
  );
}

