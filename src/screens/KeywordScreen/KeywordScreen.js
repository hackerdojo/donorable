import React, {useState, useContext} from "react";
import { Text, StyleSheet, View} from "react-native";
import TagButton from "../../components/TagButton";
import KeyboardAvoidingView from "react-native/Libraries/Components/Keyboard/KeyboardAvoidingView";
import FormButton from "../../components/FormButton";
import styleguide from "../../../styles/styleguide";
import {PrincipalContext} from "../../contexts/PrincipalContext";

export default function KeywordScreen({navigation, route}) {
  const {from} = route.params;
  const styles = StyleSheet.create(styleguide);
  /* Go to Welcome Screen, or return to Settings */
  const availableTags = ["Local", "Global", "Health", "STEM", "Arts", "Faith"]
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
      <KeyboardAvoidingView
        style={styles.mainAreaForm}
        keyboardShouldPersistTaps="always"
      >
        <View>
          <Text style={styles.textCenteredP2}>What do you care about?</Text>
        </View>
        <View style={styles.tagContainer}>
          {availableTags.map((tag) =>
            <TagButton
              key={tag}
              label={tag}
              styles={styles}
              tagState={filterSet.has(tag)}
              onPress={() => handlePress(tag)}
            />
          )}
        </View>
        <FormButton
          styles={styles}
          buttonStyle={"Secondary"}
          label={"Search"}
          onPress={onDonePress}
        />
      </KeyboardAvoidingView>
    </View>
  );
}
