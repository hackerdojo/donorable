import React, { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import styles from "./styles";
import TagButton from "../../components/TagButton";


export default function KeywordScreen({ navigation, route}) {


  /* Go to Welcome Screen, or return to Settings */
  const {params} = route.params || "";
  const onDonePress = () => {
    if (params === 'set') {
      navigation.goBack();
    } else {
      navigation.navigate("Welcome");
    }
  };


  const [filterSet, setFilterSet] = useState( new Set());

  /* Hooks for conditional button style rendering */
  const [local, setLocal] = useState(0);
  const [global, setGlobal] = useState(0);
  const [health, setHealth] = useState(0);
  const [stem, setStem] = useState(0);
  const [arts, setArts] = useState(0);
  const [faith, setFaith] = useState(0);

  /* Click handler for button rendering, more efficient
  solution likely needed  */
  const handlePress = (tag) => {
    if (filterSet.has(tag)) {
      let myFilterSet = new Set(filterSet);
      myFilterSet.delete(tag);
      setFilterSet(new Set(myFilterSet));
    }
    else {
      let myFilterSet = new Set(filterSet);
      myFilterSet.add(tag);
      setFilterSet(new Set(myFilterSet));
    }
  }


  /* View for the KeywordScreen */
  return (
    <View style={styles.container}>

      <KeyboardAwareScrollView
        style={{flex: 1, width: "100%"}}
        keyboardShouldPersistTaps="always"
      >
        <Text>{filterSet.entries()}</Text>
        <View style={styles.headView}>
          <Text style={styles.header}>What do you</Text>
          <Text style={styles.header}>care about?</Text>
        </View>

        <View style={styles.buttonRow}
        >

          <View style={styles.buttonContainer}>

            <TagButton
              label={"Faith2"}
              styles={styles}
              tagState={false}
            />
            <TagButton
              label={"Faith3"}
              styles={styles}
              tagState={filterSet.has("Faith3")}
              tagState={true}
              onPress={()=>handlePress("Faith3")}
            />

            {local ? <TouchableOpacity
                style={[styles.keyButton, styles.localButton]}
                onPress={() => handlePress('local')}
              >
                <Text style={[styles.keyTitle]}>Local</Text>
              </TouchableOpacity>
              : <TouchableOpacity
                style={[styles.keyButton, styles.localButton, styles.unButton]}
                onPress={() => handlePress('local')}
              >
                <Text style={[styles.keyTitle, styles.unText]}>Local</Text>
              </TouchableOpacity>
            }

            {global ? <TouchableOpacity
                style={[styles.keyButton, styles.globalButton]}
                onPress={() => handlePress('global')}
              >
                <Text style={[styles.keyTitle]}>Global</Text>
              </TouchableOpacity>
              : <TouchableOpacity
                style={[styles.keyButton, styles.globalButton, styles.unButton]}
                onPress={() => handlePress('global')}
              >
                <Text style={[styles.keyTitle, styles.unText]}>Global</Text>
              </TouchableOpacity>
            }

          </View>


          <View style={styles.buttonContainer}>

            {health ? <TouchableOpacity
                style={[styles.keyButton, styles.healthButton]}
                onPress={() => handlePress('health')}
              >
                <Text style={[styles.keyTitle]}>Health</Text>
              </TouchableOpacity>
              : <TouchableOpacity
                style={[styles.keyButton, styles.healthButton, styles.unButton]}
                onPress={() => handlePress('health')}
              >
                <Text style={[styles.keyTitle, styles.unText]}>Health</Text>
              </TouchableOpacity>
            }

            {stem ? <TouchableOpacity
                style={[styles.keyButton, styles.stemButton]}
                onPress={() => handlePress('stem')}
              >
                <Text style={[styles.keyTitle]}>STEM</Text>
              </TouchableOpacity>
              : <TouchableOpacity
                style={[styles.keyButton, styles.stemButton, styles.unButton]}
                onPress={() => handlePress('stem')}
              >
                <Text style={[styles.keyTitle, styles.unText]}>STEM</Text>
              </TouchableOpacity>
            }
          </View>


          <View style={styles.buttonContainer}>

            {arts ? <TouchableOpacity
                style={[styles.keyButton, styles.artsButton]}
                onPress={() => handlePress('arts')}
              >
                <Text style={[styles.keyTitle, styles.artsTitle]}>Arts</Text>
              </TouchableOpacity>
              : <TouchableOpacity
                style={[styles.keyButton, styles.artsButton, styles.unButton]}
                onPress={() => handlePress('arts')}
              >
                <Text style={[styles.keyTitle, styles.artsTitle, styles.unText]}>Arts</Text>
              </TouchableOpacity>
            }

            {faith ? <TouchableOpacity
                style={[styles.keyButton, styles.faithButton]}
                onPress={() => handlePress('faith')}
              >
                <Text style={[styles.keyTitle, styles.faithTitle]}>Faith</Text>
              </TouchableOpacity>
              : <TouchableOpacity
                style={[styles.keyButton, styles.faithButton, styles.unButton]}
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
