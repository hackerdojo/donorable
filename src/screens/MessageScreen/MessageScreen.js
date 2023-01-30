import React, { useState, useContext } from "react";
import {FlatList, Text, TouchableOpacity, View, StyleSheet} from "react-native";
import {HStack} from 'react-native-flex-layout';
import styleguide from "../../../styles/styleguide";
import theme from "../../../styles/theme.style";
import {Circle} from "../../components/Circle";
//import { firebase } from "../../firebase/config";
import ImageMask from "../../components/ImageMask";
import HR from "../../components/HR";

import messagesdata from "./messasgesdata";


export default function MessageScreen(props) {

  const styles = StyleSheet.create(styleguide);

  const {user, updateUser} = useContext(PrincipalContext);
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
          style={styles.fullWidth}
          data = {messagesdata}
          keyExtractor={message => message.id}
          renderItem ={({item}) => (
            <View key={item.id} style={styles.fullWidth}>
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
              <HR/>

            </View>
          )
          }
        />
    </View>
  );
}

