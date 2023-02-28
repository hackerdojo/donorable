import React, {useContext} from "react";
import {useSelector} from "react-redux";
import {Image, Text, TouchableOpacity, View, StyleSheet} from "react-native";
import {KeyboardAwareScrollView} from "react-native-keyboard-aware-scroll-view";
import styleguide from "../../styles/styleguide";
import FormButton from "../components/FormButton";
import ImageLogo from "../components/ImageLogo";
import firebase from "../firebase/config";

export default function TestScreen({navigation, route}) {

  const styles = StyleSheet.create(styleguide);
  const principal = useSelector(state => state.principal);
  const cardDeck = useSelector(state => state.cardDeck);

  /* Start walkthrough  */
  /*(needs to be implemented) */

  const onPopulatePress = async () => {
    const batch = firebase.writeBatch(firebase.db);

    const results = cardDeck.cards.map(org => {
      const docRef = firebase.doc(firebase.db, "organizations", org.id);
      batch.set(docRef, org);
    })
    await batch.commit();
    console.log(results);
  }


  /* View for the WelcomeScreen */
  return (
    <View style={styles.screen}>
      <KeyboardAwareScrollView
        style={{flex: 1, width: "100%"}}
        keyboardShouldPersistTaps="always"
      >
        <ImageLogo
          source={require("../../assets/DonorableHeartLogo.png")}
          styles={styles}
        />
            <View>
              <Text
                style={styles.textCenteredP2}>{(principal && principal.firstname) ? "Welcome, " + principal.firstname + "." : "Welcome!"}</Text>
            </View>
        <Text>Do not touch the blinkin' lights unless you know what you are doing.</Text>
        {principal.isAdmin &&
        <FormButton onPress={onPopulatePress}
                    styles={styles}
                    buttonStyle={"Primary"}
                    label={"Push Org Data"}
        />
        }
      </KeyboardAwareScrollView>
    </View>
  );
}
