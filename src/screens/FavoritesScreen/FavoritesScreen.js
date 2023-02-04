import React, {useState, useContext} from "react";
import {Image, Text, StyleSheet, View} from "react-native";
import TagButton from "../../components/TagButton";
import {KeyboardAwareScrollView} from "react-native-keyboard-aware-scroll-view";
import FormButton from "../../components/FormButton";
import styleguide from "../../../styles/styleguide";
import firebase from "../../firebase/config";
import {PrincipalContext} from "../../contexts/PrincipalContext";
import {NativeText} from "react-native/Libraries/Text/TextNativeComponent";
import theme from "../../../styles/theme.style";
import ImageMask from "../../components/ImageMask";

// mock
import data from '../HomeScreen/data';

export default function FavoritesScreen({navigation, route}) {

  const styles = StyleSheet.create(styleguide);

  const {user, updateUser} = useContext(PrincipalContext);


  return (


    <View style={[styles.screen,styles.screenFormMod]}>
      <KeyboardAwareScrollView
        style={styles.fullWidth}
        keyboardShouldPersistTaps="always"
      >

        <Text numberOfLines={10}>
          Favorites
        </Text>

        { user.favorites.map( (fav) =>
          <View style={styles.horizontalContainer}>
            <ImageMask
              source={{uri:data.filter( thing => thing.id === fav)[0].image}}
              borderColor={theme.PRIMARY_COLOR}
              size={100}
              radius={5}
              borderWidth={3}
              backgroundColor={"transparent"}
            />
            <View>
              <Text style={styles.textCenteredP2}>{data.filter( thing => thing.id === fav)[0].name}</Text>
            </View>
          </View>
        )
        }

      </KeyboardAwareScrollView>
    </View>
  );
}
