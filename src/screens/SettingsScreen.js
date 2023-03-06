import React, {useState, useContext} from "react";
import {StyleSheet, Text, View, Alert, TouchableOpacity} from "react-native";
import {KeyboardAwareScrollView} from "react-native-keyboard-aware-scroll-view";
import firebase from "../firebase/config";
import styleguide from "../../styles/styleguide";
import {HR, ListElementNav, ListElementToggle} from "../components";
import {updateProfile} from "../features/principal/principalSlice";
import {useSelector, useDispatch} from "react-redux";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";


export default function SettingsScreen({navigation, route}) {
  const styles = StyleSheet.create(styleguide);
  const dispatch = useDispatch();
  const principal = useSelector(state => state.principal);

  const [donateAnonymously, setDonateAnonymously] = useState(principal.donateAnonymously);

  const toggleAnonymous =  () => {
    dispatch(updateProfile(
      {
        donateAnonymously: !donateAnonymously,
      }
    ));
    setDonateAnonymously(!donateAnonymously);
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
          onPress={() => navigation.navigate("Profile", {principal, from: "Settings"})}
          position={"First"}
        />
        <ListElementNav
          text={"Search For"}
          onPress={() => navigation.navigate("Search For", {principal, from: "Settings"})}
        />
        <ListElementToggle
          text={"Donate Anonymously"}
          onToggle={toggleAnonymous}
          value={donateAnonymously}
        />
        <ListElementNav
          text={"Change Password"}
          onPress={() => alert("todo")}
        />
        <ListElementToggle
          text={"Notifications"}

        />
        <ListElementNav
          text={"Logout"}
          onPress={() => alert("todo")}
        />
        <ListElementNav
          text={"Delete Account"}
          onPress={() => alert("todo")}
        />
        <ListElementNav
          text={"User is admin: Test"}
          onPress={() => navigation.navigate("Test", {principal, from: "Settings"})}
        />
        <Text/>
        <Text/>
        <Text/>

        <HR/>
      </KeyboardAwareScrollView>
  );
}
