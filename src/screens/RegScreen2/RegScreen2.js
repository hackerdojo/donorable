import React, { useState } from "react";
import { Image, Text, StyleSheet, View } from "react-native";
import styleguide from "../../../styles/styleguide";
import firebase from "../../firebase/config";
import KeyboardAvoidingView from "react-native/Libraries/Components/Keyboard/KeyboardAvoidingView";
import FormTextInput from "../../components/FormTextInput";
import FormButton from "../../components/FormButton";
import ImageLogo from "../../components/ImageLogo";
import {KeyboardAwareScrollView} from "react-native-keyboard-aware-scroll-view";
import errorMessages from "../../firebase/errorMessages";

export default function RegScreen2({ route, navigation }) {

  const styles = StyleSheet.create(styleguide);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  let registerDisabled = false;

  const type = route.params.type;
  const onBackPress = () => {
    // Link to intro page if user already registered
    navigation.navigate("Intro");
  };

  /* firebase logic for creating new account with email & password */
  const onRegisterPress = () => {

    let newUser = null;
    if (password !== confirmPassword) {
      alert("Please make sure the passwords match.");
      return;
    }
    if (!registerDisabled) {
      registerDisabled = true;
      firebase
        .createUserWithEmailAndPassword(firebase.auth, email, password)
        .then(async (userCredential) => {
          newUser = userCredential.user;
          const uid = userCredential.user.uid;
          const data = {
            id: uid,
            email,
            registered: new Date().toISOString(), // make dates serializable for react native.
            registeredAs: type
          };

          const usersRef = firebase.collection(firebase.db, "users");
          // squiggle ok
          await firebase.setDoc(firebase.doc(firebase.db, "users", uid), data);
          navigation.navigate("Keyword", {user: data});
          registerDisabled= false;
        })
        .catch((error) => {  // something broke, rollback.
          alert(typeof errorMessages[error.code] !== "undefined" ? errorMessages[error.code] : error);
          registerDisabled= false;
        });
    }
  };

  /* View for the registration screen */
  return (
    <View style={styles.screen} >
      <ImageLogo
        source={require("../../../assets/DonorableHeartLogo.png")}
        styles={styles}
      />
      <KeyboardAwareScrollView
        style={{width:"100%"}}
        keyboardShouldPersistTaps="always"
      >

        <Text style={styles.textCentered}>Create a {type} account</Text>
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
            disabled={registerDisabled}
            label={"Register"} />
        </View>

      </KeyboardAwareScrollView>
    </View>
  );
}
