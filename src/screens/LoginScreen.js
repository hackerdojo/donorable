import React, {useState} from "react";
import {Image, KeyboardAvoidingView, Text, StyleSheet, View} from "react-native";
import firebase from "../firebase/config";
import styleguide from "../../styles/styleguide";
import errorMessages from "../firebase/errorMessages";
import FormTextInput from "../components/FormTextInput";
import FormButton from "../components/FormButton";
import ImageLogo from "../components/ImageLogo";

export default function LoginScreen({navigation}) {

  const styles = StyleSheet.create(styleguide);
  const [email, setEmail] = useState(""); // variable for email and password
  const [password, setPassword] = useState("");
  const [disableLogin, setDisableLogin] = useState(false);


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
    setDisableLogin(true);
    firebase
      .signInWithEmailAndPassword(firebase.auth, email, password)
      // what about the response?  it's handled in App.js with the firebase, onAuthStateChanged
      // handler.  Pretty slick once I figured it out.

      .then((response) => {
        const uid = response.user.uid;
        const userRef = firebase.collection(firebase.db, "users");
        if (typeof userRef.doc === "undefined") return;
        userRef
          .doc(uid)
          .get()
          .then((firestoreDocument) => {
            if (!firestoreDocument.exists) {
              alert("User not found.");
              setDisableLogin(false);
              return;
            }
            //   const user = firestoreDocument.data();
          })
          .catch((error) => {
            alert("woof:" + error);
            setDisableLogin(false);
          });
      })
      .catch((error) => {
        alert(typeof errorMessages[error.code] !== "undefined" ? errorMessages[error.code] : error);

        // if i don't know the error, put up the ugly one.
        setDisableLogin(false);
      });
  };

  /* View for the Login screen */
  return (
    <View style={[styles.screen, styles.screenFormMod]}>
      <ImageLogo
        source={require("../../assets/DonorableHeartLogo.png")}
        styles={styles}
      />

      <KeyboardAvoidingView
        style={styles.mainAreaForm}
        keyboardShouldPersistTaps="always"
      >
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

        <FormButton
          styles={styles}
          buttonStyle={"ghost"}
          onPress={onRecoverPress}
          label={"Forgot Password"}
        />
        <View style={styles.buttonContainer}>
          <FormButton
            styles={styles}
            width="40%"
            buttonStyle={"tertiary"}
            onPress={onBackPress}
            label={"Back"}/>
          <FormButton
            styles={styles}
            width="40%"
            buttonStyle={"primary"}
            disabled={disableLogin}
            onPress={onLoginPress}
            label={"Login"}/>
        </View>
      </KeyboardAvoidingView>
    </View>
  );

}
