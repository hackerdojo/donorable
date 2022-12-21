
import React, { useState } from "react";
import {Image, KeyboardAvoidingView, Text, TextInput, TouchableOpacity, View} from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import styles from "./styles";
import { firebase } from "../../firebase/config";

export default function RecoverScreen( {navigation} ) {

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
    <View style={{...styles.screen,...styles.screenFormMod}}>
      <KeyboardAvoidingView style={styles.containerKeyboardAvoidingView}
        keyboardShouldPersistTaps="always"
      >
        <Image
          source={require("../../../assets/DonorableHeartLogo.png")}
          style={styles.title}
          resizeMode={"contain"}
        />

        <Text style={styles.textCentered}>Enter email to recover password</Text>

        <View>
        <Text style={styles.inputLabel}>Email</Text>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            label="E-mail"
            underlineColorAndroid="transparent"
            autoCapitalize="none"
            onChangeText={setEmail}
          />
        </View>
        </View>

        <View style={styles.buttonContainer}>

          <TouchableOpacity
            style={{...styles.buttonTertiary, width:"40%"}}
            onPress={onBackPress}
          >
            <Text style={styles.buttonTitle}>Back</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={{...styles.buttonPrimary, width:"40%"}}
            onPress={() => onEnterPress(email)}
          >
            <Text style={styles.buttonTitle}>Enter</Text>
          </TouchableOpacity>

        </View>

      </KeyboardAvoidingView>
    </View>
  );
}
