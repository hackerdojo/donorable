import React, {useState, useContext} from "react";
import {StyleSheet, Text, View, Alert} from "react-native";
import {KeyboardAwareScrollView} from "react-native-keyboard-aware-scroll-view";
import firebase from "../../firebase/config";
import styleguide from "../../../styles/styleguide";
import {HR, FormTextInput, FormButton} from "../../components";
import {PrincipalContext} from "../../contexts/PrincipalContext";

export default function SettingsScreen({navigation, route}) {
  const styles = StyleSheet.create(styleguide);
  const {user, updateUser} = useContext(PrincipalContext);
  const [firstName, setFirstName] = useState(user.firstname);
  const [lastName, setLastName] = useState(user.lastname);
  const [phone, setPhone] = useState(user.phone);
  const [enteredLocation, setEnteredLocation] = useState(user.enteredLocation);

  let updateDisable = false;

  const saveChanges = async () => {
    updateDisable = true;
    updateUser({
      ...user,
      firstname: firstName,
      lastname: lastName,
      phone: phone,
      enteredLocation: enteredLocation
    })
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
    <View style={styles.screen}>
      <KeyboardAwareScrollView
        style={{width: "100%"}}>
        <FormTextInput
          label={"Email"}
          text={user.email}
          styles={styles}
          disabled={true}
          // let's not let people change this for now because it is their login.
          // so many security issues...
        />
        <FormTextInput
          label={"First Name"}
          text={firstName}
          styles={styles}
          onChangeText={setFirstName}
        />
        <FormTextInput
          label={"Last Name"}
          text={lastName}
          styles={styles}
          onChangeText={setLastName}
        />
        <FormTextInput
          label={"Phone Number"}
          styles={styles}
          keyboardType='numeric'
          text={phone}
          onChangeText={setPhone}
        />
        <FormTextInput
          label={"Location"}
          styles={styles}
          text={enteredLocation}
          onChangeText={setEnteredLocation}
        />
        <FormButton
          buttonStyle={"primary"}
          styles={styles}
          onPress={saveChanges}
          disabled={updateDisable}
          label={updateDisable ? "Updating" : "Update"}/>
        <Text/>
        <HR/>
        <FormButton
          buttonStyle={"secondary"}
          styles={styles}
          onPress={() => navigation.navigate("Keyword", {from: "Settings"})}
          label={"Search Filters"}/>
        <FormButton
          buttonStyle={"secondary"}
          styles={styles}
          label={"Go Anonymous"}/>
        <FormButton
          buttonStyle={"secondary"}
          styles={styles}
          label={"Change Password"}/>
        <FormButton
          buttonStyle={"secondary"}
          styles={styles}
          label={"Notifications"}/>
        <FormButton
          buttonStyle={"secondary"}
          styles={styles}
          onPress={onLogoutPress}
          label={"Logout"}/>
        <FormButton
          buttonStyle={"danger"}
          styles={styles}
          label={"Delete Account"}
        />
        { user.isAdmin &&
          <FormButton
            buttonStyle={"secondary"}
            styles={styles}
            onPress={() => navigation.navigate("Test", {user, from: "Settings"})}
            label={"Test"}/>
        }
        <Text/>
        <Text/>
      </KeyboardAwareScrollView>
    </View>
  );
}
