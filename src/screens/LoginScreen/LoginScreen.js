/* needs routing */
/* title, then text input borders and labels */

import React, { useState } from "react";
import { Image, Text, TextInput, TouchableOpacity, View } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import styles from "./styles";
import { firebase } from "../../firebase/config";

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState(""); // variable for email and password
  const [password, setPassword] = useState("");

  /* Create account */
  const onRegPress = () => {
    navigation.navigate("Registration");
  };

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
            navigation.navigate("Home", { user });
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
    <View style={styles.container}>
      <KeyboardAwareScrollView
        style={{ flex: 1, width: "100%" }}
        keyboardShouldPersistTaps="always"
      >
        <Image
          source={require("../../../assets/donorable-title.png")}
          style={styles.title}
        />

        <Text style={styles.label}>login</Text>

        <Text style={styles.inputLabel}>Email</Text>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            label="E-mail"
            placeholderTextColor="#aaaaaa"
            onChangeText={(text) => setEmail(text)}
            value={email}
            underlineColorAndroid="transparent"
            autoCapitalize="none"
          />
        </View>

        <Text style={styles.inputLabel}>Password</Text>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholderTextColor="#aaaaaa"
            secureTextEntry
            label="Password"
            onChangeText={(text) => setPassword(text)}
            value={password}
            underlineColorAndroid="transparent"
            autoCapitalize="none"
          />
        </View>

        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.backButton}
            onPress={() => onRegPress()}
          >
            <Text style={styles.buttonTitle}>Back</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.loginButton}
            onPress={() => onLoginPress()}
          >
            <Text style={styles.buttonTitle}>Login</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAwareScrollView>
    </View>
  );
}
