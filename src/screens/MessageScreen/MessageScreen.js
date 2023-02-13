import React, {useState, useContext} from "react";
import {FlatList, Text, TouchableOpacity, View, StyleSheet} from "react-native";
import {HStack, Spacer, VStack} from 'react-native-stacks';
import styleguide from "../../../styles/styleguide";
import theme from "../../../styles/theme.style";
import {Circle, ImageMask, HR} from "../../components";

import messagesdata from "./messasgesdata";
import {PrincipalContext} from "../../contexts/PrincipalContext";

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
    navigate("QuickDonate", {param: to});
  };

  /* View for the Message screen */
  return (
    <View style={styles.listScreen}>
      <FlatList
        data={messagesdata}
        keyExtractor={message => message.id}
        renderItem={({item}) => (
          <View key={item.id}>
            <TouchableOpacity
              onPress={(message) => onCardPress(item.from)}
            >
              <HStack style={styles.messageCard} spacing={7}>
                <Circle
                  color={"blue"}
                  radius={6}
                  style={[styles.messageLight]}/>
                <ImageMask
                  source={{uri: item.avatar}}
                  size={50}
                  backgroundColor={theme.IMAGE_BACKGROUND_COLOR}
                  borderColor={theme.IMAGE_BORDER_COLOR}
                  borderWidth={theme.IMAGE_BORDER_WIDTH}
                  radius={10}
                />
                <VStack alignment={"left"}>
                  <View style={{flex: 1}}>
                    <Text style={styles.messageSender}>{item.from}</Text>
                  </View>
                  <View style={{flex: 22}}>
                    <Text style={styles.messagePreview}>{item.text}</Text>
                  </View>
                </VStack>
              </HStack>
            </TouchableOpacity>
            <HR/>
          </View>
        )}
      />
    </View>
  );
}

