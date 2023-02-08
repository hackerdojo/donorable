
import React, { useState } from "react";
import {Image, KeyboardAvoidingView, Text, StyleSheet, View} from "react-native";
import  firebase  from "../../firebase/config";
import FormButton from "../../components/FormButton";
import FormTextInput from "../../components/FormTextInput";
import styleguide from "../../../styles/styleguide";
import errorMessages from "../../firebase/errorMessages";
import ImageLogo from "../../components/ImageLogo";

export default function RecoverScreen( {navigation} ) {
  const styles = StyleSheet.create(styleguide)
  /* Return to Login  */
  const onBackPress = () => {
    navigation.goBack();
  };

  const actionCodeSettings = {
//    url: 'https://www.example.com/?email=user@example.com',
    iOS: {
      bundleId: 'com.example.ios'
    },
    android: {
      packageName: 'com.example.android',
      installApp: true,
      minimumVersion: '12'
    },
    handleCodeInApp: true
  };

  /* Send password recovery email */
  const onEnterPress = async () => {
    console.log(email)
    await firebase
      .sendPasswordResetEmail(firebase.auth, email)
      .then(() => {
        console.log("lwwww")
        alert('An email has been send with further instructions.');
      }).catch((error) => {
        alert(typeof errorMessages[error.code] !== "undefined" ? errorMessages[error.code] : error);
        // if i don't know the error, put up the ugly one.
      });
  }


  /* Variables to capture text input value, and send that value to firebase */
  const [email, setEmail] = useState('');


  /* View for the Recover screen */
  return (
    <View style={[styles.screen, styles.screenFormMod]}>
      <ImageLogo
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
            onPress={() =>onEnterPress(email)}
            label={"Enter"}/>
        </View>


      </KeyboardAvoidingView>
    </View>
  );
}
