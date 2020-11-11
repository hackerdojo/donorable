import React, { useState} from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import styles from "./styles";


export default function KeywordScreen({ route, navigation }) {

    
  /* Go to Welcome Screen, or return to Settings */
  const { params } = route.params;
  const onDonePress = () => {  
    if (params === 'set') {
        console.log(params);
        navigation.goBack();
    } else {
        navigation.navigate("Welcome");
    }
  };

  
  const [key, setKey] = useState('local');
  
  /* Select/ unselect keywords */
  const onKeyPress = () => {  
    console.log(key);
};


  /* View for the KeywordScreen */
  return (
    <View style={styles.container}>
      <KeyboardAwareScrollView
        style={{ flex: 1, width: "100%" }}
        keyboardShouldPersistTaps="always"
      >

        <View style={styles.headView}>
            <Text style={styles.header}>What do you</Text>
            <Text style={styles.header}>care about?</Text>
        </View>




        <View style={styles.buttonRow}
        >


            <View style={styles.buttonContainer}>
            <TouchableOpacity
                style={[styles.keyButton, styles.localButton]}
                onPress={() => setKey({ key: 'local'})}
            >
                <Text style={[styles.keyTitle]}>Local</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={[styles.keyButton, styles.globalButton, styles.unButton]}
                onPress={(k) => onKeyPress(k)}
            >
                <Text style={[styles.keyTitle, styles.unText]}>Global</Text>
            </TouchableOpacity>
            </View>



            <View style={styles.buttonContainer}>
            <TouchableOpacity
                style={[styles.keyButton, styles.healthButton, styles.unButton]}
                onPress={(k) => onKeyPress(k)}
            >
                <Text style={[styles.keyTitle, styles.unText]}>Health</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={[styles.keyButton, styles.stemButton]}
                onPress={(k) => onKeyPress(k)}
            >
                <Text style={[styles.keyTitle]}>STEM</Text>
            </TouchableOpacity>
            </View>




            <View style={styles.buttonContainer}>
            <TouchableOpacity
                style={[styles.keyButton, styles.artsButton]}
                onPress={(k) => onKeyPress(k)}
            >
                <Text style={[styles.keyTitle, styles.artsTitle]}>Arts</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={[styles.keyButton, styles.faithButton, styles.unButton]}
                onPress={(k) => onKeyPress(k)}
            >
                <Text style={[styles.keyTitle, styles.faithTitle, styles.unText]}>Faith</Text>
            </TouchableOpacity>
            </View>


        </View>


        <TouchableOpacity
            style={styles.doneButton}
            onPress={() => onDonePress()}
          >
            <Text style={styles.buttonTitle}>Done</Text>
          </TouchableOpacity>

      </KeyboardAwareScrollView>
    </View>
  );
}
