import React from "react";
import { Text, TouchableOpacity, View, Alert, Modal, TouchableHighlightBase } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { firebase } from "../../firebase/config";
import styles from "./styles";


export default function LearnMoreScreen({ navigation }) {

  /* Click to finish changing settings and return home */
  const onDonePress = () => {
    navigation.goBack();
  };



  return (
    <View style={styles.container}>

      <KeyboardAwareScrollView
        style={{ flex: 1, width: "100%" }}
        keyboardShouldPersistTaps="always"
      >

        <Text style={styles.header}> Hacker Dojo </Text>

        <Text style={styles.bar}>_____________________________</Text>

        <View style={styles.textWrapper}>
          <TouchableOpacity onPress={() => onEmPress()}>
            <Text style={styles.purpleText}>What we aim to solve</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => onEmPress()}>
            <Text style={styles.tealText}>Where we work</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => onEmPress()}>
            <Text style={styles.purpleText}>Where we serve</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => onEmPress()}>
            <Text style={styles.tealText}>Our programs</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => onEmPress()}>
            <Text style={styles.purpleText}>Population(s) served</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => onEmPress()}>
            <Text style={styles.tealText}>Our results</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => onEmPress()}>
            <Text style={styles.purpleText}>Charting impact</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => onEmPress()}>
            <Text style={styles.tealText}>Where the money goes</Text>
          </TouchableOpacity>



        </View>


        <Text style={styles.text}>Budget: $491,679</Text>
        <Text style={styles.text}>Org type: 501(c)(3)</Text>
        <Text style={styles.text}>Keywords: community center, technology</Text>

        <TouchableOpacity style={styles.button} onPress={() => onDonePress()}>
          <Text style={styles.buttonTitle}>Done</Text>
        </TouchableOpacity>


      </KeyboardAwareScrollView>
    </View>
  );
}
