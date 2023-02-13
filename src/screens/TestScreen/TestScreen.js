import React, {useContext} from "react";
import {Image, Text, TouchableOpacity, View, StyleSheet} from "react-native";
import {KeyboardAwareScrollView} from "react-native-keyboard-aware-scroll-view";
import styleguide from "../../../styles/styleguide";
import FormButton from "../../components/FormButton";
import ImageLogo from "../../components/ImageLogo";
import {PrincipalContext} from "../../contexts/PrincipalContext";
import firebase from "../../firebase/config";
import data from "../HomeScreen/data";


export default function TestScreen({navigation, route}) {

  const styles = StyleSheet.create(styleguide);

  const {user, updateUser} = useContext(PrincipalContext);

  /* Start walkthrough  */
  /*(needs to be implemented) */

  const onPopulatePress = async () => {
    const batch = firebase.writeBatch(firebase.db);

    const results = data.map(org => {
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
          source={require("../../../assets/DonorableHeartLogo.png")}
          styles={styles}
        />
        <PrincipalContext.Consumer>
          {({user}) => (
            <View>
              <Text
                style={styles.textCenteredP2}>{(user && user.firstname) ? "Welcome, " + user.firstname + "." : "Welcome!"}</Text>
            </View>
          )}
        </PrincipalContext.Consumer>

        <Text>Do not touch the blinkin' lights unless you know what you are doing.</Text>
        {user.isAdmin &&
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
