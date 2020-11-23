import React from "react";
import { Text, TouchableOpacity, View, TextInput} from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import styles from "./styles";


export default function QuickDonateScreen(props) {

    
  /* Return to previous screen */
  const onReturnPress = () => {  
        props.navigation.goBack();
    }


  /* View for the QuickDonateScreen */
  return (
    <View style={styles.container}>
      <KeyboardAwareScrollView
        style={{ flex: 1, width: "100%" }}
        keyboardShouldPersistTaps="always"
      >

        <View style={styles.headView}>
            <Text style={styles.header}>Quick Donate</Text>
        </View>

        <View style={styles.titleView}>
            <Text style={styles.title}>Send a message to</Text>
            <Text style={styles.title}>Hacker Dojo</Text>
        </View>

        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            label="ShortMessage"
            underlineColorAndroid="transparent"
            autoCapitalize="none"
          />
        </View>


        <View style={styles.buttonContainer}>
            <View style={styles.buttonRow}>

                <TouchableOpacity style={styles.donButton}>
                    <Text style={styles.donTitle}>$5</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.donButton}>
                    <Text style={styles.donTitle}>$10</Text>
                </TouchableOpacity>

            </View>

            <View style={styles.buttonRow}>
                <TouchableOpacity style={styles.donButton}>
                    <Text style={styles.donTitle}>$15</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.donButton}>
                    <Text style={styles.donTitle}>$20</Text>
                </TouchableOpacity>
            </View>

        </View>


        <TouchableOpacity
            style={styles.returnButton}
            onPress={() => onReturnPress()}
          >
            <Text style={styles.buttonTitle}>Return</Text>
          </TouchableOpacity>

      </KeyboardAwareScrollView>
    </View>
  );
}
