import React, { useState} from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import styles from "./styles";
import { Nav } from "react-bootstrap/Nav";

export default function KeywordScreen({ navigation }) {

    
  /* Go to Welcome Screen */
  const onDonePress = () => {   
    navigation.navigate("Welcome");
  };

  
  const [key, setKey] = useState('local');
  
  /* Select/ unselect keywords */
  const onKeyPress = (k) => {  
    setKey(k); 
    console.log(k);
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
            activeKey={key}
        >


            <View style={styles.buttonContainer}>
            <TouchableOpacity
                style={[styles.keyButton, styles.localButton, styles.unButton]}
                eventKey="local"
                onPress={(k) => onKeyPress(k)}
            >
                <Text style={[styles.keyTitle, styles.unText]}>Local</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={[styles.keyButton, styles.globalButton, styles.unButton]}
                onPress={(k) => onKeyPress(k)}
                eventKey="global"
            >
                <Text style={[styles.keyTitle, styles.unText]}>Global</Text>
            </TouchableOpacity>
            </View>



            <View style={styles.buttonContainer}>
            <TouchableOpacity
                style={[styles.keyButton, styles.healthButton, styles.unButton]}
                onPress={(k) => onKeyPress(k)}
                eventKey="health"
            >
                <Text style={[styles.keyTitle, styles.unText]}>Health</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={[styles.keyButton, styles.stemButton, styles.unButton]}
                onPress={(k) => onKeyPress(k)}
                eventKey="stem"
            >
                <Text style={[styles.keyTitle, styles.unText]}>STEM</Text>
            </TouchableOpacity>
            </View>




            <View style={styles.buttonContainer}>
            <TouchableOpacity
                style={[styles.keyButton, styles.artsButton, styles.unButton]}
                onPress={(k) => onKeyPress(k)}
                eventKey="arts"
            >
                <Text style={[styles.keyTitle, styles.artsTitle, styles.unText]}>Arts</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={[styles.keyButton, styles.faithButton, styles.unButton]}
                onPress={(k) => onKeyPress(k)}
                eventKey="faith"
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
