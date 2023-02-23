import React, {useState, useContext} from "react";

import {Text, StyleSheet, View, FlatList, TouchableOpacity} from "react-native";
import TagButton from "../components/TagButton";
import KeyboardAvoidingView from "react-native/Libraries/Components/Keyboard/KeyboardAvoidingView";
import FormButton from "../components/FormButton";
import styleguide from "../../styles/styleguide";
import {PrincipalContext} from "../contexts/PrincipalContext";

import nteecodes from "../data/nteecodes.js";
import {KeyboardAwareScrollView} from "react-native-keyboard-aware-scroll-view";

export default function
  SearchForScreen({navigation, route}) {
  const {from} = route.params;
  const styles = StyleSheet.create(styleguide);
  /* Go to Welcome Screen, or return to Settings */
//  const availableTags = ["Local", "Global", "Health", "STEM", "Arts", "Faith"]

  const availableTags = Object
    .keys(nteecodes)
    .filter( key => key.length==1)
    .map( key => ({key: key, name: nteecodes[key]}));
  const {user, updateUser} = useContext(PrincipalContext);
  const [filterSet, setFilterSet] = useState(new Set(user.searchFilter));

  let searchDisable = false;

  const onDonePress = async () => {
    user["searchFilter"] = Array.from(filterSet);
    searchDisable = true;
    await updateUser(user);
    searchDisable = false;
    if (from === 'Settings') {
      navigation.goBack();
    } else {
      navigation.navigate("Welcome", {user});
    }
  };

  const handlePress = (tag) => {
    if (filterSet.has(tag)) {
      let myFilterSet = new Set(filterSet);
      myFilterSet.delete(tag);
      setFilterSet(myFilterSet);
    } else {
      let myFilterSet = new Set(filterSet);
      myFilterSet.add(tag);
      setFilterSet(myFilterSet);
    }
  }

  /* View for the KeywordScreen */
  return (
    <View style={[styles.screen, styles.screenFormMod]}>
      <Text/>
      <View>
        <Text style={styles.textCenteredP1}>Select your interests.</Text>
      </View>
      <FlatList
        style={[{flex:10},styles.fullWidth]}
        data={availableTags.sort((a,b)=> (a.name > b.name))}
        keyExtractor={item => item.key}
        keyboardShouldPersistTaps="always"
        renderItem={({item, index, separators}) => (
          <View key={item.key} style={styles.fullWidth}>
            <TouchableOpacity
              onPress={(message) => {}}
            >
              <TagButton
                key={item.key}
                label={item.name}
                styles={styles}
                position = {index === 0 ? "First" : index === availableTags.length - 1 ? "Last" : availableTags.length === 1 ? "Only" : "Middle"}
                size={"small"}
                tagState={filterSet.has(item.key)}
                onPress={ () => handlePress(item.key)}
                />
            </TouchableOpacity>

          </View>)
        }
      />
      <FormButton
        styles={styles}
        buttonStyle={"Secondary"}
        label={"Search"}
        onPress={onDonePress}
      />
    </View>
  );
}
