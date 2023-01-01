
import React, { useState } from "react";
import {Image, KeyboardAvoidingView, Text, StyleSheet, View} from "react-native";
import { firebase } from "../../firebase/config";
import FormButton from "../../components/FormButton";
import FormTextInput from "../../components/FormTextInput";
import styleguide from "../../../styles/styleguide";
import Logo from "../../components/Logo";

export default function RecoverScreen( {navigation} ) {
  const styles = StyleSheet.create(styleguide)
  /* Return to Login  */
  const onBackPress = () => {
    navigation.goBack();
  };

  /* Send password recovery email */
  const onEnterPress = (email) => {
    firebase
      .auth()
      .sendPasswordResetEmail(email)
      .then(() => {
        alert('An email has been send with further instructions.')
      })
      .catch((error) => {
        alert(error);
      })
  }

  /* Variables to capture text input value, and send that value to firebase */
  const [email, setEmail] = useState('');


  /* View for the Recover screen */
  return (
    <View style={[styles.screen, styles.screenFormMod]}>
      <Logo
        source={require("../../../assets/DonorableHeartLogo.png")}
        styles={styles}
      />

      <KeyboardAvoidingView style={styles.mainAreaForm}
                            keyboardShouldPersistTaps="always"
      >
        <Text style={styles.textCentered}>Enter email to recover password</Text>

        <FormTextInput
          styles={styles}
          label={"Email"}
          text={email}
          onChangeText={setEmail}/>
        <Text/>
        <View style={styles.buttonContainer}>
          <FormButton
            styles={styles}
            buttonStyle={"tertiary"}
            width={"40%"}
            onPress={onBackPress}
            label={"Back"}/>
          <FormButton
            styles={styles}
            buttonStyle={"primary"}
            width={"40%"}
            onPress={onEnterPress}
            label={"Enter"}/>
        </View>


      </KeyboardAvoidingView>
    </View>
  );
}
