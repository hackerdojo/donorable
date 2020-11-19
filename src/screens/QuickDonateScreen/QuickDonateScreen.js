import React, { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import styles from "./styles";


export default function QuickDonateScreen({ route, navigation }) {

    
  /* Go to Welcome Screen, or return to Settings */
  const { params } = route.params;
  const onDonePress = () => {  
    if (params === 'set') {
        navigation.goBack();
    } else {
        navigation.navigate("Welcome");
    }
  };




    /* Hooks for conditional button style rendering */
    const [local, setLocal] = useState(0);
    const [global, setGlobal] = useState(0);
    const [health, setHealth] = useState(0);
    const [stem, setStem] = useState(0);
    const [arts, setArts] = useState(0);
    const [faith, setFaith] = useState(0);

    /* Click handler for button rendering, more efficient
    solution likely needed  */
    const handlePress = (k) => {
        if(k === 'local') {
            if(local === 0) {
                setLocal(local + 1);
            } else {
                setLocal(local - 1);
            }
        } else if (k === 'global') {
            if(global === 0) {
                setGlobal(global + 1);
            } else {
                setGlobal(global - 1);
            }
        } else if (k === 'health') {
            if(health === 0) {
                setHealth(health + 1);
            } else {
                setHealth(health - 1);
            } 
        } else if (k === 'stem') {
            if(stem === 0) {
                setStem(stem + 1);
            } else {
                setStem(stem - 1);
            }
        } else if (k === 'arts') {
            if(arts === 0) {
                setArts(arts + 1);
            } else {
                setArts(arts - 1);
            }
        } else if (k === 'faith') {
            if(faith === 0) {
                setFaith(faith + 1);
            } else {
                setFaith(faith - 1);
            }
        }


    }


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


            {local ? <TouchableOpacity
                        style={ [styles.keyButton, styles.localButton] }
                        onPress={() => handlePress('local')}
                        >
                            <Text style={[styles.keyTitle]}>Local</Text>
                        </TouchableOpacity>
                    :   <TouchableOpacity
                            style={ [styles.keyButton, styles.localButton, styles.unButton] }
                            onPress={() => handlePress('local')}
                    >
                        <Text style={[styles.keyTitle, styles.unText]}>Local</Text>
                    </TouchableOpacity>
            }

            {global ? <TouchableOpacity
                        style={ [styles.keyButton, styles.globalButton] }
                        onPress={() => handlePress('global')}
                        >
                            <Text style={[styles.keyTitle]}>Global</Text>
                        </TouchableOpacity>
                    :   <TouchableOpacity
                            style={ [styles.keyButton, styles.globalButton, styles.unButton] }
                            onPress={() => handlePress('global')}
                    >
                        <Text style={[styles.keyTitle, styles.unText]}>Global</Text>
                    </TouchableOpacity>
            }

            </View>



            <View style={styles.buttonContainer}>

            {health ? <TouchableOpacity
                        style={ [styles.keyButton, styles.healthButton] }
                        onPress={() => handlePress('health')}
                        >
                            <Text style={[styles.keyTitle]}>Health</Text>
                        </TouchableOpacity>
                    :   <TouchableOpacity
                            style={ [styles.keyButton, styles.healthButton, styles.unButton] }
                            onPress={() => handlePress('health')}
                    >
                        <Text style={[styles.keyTitle, styles.unText]}>Health</Text>
                    </TouchableOpacity>
            }

            {stem ? <TouchableOpacity
                        style={ [styles.keyButton, styles.stemButton] }
                        onPress={() => handlePress('stem')}
                        >
                            <Text style={[styles.keyTitle]}>STEM</Text>
                        </TouchableOpacity>
                    :   <TouchableOpacity
                            style={ [styles.keyButton, styles.stemButton, styles.unButton] }
                            onPress={() => handlePress('stem')}
                    >
                        <Text style={[styles.keyTitle, styles.unText]}>STEM</Text>
                    </TouchableOpacity>
            }
            </View>




            <View style={styles.buttonContainer}>

            {arts ? <TouchableOpacity
                        style={ [styles.keyButton, styles.artsButton] }
                        onPress={() => handlePress('arts')}
                        >
                            <Text style={[styles.keyTitle, styles.artsTitle]}>Arts</Text>
                        </TouchableOpacity>
                    :   <TouchableOpacity
                            style={ [styles.keyButton, styles.artsButton, styles.unButton] }
                            onPress={() => handlePress('arts')}
                    >
                        <Text style={[styles.keyTitle, styles.artsTitle, styles.unText]}>Arts</Text>
                    </TouchableOpacity>
            }

            {faith ? <TouchableOpacity
                        style={ [styles.keyButton, styles.faithButton] }
                        onPress={() => handlePress('faith')}
                        >
                            <Text style={[styles.keyTitle, styles.faithTitle]}>Faith</Text>
                        </TouchableOpacity>
                    :   <TouchableOpacity
                            style={ [styles.keyButton, styles.faithButton, styles.unButton] }
                            onPress={() => handlePress('faith')}
                    >
                        <Text style={[styles.keyTitle, styles.faithTitle, styles.unText]}>Faith</Text>
                    </TouchableOpacity>
            }

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
