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


export default function FavoritesScreen({navigation, route}) {

  const styles = StyleSheet.create(styleguide);



  return (


    <View style={[styles.screen,styles.screenFormMod]}>
      <KeyboardAwareScrollView
        style={styles.fullWidth}
        keyboardShouldPersistTaps="always"
      >



          <Text numberOfLines={10}>
            Favorites
          </Text>



      </KeyboardAwareScrollView>
    </View>
  );
}
