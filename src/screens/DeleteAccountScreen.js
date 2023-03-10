import React, {useState, useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {Text, StyleSheet, Alert} from "react-native";
import {KeyboardAwareScrollView} from "react-native-keyboard-aware-scroll-view";
import {ListElement, ListElementInput, ListElementButton, ListElementText, ListElementPostIt} from "../components";
import {useNavigation} from "@react-navigation/native";
import {updateProfile} from "../features/principal/principalSlice";

import styleguide from "../../styles/styleguide";


export default function DeleteAccountScreen(props) {
  const styles = StyleSheet.create(styleguide);
  const principal = useSelector(state=> state.principal);
  const navigation = useNavigation();

  const [confirmEmail, setConfirmEmail] = useState("");

  const email = principal.email;

  const confirmDeleteAccount = () => {
    if (confirmEmail === email) {
      Alert.alert(
        "SVB",
        "One last chance, are you sure you want to delete your account?",
        [
          {
            text: 'Yes, delete my account',
            onPress: () => console.log('Deleting account'),
          },
          {
            text: 'No, keep my account',
            onPress: () => console.log('Running back to mommy'),
            style: 'cancel',
          }
        ]
      )
    } else {
      alert("Please enter your email to delete your account.")
    }
  }
  const dispatch = useDispatch();

  useEffect( () => {
    navigation.setOptions({
      headerRight: () => {}
    })
  })

  return (
    <KeyboardAwareScrollView
      style={{width: "100%"}}
    >

      <Text/>
      <ListElement
        position={"First"}
      >
        <Text style={styles.textLeft}>Enter your email to delete all information related to this account. </Text>
      </ListElement>
      <ListElementInput
        label={"Email"}
        text={email}
        disabled={true}
      />

      <ListElementInput
        label={"Confirm Email"}
        text={confirmEmail}
        onChange={setConfirmEmail}
        placeholder={"enter your email address"}
        position={"Last"}
      />
      <Text/>
      <ListElementText
        position={"First"}
      >
        <Text style={styles.textLeft}>Clicking this button will delete all information related to this account. You will no longer be able to login or restore any data for your account.</Text>
      </ListElementText>
      <ListElement>
        <Text/>
      </ListElement>
      <ListElementButton
        label={"Delete Account"}
        onPress={confirmDeleteAccount}
        position={"Last"}
        buttonStyle={"danger"}
      />
      <Text/>
      <ListElementPostIt
        position={"First"}
      >
        <Text> TODO: Need to hookup to google auth</Text>
      </ListElementPostIt>
    </KeyboardAwareScrollView>
  );
}
