import React, { useState } from "react";
import { Image, Text, StyleSheet, View } from "react-native";
import styleguide from "../../../styles/styleguide";
import { firebase } from "../../firebase/config";
import KeyboardAvoidingView from "react-native/Libraries/Components/Keyboard/KeyboardAvoidingView";
import FormTextInput from "../../components/FormTextInput";
import FormButton from "../../components/FormButton";
import Logo from "../../components/Logo";
import {KeyboardAwareScrollView} from "react-native-keyboard-aware-scroll-view";

export default function RegScreen2({ navigation }) {

  const styles = StyleSheet.create(styleguide);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const onBackPress = () => {
    // Link to intro page if user already registered
    navigation.navigate("Intro");
  };

  /* firebase logic for creating new account with email & password */
  const onRegisterPress = () => {
    if (password !== confirmPassword) {
      alert("Passwords don't match.");
      return;
    }
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((response) => {
        const uid = response.user.uid;
        const data = {
          id: uid,
          email,
        };
        const usersRef = firebase.firestore().collection("users");
        usersRef
          .doc(uid)
          .set(data)
          .then(() => {
            navigation.navigate("Keyword", { user: data });
          })
          .catch((error) => {
            alert(error);
          });
      })
      .catch((error) => {
        alert(error);
      });
  };

  /* View for the registration screen */
  return (
    <View style={styles.screen}>
      <Logo
        source={require("../../../assets/DonorableHeartLogo.png")}
        styles={styles}
      />
      <KeyboardAwareScrollView
        style={{width:"100%"}}
        keyboardShouldPersistTaps="always"
      >

        <Text style={styles.textCentered}>Create an account</Text>
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
        <FormTextInput
          styles={styles}
          label={"Confirm Password"}
          text={confirmPassword}
          onChangeText={setConfirmPassword}
          secureTextEntry={true}
        />
        <Text/>
        <View style={styles.buttonContainer}>
          <FormButton
            styles={styles}
            buttonStyle={"tertiary"}
            width={"45%"}
            onPress={onBackPress}
            label={"Back"} />
          <FormButton
            styles={styles}
            buttonStyle={"primary"}
            width={"45%"}
            onPress={onRegisterPress}
            label={"Register"} />
        </View>

      </KeyboardAwareScrollView>
    </View>
  );
}
