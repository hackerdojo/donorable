import React, {useState, useContext} from "react";
import {Text, View, Image, StyleSheet} from "react-native";
import FormTextInput from "../../components/FormTextInput";
import FormButton from "../../components/FormButton";
import KeyboardAvoidingView from "react-native/Libraries/Components/Keyboard/KeyboardAvoidingView";
import styleguide from "../../../styles/styleguide";
import {KeyboardAwareScrollView} from "react-native-keyboard-aware-scroll-view";
import theme from "../../../styles/theme.style";
import ImageMask from "../../components/ImageMask";
import {PrincipalContext} from "../../contexts/PrincipalContext";
import {HStack} from "react-native-stacks";


export default function QuickDonateScreen({navigation, route}) {
  const styles = StyleSheet.create(styleguide);
  const {params} = route.params;
//  navigation.setOptions({title:params.name})
  const {user, updateUser} = useContext(PrincipalContext);
  const [amount, setAmount] = useState(0);

  /* Return to previous screen */
  const onReturnPress = () => {
        navigation.goBack();
    }


  /* View for the QuickDonateScreen */
  return (
    <View style={styles.screenDetail}>
      <KeyboardAwareScrollView
        style={styles.fullWidth}
        keyboardShouldPersistTaps="always"
      >
        <HStack  spacing={10} alignment={""}>
          <ImageMask
            source={{uri:params.image}}
            size={100}
            radius={5}
            backgroundColor={theme.IMAGE_BACKGROUND_COLOR}
            borderColor={theme.IMAGE_BORDER_COLOR}
            borderWidth={theme.IMAGE_BORDER_WIDTH}
          />
          <View style={{flex:3}}>
            <Text style={styles.textCenteredP2}>{params.name}</Text>
            <Text numberOfLines={3}
                  style={[styles.textCenteredP1,{maxWidth:"90%"}]}
            >{params.description}</Text>
          </View>
        </HStack>
        <Text/>
          <View>
            <Text style={styles.textCenteredP1}>How much would</Text>
            <Text style={styles.textCenteredP1}>you like to donate to</Text>
            <Text style={styles.textCenteredP1}>{ params.name }?</Text>
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
            size={"large"}r
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
          <FormButton
            styles={styles}
            label={"$20"}
            size={"large"}
            buttonStyle={"Secondary"}
            width={"25%"}
            onPress={()=>setAmount("20")}
          />
        </View>
        <View style={styles.horizontalButtonContainer}>
          <FormButton
            styles={styles}
            label={"$50"}
            size={"large"}
            width={"25%"}
            buttonStyle={"Secondary"}
            onPress={()=>setAmount("50")}
          />
          <FormButton
            styles={styles}
            label={"$100"}
            size={"large"}
            width={"25%"}
            buttonStyle={"Secondary"}
            onPress={()=>setAmount("100")}
          />
          <FormButton
            styles={styles}
            label={"$200"}
            size={"large"}
            buttonStyle={"Secondary"}
            width={"25%"}
            onPress={()=>setAmount("200")}
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
