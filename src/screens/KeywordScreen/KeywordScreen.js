import React, { useState} from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import styles from "./styles";


export default function KeywordScreen({ route, navigation }) {

    
  /* Go to Welcome Screen, or return to Settings */
  const { params } = route.params;
  const onDonePress = () => {  
    if (params === 'set') {
        navigation.goBack();
    } else {
        navigation.navigate("Welcome");
    }
  };





  ////////////////
  const [key, setKey] = useState('local');
  
  /* Select/ unselect keywords */
  const onKeyPress = (k) => {  
    setKey({ key: k});
    if (k === 'local') {
        console.log(k);
    }
};

    ///
    /* test code */
    const [tester, setTester] = useState(0);
    const handlePress = () => {
        if(tester === 0) {
            setTester(tester + 1);

        } else {
            setTester(tester - 1);
        }
        console.log(tester);
    }
    /* test code */
    //
    var completed = false;
    var myStyle;
    if(completed){
        myStyle =  [styles.keyButton, styles.localButton] ;
    } else{
        myStyle = [styles.keyButton, styles.globalButton, styles.unButton];
    }
    //
       

///
//Conditional: button and text states set to 'unclicked'
//on click, set button and text with same id to 'clicked'
//if state is clicked, change style
////


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


            {tester ? <TouchableOpacity
                        style={ [styles.keyButton, styles.localButton] }
                        onPress={() => handlePress()}
                        >
                            <Text style={[styles.keyTitle]}>Local</Text>
                        </TouchableOpacity>
                    :   <TouchableOpacity
                            style={ [styles.keyButton, styles.localButton, styles.unButton] }
                            onPress={() => handlePress()}
                    >
                        <Text style={[styles.keyTitle, styles.unText]}>Local</Text>
                    </TouchableOpacity>
                                    }

            <TouchableOpacity
                style={[styles.keyButton, styles.globalButton, styles.unButton]}
                id = 'global'
                onPress={() => onKeyPress('global')}
            >
                <Text style={[styles.keyTitle, styles.unText]}>Global</Text>
            </TouchableOpacity>
            </View>



            <View style={styles.buttonContainer}>
            <TouchableOpacity
                style={[styles.keyButton, styles.healthButton, styles.unButton]}
                id = 'health'
                onPress={() => onKeyPress('health')}
            >
                <Text style={[styles.keyTitle, styles.unText]}>Health</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={[styles.keyButton, styles.stemButton]}
                id = 'stem'
                onPress={() => onKeyPress('stem')}
            >
                <Text style={[styles.keyTitle]}>STEM</Text>
            </TouchableOpacity>
            </View>




            <View style={styles.buttonContainer}>
            <TouchableOpacity
                style={[styles.keyButton, styles.artsButton]}
                onPress={() => onKeyPress('arts')}
            >
                <Text style={[styles.keyTitle, styles.artsTitle]}>Arts</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={[styles.keyButton, styles.faithButton, styles.unButton]}
                id = 'faith'
                onPress={() => onKeyPress('faith')}
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
