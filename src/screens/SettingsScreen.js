import React, {useState, useContext} from "react";
import {StyleSheet, Text, View, Alert, TouchableOpacity} from "react-native";
import {HStack, Spacer} from "react-native-stacks";
import {KeyboardAwareScrollView} from "react-native-keyboard-aware-scroll-view";
import firebase from "../firebase/config";
import styleguide from "../../styles/styleguide";
import {HR, FormTextInput, FormButton, ListElement, ListElementNav, ListElementToggle} from "../components";
import {updateUserSettings} from "../features/principal/principalSlice";
import {useSelector, useDispatch} from "react-redux";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

function ProfileScreen(props) {
  return <>
    <FormTextInput
      label={"Email"}
      text={props.principal.email}
      styles={props.styles}
      disabled={true}
      // let's not let people change this for now because it is their login.
      // so many security issues...
    />
    <FormTextInput
      label={"First Name"}
      text={props.text}
      styles={props.styles}
      onChangeText={props.onChangeText}
    />
    <FormTextInput
      label={"Last Name"}
      text={props.text1}
      styles={props.styles}
      onChangeText={props.onChangeText1}
    />
    <FormTextInput
      label={"Phone Number"}
      styles={props.styles}
      keyboardType="numeric"
      text={props.text2}
      onChangeText={props.onChangeText2}
    />
    <FormTextInput
      label={"Location"}
      styles={props.styles}
      text={props.text3}
      onChangeText={props.onChangeText3}
    />
    <FormButton
      buttonStyle={"primary"}
      styles={props.styles}
      onPress={props.onPress}
      disabled={props.disabled}
      label={props.disabled ? "Updating" : "Update"}/>
    <Text/>
  </>;
}

