import React, {useState, useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {Text, StyleSheet, Button} from "react-native";
import {KeyboardAwareScrollView} from "react-native-keyboard-aware-scroll-view";
import {ListElement, ListElementInput, ListElementPostIt} from "../components";
import {useNavigation} from "@react-navigation/native";
import {updateProfile} from "../features/principal/principalSlice";

import styleguide from "../../styles/styleguide";

export default function ChangePasswordScreen(props) {
  const styles = StyleSheet.create(styleguide);
  const principal = useSelector(state=> state.principal);
  const navigation = useNavigation();

  const [oldPassword, setOldPassword] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [email, setEmail] = useState(principal.email);

  const dispatch = useDispatch();

  useEffect( () => {
    navigation.setOptions({
      headerRight: () => <Button
        title={"Done"}
        onPress={() =>
        {
          dispatch(updateProfile({password}));
          navigation.goBack();
        }}
        disabled={confirmPassword !== password || password.toString().length < 6}
      />
    })
  })

  return (
    <KeyboardAwareScrollView
      style={{width: "100%"}}
    >

      <Text/>
      <ListElement
        position={"First"}
      >
        <Text style={styles.textLeft}>Changing password for: </Text>
      </ListElement>
      <ListElementInput
        label={"Email"}
        text={email}
        onChange={setEmail}
        disabled={true}
      />

      <ListElementInput
        label={"Old Password"}
        text={oldPassword}
        onChange={setOldPassword}
        placeholder={"old password"}
        secureTextEntry={true}
      />
      <ListElementInput
        label={"New Password"}
        text={password}
        onChange={setPassword}
        placeholder={"new password"}
        secureTextEntry={true}
      />
      <ListElementInput
        label={"Confirm Password"}
        text={confirmPassword}
        onChange={setConfirmPassword}
        placeholder={"confirm new password"}
        secureTextEntry={true}
        position={"Last"}
      />
      <ListElementPostIt
        position={"Last"}
      >
        <Text style={styles.textLeft}>TODO: Need to hookup to google auth</Text>
      </ListElementPostIt>


    </KeyboardAwareScrollView>
  );
}
