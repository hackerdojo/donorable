import React, { useState } from "react";
import { Image, Text, TextInput, TouchableOpacity, View } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import styles from "./styles";
//import { firebase } from "../../firebase/config";

export default function MessageScreen(props) {


  /* Return to swiping */
  const onBackPress = () => {
    props.navigation.goBack();
  };


  /* Quick Donate option */
  /* to be implemented in "like screen" in future */
  const onCardPress = () => {
    props.navigation.navigate("QuickDonate");
  };



  /* View for the Message screen */
  return (
    <View style={styles.container}>
      <KeyboardAwareScrollView
        style={{ flex: 1, width: "100%" }}
        keyboardShouldPersistTaps="always"
      >



        <Text style={styles.label}>Messages</Text>

        <Image style={styles.divBar} source={require("../../../assets/div-bar.png")}/>


        <Image
              source={require("../../../assets/card_hackerdojo.png")}
              style={styles.smallCard}
            />
        <TouchableOpacity
            onPress={() => onCardPress()}
          >
            <Text style={styles.msgPreview}>Hi</Text>
          </TouchableOpacity>


        <Image style={styles.divBar} source={require("../../../assets/div-bar.png")}/>

        <Image
          source={require("../../../assets/card_handson.png")}
          style={styles.smallCard}
        />
        <Text style={styles.msgPreview}>Hey!</Text>

        <Image style={styles.divBar} source={require("../../../assets/div-bar.png")}/>


        <Image
          source={require("../../../assets/card_lacasa.png")}
          style={styles.smallCard}
        />
        <Text style={styles.msgPreview}>How's it going?</Text>

        <Image style={styles.divBar} source={require("../../../assets/div-bar.png")}/>

        <Image
          source={require("../../../assets/card_aspire.png")}
          style={styles.smallCard}
        />
        <Text style={styles.msgPreview}>What are the most...</Text>

        <Image style={styles.divBar} source={require("../../../assets/div-bar.png")}/>

        <Image
          source={require("../../../assets/card_stand.png")}
          style={styles.smallCard}
        />
        <Text style={styles.msgPreview}>How do you keep...</Text>

        <Image style={styles.divBar} source={require("../../../assets/div-bar.png")}/>


        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.backButton}
            onPress={() => onBackPress()}
          >
            <Text style={styles.buttonTitle}>Return</Text>
          </TouchableOpacity>
        </View>


      </KeyboardAwareScrollView>
    </View>
  );
}
