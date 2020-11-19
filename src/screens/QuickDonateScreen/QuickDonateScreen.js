import React, { useState } from "react";
import { Text, TouchableOpacity, View, TextInput} from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import styles from "./styles";


export default function QuickDonateScreen(props) {

    
  /* Return to previous screen */
  const onDonePress = () => {  
        props.navigation.goBack();
    }


  /* View for the QuickDonateScreen */
  return (
    <View style={styles.container}>
      <KeyboardAwareScrollView
        style={{ flex: 1, width: "100%" }}
        keyboardShouldPersistTaps="always"
      >

        <View style={styles.headView}>
            <Text style={styles.header}>Quick Donate</Text>
        </View>

        <View style={styles.titleView}>
            <Text style={styles.title}>Send a message to</Text>
            <Text style={styles.title}>Hacker Dojo</Text>
        </View>

        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            label="ShortMessage"
            underlineColorAndroid="transparent"
            autoCapitalize="none"
          />
        </View>


        <TouchableOpacity
            style={styles.doneButton}
            onPress={() => onDonePress()}
          >
            <Text style={styles.buttonTitle}>Done</Text>
          </TouchableOpacity>

      </KeyboardAwareScrollView>
    </View>
  );
}
