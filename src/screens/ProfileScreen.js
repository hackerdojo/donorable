import React, {useState} from "react";
import {useSelector} from "react-redux";
import {Text,StyleSheet} from "react-native";
import {KeyboardAwareScrollView} from "react-native-keyboard-aware-scroll-view";
import {FormButton, FormTextInput, ListElementInput, ListElementNav} from "../components";
import {useNavigation} from "@react-navigation/native";

import styleguide from "../../styles/styleguide";

export default function ProfileScreen(props) {
  const styles = StyleSheet.create(styleguide);
  const principal = useSelector(state=> state.principal);
  const navigation = useNavigation();

  const [firstname, setFirstName] = useState(principal.firstname);
  const [middlename, setMiddleName] = useState(principal.middlename);
  const [lastname, setLastName] = useState(principal.lastname);
  const [email, setEmail] = useState(principal.email);
  const [phone, setPhone] = useState(principal.phone);
  const [enteredLocation, setEnteredLocation] = useState(principal.enteredLocation);

  return (
    <KeyboardAwareScrollView style={{width: "100%"}}>
      <Text/>
      <ListElementInput
        label={"Email"}
        text={email}
        onChange={setEmail}
        position={"First"}
        disabled={true}
      />

      <ListElementInput
        label={"First Name"}
        text={firstname}
        onChange={setFirstName}
      />
      <ListElementInput
        label={"Middle Name"}
        text={middlename}
        onChange={setMiddleName}
        placeholder={"optional"}
      />
      <ListElementInput
        label={"Last Name"}
        text={lastname}
        onChange={setLastName}
      />
      <ListElementInput
        label={"Phone"}
        text={phone}
        numeric={true}
        onChange={setPhone}
        position={"First"}
      />
      <ListElementInput
        label={"Location"}
        text={enteredLocation}
        onChange={setEnteredLocation}
        position={"Last"}

      />
    <FormButton
      buttonStyle={"primary"}
      styles={styles}
      onPress={()=> {}}
      disabled={false}
      label={false ? "Updating" : "Update"}/>
    <Text/>
    </KeyboardAwareScrollView>
  );
}