export default function SettingsScreen({navigation, route}) {
  const styles = StyleSheet.create(styleguide);
  const dispatch = useDispatch();
  const principal = useSelector(state => state.principal);
  const [firstName, setFirstName] = useState(principal.firstname);
  const [lastName, setLastName] = useState(principal.lastname);
  const [phone, setPhone] = useState(principal.phone);
  const [enteredLocation, setEnteredLocation] = useState(principal.enteredLocation);

  let updateDisable = false;
  const [anonymous, setAnonymous] = useState(false);

  const toggleAnonymous = () => { setAnonymous(!anonymous)}
  const saveChanges =  () => {
    updateDisable = true;
    dispatch(updateUserSettings(
      {
        firstname: firstName,
        lastname: lastName,
        phone: phone,
        enteredLocation: enteredLocation
      }
    ));
    updateDisable = false;
  }

  /* Click to finish changing settings and return home */
  const onDonePress = () => {
    navigation.goBack();
  };

  const onKeyPresss = () => {
    navigation.navigate('Keyword', {params: 'set'});
  }

  /* Additional logout dialogue */
  const log2Alert = () => {
    Alert.alert(
      'WARNING',
      'Are you sure?',
      [
        {
          text: 'Return'
        },
        {
          text: 'Logout', onPress: () => firebase
            .auth
            .signOut()
            .catch((error) => {
              alert(error);
            })
        },
        {cancelable: false}
      ]
    )
  };

  /* Click to logout and return to IntroScreen */
  const onLogoutPress = () => {
    Alert.alert(
      'WARNING',
      'Do you want to log out?',
      [
        {
          text: 'No'
        },
        {
          text: 'Yes', onPress: () => log2Alert()
        }
      ],
      {cancelable: false}
    )
  };

  /* Additional account deletion dialogue */
  const del2Alert = () => {
    let user = firebase.auth().currentUser;
    Alert.alert(
      'WARNING',
      'This action cannot be reversed. All data will be permanently deleted.',
      [
        {
          text: 'Return'
        },
        {
          text: 'Delete', onPress: () => user
            .delete()
            .catch((error) => {
              alert(error);
            })
        },
        {cancelable: false}
      ]
    )
  };

  /* Delete account and return to IntroScreen */
  const onDelPress = () => {
    Alert.alert(
      'WARNING',
      'Are you sure you want to delete your account?',
      [
        {
          text: 'No'
        },
        {
          text: 'Yes', onPress: () => del2Alert()
        },
        {cancelable: false}
      ]
    )
  };

  /* TODO:  Settings screen functions */
  /* Change email of current user */
  const onEmPress = () => {
    let user = firebase.auth().currentUser;

    /**re-authenticate */
    let credential = firebase.auth.EmailAuthProvider.credential(
      user.email,
      'key123'
    );
    user.reauthenticateWithCredential(credential).then(() => {
      Alert.alert('authenticated')
    })
      .catch((error) => {
        alert(error);
      });

    user.updateEmail("lime@key.com")
      .then(() => {
        Alert.alert('success')
          .catch((error) => {
            alert(error);
          })
      });
  }

  /* TODO:  Settings screen functions */
  /* Test modal */

  //const [shown, setShown ] = useState(0);

//  const Container = () => {
//    {this.state.isShown ? (<Modal/>) : null }
//    <React.Fragment>
//      <TriggerButton
//        showModal={this.showModal}
//        buttonRef={(n) => (this.TriggerButton = n)}
//        triggerText={this.props.triggerText}
//       />
//       {this.state.isShown ? (
//        <Modal
//          onSubmit={this.props.onSubmit}
//           modalRef={(n) => (this.modal = n)}
//           buttonRef={(n) => (this.closeButton = n)}
// //           closeModal={this.closeModal}
//           onKeyDown={this.onKeyDown}
//           onClickOutside={this.onClickOutside}
//         />
//       // ) : null
// //       }
//     </React.Fragment>
//   }

// showModal = () => {
//   this.setState({ isShown: true}, () => {
//     this.closeButton.focus();
//     this.toggleScrollLock();
//   });
// };

// toggleScrollLock = () => {
//   document.querySelector('html').classList.toggle('scroll-lock');
// }

// closeModal = () => {
//   this.setState({ isShown: false });
//   thisTriggerButton.focus();
//   this.toggleScrollLock();
// }

// onKeyDown = (event) => {
//   if(event.keyCode === 27) {
//     this.closeModal();
//   }
// }

// onClickOutside = (event) => {
//   if (this.modal && this.modal.contains(event.target)) return
//   this.closeModal();
// }

// const Trigger = ({ triggerText, buttonRef, showModal }) => {
//   return (
//     <button
//       ref={buttonRef}
//       onClick={showModal}
//     >
//       {triggerText}
//     </button>
//   )
// }


// /******TEST MODAL********************************************************/

//   /* Change password of current user */
//   const onPwPress = () => {
//     let user = firebase.auth().currentUser;
//     let newPassword = 'key123';
//     /**re-authenticate */
//     let credential = firebase.auth.EmailAuthProvider.credential(
//       user.email,
//       'fake213'
//     );
//     user.reauthenticateWithCredential(credential).then(function(){
//       Alert.alert('authenticated')})
//     .catch(function(error) {
//       Alert.alert('error')
//     });
//     user.updatePassword(newPassword).then(function() {
//       Alert.alert('success')
//       .catch(function(error) {
//         Alert.alert('fail');
//       });
//     })
//   }

  /********************************************************************************* */

  return (
      <KeyboardAwareScrollView style={{width: "100%"}}>
        <Text/>
        <ListElementNav
          text={principal.firstname +" " + principal.lastname}
          onPress={()=> {alert("Todo")}}
          position={"First"}
        />
        <ListElementNav
          text={"Search For"}
          onPress={() => navigation.navigate("Search For", {principal, from: "Settings"})}
        />
        <ListElementToggle
          text={"Donate Anonymously"}
          onToggle={toggleAnonymous}
          value={anonymous}
        />
        <FormButton
          buttonStyle={"tertiary"}
          styles={styles}
          label={"Go Anonymous"}/>
        <FormButton
          buttonStyle={"tertiary"}
          styles={styles}
          label={"Change Password"}/>
        <FormButton
          buttonStyle={"tertiary"}
          styles={styles}
          label={"Notifications"}/>
        <FormButton
          buttonStyle={"tertiary"}
          styles={styles}
          onPress={onLogoutPress}
          label={"Logout"}/>
        <FormButton
          buttonStyle={"danger"}
          styles={styles}
          label={"Delete Account"}
        />
        {principal.isAdmin &&
        <FormButton
          buttonStyle={"secondary"}
          styles={styles}
          onPress={() => navigation.navigate("Test", {principal, from: "Settings"})}
          label={"User is Admin: Test"}/>
        }
        <Text/>
        <Text/>
        <Text/>
        <ProfileScreen principal={principal} styles={styles} text={firstName} onChangeText={setFirstName}
                       text1={lastName} onChangeText1={setLastName} text2={phone} onChangeText2={setPhone}
                       text3={enteredLocation} onChangeText3={setEnteredLocation} onPress={saveChanges}
                       disabled={updateDisable}/>
        <HR/>
      </KeyboardAwareScrollView>
  );
}
