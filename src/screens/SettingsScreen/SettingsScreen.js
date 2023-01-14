import React, { useState } from "react";
import {StyleSheet, Text, KeyboardAvoidingView, View, Alert, ScrollView} from "react-native";
import firebase  from "../../firebase/config";
import styleguide from "../../../styles/styleguide";

import Logo from "../../components/Logo";
import FormTextInput from "../../components/FormTextInput";
import FormButton from "../../components/FormButton";
import {KeyboardAwareScrollView} from "react-native-keyboard-aware-scroll-view";

export default function SettingsScreen({ navigation }) {

  const styles = StyleSheet.create(styleguide);

  /* Click to finish changing settings and return home */
  const onDonePress = () => {
    navigation.goBack();
  };

  const onKeyPresss = () => {
    navigation.navigate('Keyword', { params: 'set' });
  }


  /* Additional logout dialogue */
  const log2Alert = () => {
  Alert.alert(
    'WARNING',
    'Are you sure?',
    [
      {
        text:'Return'
      },
      {
        text: 'Logout', onPress: () => firebase
          .auth
          .signOut()
          .catch((error) => {
            alert(error);
          })
      },
        { cancelable: false }
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
          {cancelable: false }
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
          text:'Return'
        },
        {
          text: 'Delete', onPress: () => user
            .delete()
            .catch((error) => {
              alert(error);
            })
        },
          { cancelable: false }
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
        {cancelable: false }
      ]
    )
  };


  /******************* * TO DO***************************** */
  /* Change email of current user */
  const onEmPress = () => {

    let user = firebase.auth().currentUser;

    /**re-authenticate */
    let credential = firebase.auth.EmailAuthProvider.credential(
      user.email,
      'key123'
    );
    user.reauthenticateWithCredential(credential).then(() => {
      Alert.alert('authenticated')})
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



  /*****************************TO DO********************************************************** */
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
      <Logo
        source={require("../../../assets/DonorableHeartLogo.png")}
        styles={styles}
      />

      <KeyboardAwareScrollView
       style={{width: "100%"}}>

        <FormTextInput
          label={"Email"}
          styles={styles}
        />

        <FormTextInput
          label={"Phone Number"}
          styles={styles}
        />

        <FormTextInput
          secureTextEntry={true}
          label={"Password"}
          styles={styles}
        />
        <FormTextInput
          label={"Location"}
          styles={styles}
        />
        <FormTextInput
          label={"Keywords"}
          styles={styles}
        />

        <FormButton
          buttonStyle={"secondary"}
          styles={styles}
          label={"Go Anonymous"}/>
        <FormButton
          buttonStyle={"secondary"}
          styles={styles}
          label={"Notifications"}/>
        <FormButton
          buttonStyle={"secondary"}
          styles={styles}
          label={"Delete Account"}
        />
        <FormButton
          buttonStyle={"secondary"}
          styles={styles}
          onPress={onLogoutPress}
          label={"Logout"}/>

        <Text/>
        <Text/>
      </KeyboardAwareScrollView>
    </View>
  );
}
