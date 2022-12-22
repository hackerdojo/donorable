import React, {useState} from "react";
import {Text, View, Image} from "react-native";
import FormTextInput from "../../components/FormTextInput";
import FormButton from "../../components/FormButton";
import KeyboardAvoidingView from "react-native/Libraries/Components/Keyboard/KeyboardAvoidingView";
import styleguide from "../../../styles/styleguide";


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
    <View style={{...styles.screen}}>
      <KeyboardAvoidingView
        style={styles.containerKeyboardAvoidingView}
        keyboardShouldPersistTaps="always"
      >
        <View style={styles.horizontalContainer}>
          <Image
            source={{ uri:params.image }}
            resizeMode={"contain"}
            style={styles.image100}
          />
          <View>
            <Text style={styles.textCenteredP2}>How much would</Text>
            <Text style={styles.textCenteredP2}>like to donate?</Text>
            <Text style={styles.textCenteredP2}>{ params.name }</Text>
          </View>
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
            buttonStyle={{...styles.buttonSecondary, width:"25%"}}
            onPress={()=>setAmount("5")}
          />
          <FormButton
            styles={styles}
            label={"$10"}
            buttonStyle={{...styles.buttonSecondary, width:"25%"}}
            width={"25%"}
            onPress={()=>setAmount("10")}
          />
        </View>
        <View style={styles.horizontalButtonContainer}>
          <FormButton
            styles={styles}
            label={"$15"}
            buttonStyle={{...styles.buttonSecondary, width:"25%"}}
            onPress={()=>setAmount("15")}
          />
          <FormButton
            styles={styles}
            label={"$20"}
            buttonStyle={{...styles.buttonSecondary, width:"25%"}}
            onPress={()=>setAmount("20")}
          />

        </View>
        <FormButton
          styles={styles}
          buttonStyle={styles.buttonPrimary}
          onPress={onReturnPress}
          label={"Donate"}
          ></FormButton>
        <Text> </Text>

      </KeyboardAvoidingView>
    </View>
  );
}
