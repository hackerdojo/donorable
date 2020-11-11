import React, { useState } from "react";
import { Text, TouchableOpacity, View, Alert, Modal, TouchableHighlightBase } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { firebase } from "../../firebase/config";
import styles from "./styles";

import { FocusTrap } from "focus-trap-react";

export default function SettingsScreen({ navigation }) {

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
          .auth()
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
    <View style={styles.container}>

      <KeyboardAwareScrollView
        style={{ flex: 1, width: "100%" }}
        keyboardShouldPersistTaps="always"
      >

        <Text style={styles.header}> Settings </Text>

        <Text style={styles.bar}>_____________________________</Text>

        <View style={styles.textWrapper}>
          <Text style={styles.text}>Profile picture</Text>
          <Text style={styles.text}>Phone number</Text>

        <TouchableOpacity onPress={() => onEmPress()}>
          <Text style={styles.text}>Email</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => onPwPress()}>
          <Text style={styles.text}>Password</Text>
        </TouchableOpacity>
          
          <Text style={styles.text}>Location</Text>

        <TouchableOpacity onPress={() => onKeyPresss()}>
          <Text style={styles.text}>Keywords</Text>
        </TouchableOpacity>

        </View>

        <Text style={styles.bar}>_____________________________</Text>

        <View style={styles.textWrapper}>
          <Text style={styles.text}>Go anonymous</Text>
          <Text style={styles.text}>Notifications</Text>

          <TouchableOpacity onPress={() => onDelPress()}>
            <Text style={styles.text}>Delete account</Text>
          </TouchableOpacity>
          

          <TouchableOpacity onPress={() => onLogoutPress()}>
            <Text style={styles.text}>Logout</Text>
          </TouchableOpacity>

        </View>

        <TouchableOpacity style={styles.button} onPress={() => onDonePress()}>
          <Text style={styles.buttonTitle}>Done</Text>
        </TouchableOpacity>

      </KeyboardAwareScrollView>
    </View>
  );
}
