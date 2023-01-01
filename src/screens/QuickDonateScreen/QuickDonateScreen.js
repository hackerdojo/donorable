import React, {useState} from "react";
import {Text, View, Image, StyleSheet} from "react-native";
import FormTextInput from "../../components/FormTextInput";
import FormButton from "../../components/FormButton";
import KeyboardAvoidingView from "react-native/Libraries/Components/Keyboard/KeyboardAvoidingView";
import styleguide from "../../../styles/styleguide";
import {KeyboardAwareScrollView} from "react-native-keyboard-aware-scroll-view";
import theme from "../../../styles/theme.style";
import ImageMask from "../../components/ImageMask";


export default function QuickDonateScreen({navigation, route}) {
  const styles = StyleSheet.create(styleguide);
  const {params} = route.params;
  navigation.setOptions({title:params.name})

  const [amount, setAmount] = useState(0);

  /* Return to previous screen */
  const onReturnPress = () => {
        navigation.goBack();
    }


  /* View for the QuickDonateScreen */
  return (
    <View style={styles.screen}>
      <KeyboardAwareScrollView
        style={styles.fullWidth}
        keyboardShouldPersistTaps="always"
      >

          <Image resizeMode={"contain"}
                 style={styles.fullWidth}
            source={{uri:params.image}}
            borderColor={theme.PRIMARY_COLOR}
            size={100}
            radius={5}
            height={100}
            borderWidth={3}
            backgroundColor={"transparent"}
          />
        <Text/>
          <View>
            <Text style={styles.textCenteredP2}>How much would</Text>
            <Text style={styles.textCenteredP2}>you like to donate to</Text>
            <Text style={styles.textCenteredP2}>{ params.name }?</Text>
          </View>

        <FormTextInput
          styles={styles}
          text={amount}
          onChangeText={setAmount}
          label={"Amount $USD"}
          />

        <View style={styles.horizontalButtonContainer}>

          <FormButton
            styles={styles}
            label={"$5"}
            width={"25%"}
            size={"large"}
            buttonStyle={"Secondary"}
            onPress={()=>setAmount("5")}
          />
          <FormButton
            styles={styles}
            label={"$10"}
            size={"large"}
            buttonStyle={"Secondary"}
            width={"25%"}
            onPress={()=>setAmount("10")}
          />
        </View>
        <View style={styles.horizontalButtonContainer}>
          <FormButton
            styles={styles}
            label={"$15"}
            size={"large"}
            width={"25%"}
            buttonStyle={"Secondary"}
            onPress={()=>setAmount("15")}
          />
          <FormButton
            styles={styles}
            label={"$20"}
            size={"large"}
            width={"25%"}
            buttonStyle={"Secondary"}
            onPress={()=>setAmount("20")}
          />

        </View>
        <FormButton
          styles={styles}
          buttonStyle={"Primary"}
          onPress={onReturnPress}
          label={"Donate"}
          ></FormButton>
        <Text> </Text>

      </KeyboardAwareScrollView>
    </View>
  );
}
