import React, {useState, useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {Text, StyleSheet, View, Button} from "react-native";
import {KeyboardAwareScrollView} from "react-native-keyboard-aware-scroll-view";
import {FormButton, ListElement, ListElementInput} from "../components";
import {useNavigation} from "@react-navigation/native";
import styleguide from "../../styles/styleguide";
import ListElementButton from "../components/ListElementButton";

export default function LogoutScreen(props) {
  const styles = StyleSheet.create(styleguide);
  const principal = useSelector(state=> state.principal);
  const navigation = useNavigation();

  const dispatch = useDispatch();



  return (
    <KeyboardAwareScrollView
      style={{width: "100%"}}
    >

      <Text/>
      <ListElement
        position={"Alone"}
      >
        <Text style={styles.textLeft}>Are you sure you want to logout? </Text>
      </ListElement>
      <Text/>
      <ListElementButton
        styles={styles}
        buttonStyle={"secondary"}
        label={"Cancel"}

      />
      <Text/>
      <ListElementButton
        styles={styles}
        buttonStyle={"ghost"}
        label={"Logout"}
      />
      <Text/>
      <ListElement
        styles={styles}
        position={"Alone"}
      >      <Text> TODO: Need to hookup to google auth</Text>
      </ListElement>

    </KeyboardAwareScrollView>
  );
}
