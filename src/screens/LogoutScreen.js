import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {Text, StyleSheet} from "react-native";
import {KeyboardAwareScrollView} from "react-native-keyboard-aware-scroll-view";
import {ListElement,ListElementButton, ListElementPostIt} from "../components";
import {useNavigation} from "@react-navigation/native";
import styleguide from "../../styles/styleguide";


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
        buttonStyle={"secondary"}
        label={"Cancel"}
      />
      <Text/>
      <ListElementButton
        buttonStyle={"tertiary"}
        label={"Logout"}
      />
      <Text/>
      <ListElementPostIt
      ><Text> TODO: Need to hookup to google auth</Text>
      </ListElementPostIt>
    </KeyboardAwareScrollView>
  );
}
