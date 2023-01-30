import React from "react";
import { Image, Text, TouchableOpacity, View, StyleSheet } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import styleguide from "../../../styles/styleguide";
import FormButton from "../../components/FormButton";
import Logo from "../../components/Logo";
import {PrincipalContext} from "../../contexts/PrincipalContext";


export default function WelcomeScreen({ navigation, route }) {

  const styles = StyleSheet.create(styleguide);
  /* Start walkthrough  */
  /*(needs to be implemented) */
  const onWalkPress = () => {
    navigation.navigate("Home");
  };

  /* Go strait to HomeScreen */
  const onStartPress = () => {
    navigation.navigate("Home");
  };

  /* View for the WelcomeScreen */
  return (
    <View style={styles.screen}>
      <KeyboardAwareScrollView
        style={{ flex: 1, width: "100%" }}
        keyboardShouldPersistTaps="always"
      >
        <Logo
          source={require("../../../assets/DonorableHeartLogo.png")}
          styles={styles}
        />
        <PrincipalContext.Consumer>
          {({user}) =>(
          <View>
            <Text style={styles.textCenteredP2}>{(user && user.firstname) ? "Welcome, " +  user.firstname +".": "Welcome!"}</Text>
          </View>
          )}
        </PrincipalContext.Consumer>
        <View>
            <Text style={styles.textCenteredP2}>Meet people.</Text>
            <Text style={styles.textCenteredP2}>Make a difference.</Text>
        </View>

        <Image
          source={require("../../../assets/coffee.png")}
        />

        <FormButton onPress={onWalkPress}
                    styles={styles}
                    buttonStyle={"Primary"}
                    label={"Walkthrough"}
        />
        <FormButton onPress={onStartPress}
                    styles={styles}
                    buttonStyle={"Secondary"}
                    label={"Start Browsing"}
        />
      </KeyboardAwareScrollView>
    </View>
  );
}
