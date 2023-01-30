import React, { useState,useContext } from "react";
import {Image, Text, StyleSheet, View} from "react-native";
import TagButton from "../../components/TagButton";
import KeyboardAvoidingView from "react-native/Libraries/Components/Keyboard/KeyboardAvoidingView";
import FormButton from "../../components/FormButton";
import styleguide from "../../../styles/styleguide";
import firebase from "../../firebase/config";
import {PrincipalContext} from "../../contexts/PrincipalContext";
import {NativeText} from "react-native/Libraries/Text/TextNativeComponent";


export default function LearnMoreScreen({ navigation}) {

  const styles = StyleSheet.create(styleguide);
  /* Go to Welcome Screen, or return to Settings */
  const availableTags = ["Local","Global","Health","STEM","Arts","Faith"]
  const {user, updateUser} = useContext(PrincipalContext);

  const [filterSet, setFilterSet] = useState( new Set(user.searchFilter));

  let searchDisable = false;

  const onDonePress = () => {
  }

  return (
    <View style={[styles.screen,styles.screenFormMod]}>
          <KeyboardAvoidingView
            style={styles.mainAreaForm}
            keyboardShouldPersistTaps="always"
          >
            <View>
              <NativeText>
                Learning Area about this organization.
              </NativeText>
            </View>

            <FormButton
            styles={styles}
            buttonStyle={"Secondary"}
            label={"Done"}
            onPress={onDonePress}
            />
          </KeyboardAvoidingView>
    </View>
  );
}
