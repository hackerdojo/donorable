import React from "react";
import { Text, TouchableOpacity, View, Alert } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { firebase } from "../../firebase/config";
import styles from "./styles";

export default function SettingsScreen(props) {

  /* Click to finish changing settings and return home */
  const onDonePress = () => {
    props.navigation.goBack();
  };

  /* Click to logout and return to IntroScreen */
  const onLogoutPress = () => {
    firebase
      .auth()
      .signOut()
      .catch((error) => {
        alert(error);
      })
  };

  /* Delete account and return to IntroScreen */
  const onDelPress = () => {
    let user = firebase.auth().currentUser;
    Alert.alert(
      'WARNING',
      'Are you sure you want to delete your account? This action cannot be reversed.',
      [
        {text: 'Return'},
        {text: 'Delete', onPress: () => user
          .delete()
          .catch((error) => {
            alert(error);
          })
      },
        {cancelable: false }
      ]
    )
  };

  return (
    <View style={styles.container}>

      <KeyboardAwareScrollView
        style={{ flex: 1, width: "100%" }}
        keyboardShouldPersistTaps="always"
      >

        <Text style={styles.header}> Settings </Text>

        <Text style={styles.bar}>_____________________________</Text>

        <View style={styles.textWrapper}>
          <Text style={styles.text}>Profile picture</Text>
          <Text style={styles.text}>Phone number</Text>
          <Text style={styles.text}>Email</Text>
          <Text style={styles.text}>Password</Text>
          <Text style={styles.text}>Location</Text>
        </View>

        <Text style={styles.bar}>_____________________________</Text>

        <View style={styles.textWrapper}>
          <Text style={styles.text}>Go anonymous</Text>
          <Text style={styles.text}>Notifications</Text>

          <TouchableOpacity onPress={() => onDelPress()}>
            <Text style={styles.text}>Delete account</Text>
          </TouchableOpacity>
          

          <TouchableOpacity onPress={() => onLogoutPress()}>
            <Text style={styles.text}>Logout</Text>
          </TouchableOpacity>

        </View>

        <TouchableOpacity style={styles.button} onPress={() => onDonePress()}>
          <Text style={styles.buttonTitle}>Done</Text>
        </TouchableOpacity>

      </KeyboardAwareScrollView>
    </View>
  );
}
