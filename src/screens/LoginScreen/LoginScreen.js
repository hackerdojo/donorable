import React, { useState } from "react";
import {Image, KeyboardAvoidingView, Text, TextInput, TouchableOpacity, View} from "react-native";
import styles from "./styles";
import { firebase } from "../../firebase/config";

export default function LoginScreen({ navigation }) {
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
          style={styles.title}
          resizeMode="contain"
        />
        </View>
        <View>
        <Text style={styles.inputLabel}>Email</Text>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            label="E-mail"
            onChangeText={setEmail}
            value={email}
            underlineColorAndroid="transparent"
            autoCapitalize="none"
          />
        </View>
        </View>
        <View>
        <Text style={styles.inputLabel}>Password</Text>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            secureTextEntry
            label="Password"
            onChangeText={setPassword}
            value={password}
            underlineColorAndroid="transparent"
            autoCapitalize="none"
          />
        </View>
        </View>
        <TouchableOpacity onPress={() => onRecoverPress()}>
          <Text style={styles.textCentered}>Forgot password?</Text>
        </TouchableOpacity>

        <View style={styles.buttonContainer}>

          <TouchableOpacity
            style={{...styles.buttonTertiary, width:"40%"}}
            onPress={() => onBackPress()}
          >
            <Text style={styles.buttonTitle}>Back</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{...styles.buttonPrimary, width:"40%"}}
            onPress={() => onLoginPress()}
          >
            <Text style={styles.buttonTitle}>Login</Text>
          </TouchableOpacity>

        </View>
      </KeyboardAvoidingView>
     </View>
  );
}
