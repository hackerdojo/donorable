import React, { useState } from "react";
import {Image, KeyboardAvoidingView, Text, StyleSheet, View} from "react-native";
import { firebase } from "../../firebase/config";
import styleguide from "../../../styles/styleguide";
import FormTextInput from "../../components/FormTextInput";
import FormButton from "../../components/FormButton";

export default function LoginScreen({ navigation }) {

  const styles = StyleSheet.create(styleguide);
  const [email, setEmail] = useState(""); // variable for email and password
  const [password, setPassword] = useState("");

  /* Return to previous page */
  const onBackPress = () => {
    navigation.goBack();
  };

  /* Send email to reset user's password */
  const onRecoverPress = () => {
    navigation.navigate("Recover");
  };

  const onTestPress = () => {
    navigation.navigate("Recover")
  }

  /* firebase logic for user to login, if the user has already registered */
  const onLoginPress = () => {
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((response) => {
        const uid = response.user.uid;
        const usersRef = firebase.firestore().collection("users");
        usersRef
          .doc(uid)
          .get()
          .then((firestoreDocument) => {
            if (!firestoreDocument.exists) {
              alert("User not found.");
              return;
            }
            const user = firestoreDocument.data();
          })
          .catch((error) => {
            alert(error);
          });
      })
      .catch((error) => {
        alert(error);
      });
  };

  /* View for the Login screen */
  return (
    <View style={{...styles.screen, ...styles.screenFormMod}}>
      <KeyboardAvoidingView
        style={styles.containerKeyboardAvoidingView}
        keyboardShouldPersistTaps="always"
      >
        <View>
        <Image
          source={require("../../../assets/DonorableHeartLogo.png")}
          style={styles.fullWidth}
          resizeMode="contain"
        />
        </View>
          <FormTextInput
            styles={styles}
            label={"Email"}
            text={email}
            onChangeText={setEmail}/>
          <FormTextInput
            styles={styles}
            label={"Password"}
            text={password}
            onChangeText={setPassword}
            secureTextEntry={true}
          />


        <Text
          style={styles.textCentered}
          onPress={onRecoverPress}>
          {"Forgot Password"}</Text>


        <View style={styles.buttonContainer}>
          <FormButton
            styles={styles}
            buttonStyle={{...styles.buttonTertiary, width:"40%"}}
            onPress={onBackPress}
            label={"Back"} />
          <FormButton
            styles={styles}
            buttonStyle={{...styles.buttonPrimary,width:"40%"}}
            onPress={onLoginPress}
            label={"Login"} />
        </View>
      </KeyboardAvoidingView>
     </View>
  );
}
