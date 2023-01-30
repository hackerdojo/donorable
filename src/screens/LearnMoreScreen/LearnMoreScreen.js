import React, {useState, useContext} from "react";
import {Image, Text, StyleSheet, View} from "react-native";
import TagButton from "../../components/TagButton";
import {KeyboardAwareScrollView} from "react-native-keyboard-aware-scroll-view";
import FormButton from "../../components/FormButton";
import styleguide from "../../../styles/styleguide";
import firebase from "../../firebase/config";
import {PrincipalContext} from "../../contexts/PrincipalContext";
import {NativeText} from "react-native/Libraries/Text/TextNativeComponent";
import theme from "../../../styles/theme.style";


export default function LearnMoreScreen({navigation, route}) {

  const styles = StyleSheet.create(styleguide);
  /* Get nonprofit name from HomeScreen */
  const {params} = route.params;
  /* Go to Welcome Screen, or return to Settings */
  const availableTags = ["Local", "Global", "Health", "STEM", "Arts", "Faith"]
  const {user, updateUser} = useContext(PrincipalContext);

  const [filterSet, setFilterSet] = useState(new Set(user.searchFilter));

  let searchDisable = false;

  const onDonePress = () => {
  }

  return (


    <View style={[styles.screen,styles.screenFormMod]}>
      <KeyboardAwareScrollView
        style={styles.fullWidth}
        keyboardShouldPersistTaps="always"
      >

        <Image resizeMode={"contain"}
               style={styles.fullWidth}
               source={{uri: params.image}}
               borderColor={theme.PRIMARY_COLOR}
               size={100}
               radius={5}
               height={100}
               borderWidth={3}
               backgroundColor={"transparent"}
        />
        <View>
          <Text numberOfLines={10}>
            {params.about}
          </Text>
        </View>

        <FormButton
          styles={styles}
          buttonStyle={"Secondary"}
          label={"Done"}
          onPress={onDonePress}
        />
      </KeyboardAwareScrollView>
    </View>
  );
}
