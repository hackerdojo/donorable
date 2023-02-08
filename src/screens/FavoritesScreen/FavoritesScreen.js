import React, {useState, useContext} from "react";
import {TouchableOpacity, FlatList, Text, StyleSheet, View} from "react-native";
import {HStack, Spacer, VStack} from 'react-native-stacks';
import {KeyboardAwareScrollView} from "react-native-keyboard-aware-scroll-view";
import styleguide from "../../../styles/styleguide";
import {HR,ImageMask} from "../../components";
import firebase from "../../firebase/config";
import {PrincipalContext} from "../../contexts/PrincipalContext";
import theme from "../../../styles/theme.style";

// mock
import data from '../HomeScreen/data';
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import messagesdata from "../MessageScreen/messasgesdata";

export default function FavoritesScreen({navigation, route}) {

  const styles = StyleSheet.create(styleguide);
  const {user, updateUser} = useContext(PrincipalContext);

  const onCardPress = (item) => {
// navigate to Liked Screen for this item.  Push, so person can come back to Favorites.

  }

  return (
    <View >
      <FlatList
        data={user.favorites}
        keyExtractor={(array, index) => index}
        renderItem={({item, index, separator}) => (
          <View key={item}>
            <TouchableOpacity
              onPress={(message) => onCardPress(item)}
            >
              <HStack style={styles.messageCard} spacing={7}>
                <ImageMask
                  source={{uri: data.filter(thing => thing.id === item)[0].image}}
                  size={70}
                  radius={10}
                  borderWidth={theme.IMAGE_BORDER_WIDTH}
                  borderColor ={theme.IMAGE_BORDER_COLOR}
                  backgroundColor={theme.IMAGE_BACKGROUND_COLOR}
                />
                <VStack  alignment={"left"}  >
                  <View style={{flex:1}}>
                    <Text style={styles.messageSender}>
                      {data.filter(thing => thing.id === item)[0].name}
                    </Text>
                  </View>
                  <View style={{flex:22}}>
                    <Text style={styles.messagePreview}
                          numberOfLines={3}
                    >{data.filter(thing => thing.id === item)[0].about}</Text>
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
