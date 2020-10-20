import React, { useState } from "react";
import { Image, Text, TextInput, TouchableOpacity, View } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import styles from "./styles";
import { firebase } from "../../firebase/config";

export default function RegScreen2({ navigation }) {
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
            navigation.navigate("Home", { user: data });
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
    <View style={styles.container}>
      <KeyboardAwareScrollView
        style={{ flex: 1, width: "100%" }}
        keyboardShouldPersistTaps="always"
      >
        <Image
          source={require("../../../assets/donorable-title.png")}
          style={styles.title}
        />

        <Text style={styles.label}>create an account</Text>

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


        <Text style={styles.inputLabel}>Confirm password</Text>
        <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholderTextColor="#aaaaaa"
          secureTextEntry
          label="Confirm Password"
          onChangeText={(text) => setConfirmPassword(text)}
          value={confirmPassword}
          underlineColorAndroid="transparent"
          autoCapitalize="none"
        />
        </View>

        <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.enterButton}
          onPress={() => onBackPress()}
        >
          <Text style={styles.buttonTitle}>Back</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.backButton}
          onPress={() => onRegisterPress()}
        >
          <Text style={styles.buttonTitle}>Enter</Text>
        </TouchableOpacity>
        </View>

      </KeyboardAwareScrollView>
    </View>
  );
}
