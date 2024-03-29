import React, {useState, useContext} from "react";
import {Text, View, Image, StyleSheet} from "react-native";
import {HStack} from "react-native-flex-layout";
import FormTextInput from "../components/FormTextInput";
import FormButton from "../components/FormButton";
import styleguide from "../../styles/styleguide";
import theme from "../../styles/theme.style";
import ImageMask from "../components/ImageMask";
import {PrincipalContext} from "../contexts/PrincipalContext";


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
        <HStack spacing={10} alignment={"center"}>
          <ImageMask
            source={{uri: params.image}}
            size={100}
            radius={5}
            backgroundColor={theme.IMAGE_BACKGROUND_COLOR}
            borderColor={theme.IMAGE_BORDER_COLOR}
            borderWidth={theme.IMAGE_BORDER_WIDTH}
          />
          <View style={{flex: 3, alignItems:"center"}}>
            <Text style={[styles.textCenteredP1, styles.textBold]}>{params.name}</Text>
            <Text numberOfLines={3}
                  style={[styles.textCenteredP0, {maxWidth: "90%"}]}
            >{params.description}</Text>
          </View>
        </HStack>
      <Text/>
      <Text/>
      <View style={{padding: 10}}>
        <View>
          <Text style={[styles.textLeft, styles.textP0]} numberOfLines={3}>How much would you like to donate
            to {params.name}?</Text>
        </View>
        <Text/>
        <FormTextInput
          styles={styles}
          style={styles.inputNumeric}
          text={amount}
          onChangeText={setAmount}
          label={"Amount $USD"}
        />
        <Text/>
        <View style={styles.horizontalButtonContainer}>
          <FormButton
            styles={styles}
            label={"$5"}
            width={"25%"}
            size={"medium"}
            buttonStyle={"Secondary"}
            onPress={() => setAmount("5")}
          />
          <FormButton
            styles={styles}
            label={"$10"}
            size={"medium"}
            buttonStyle={"Secondary"}
            width={"25%"}
            onPress={() => setAmount("10")}
          />
          <FormButton
            styles={styles}
            label={"$20"}
            size={"medium"}
            buttonStyle={"Secondary"}
            width={"25%"}
            onPress={() => setAmount("20")}
          />
        </View>
        <View style={styles.horizontalButtonContainer}>
          <FormButton
            styles={styles}
            label={"$50"}
            size={"medium"}
            width={"25%"}
            buttonStyle={"Secondary"}
            onPress={() => setAmount("50")}
          />
          <FormButton
            styles={styles}
            label={"$100"}
            size={"medium"}
            width={"25%"}
            buttonStyle={"Secondary"}
            onPress={() => setAmount("100")}
          />
          <FormButton
            styles={styles}
            label={"$200"}
            size={"medium"}
            buttonStyle={"Secondary"}
            width={"25%"}
            onPress={() => setAmount("200")}
          />
        </View>
        <View style={styles.horizontalButtonContainer}>
          <FormButton
            styles={styles}
            buttonStyle={"Primary"}
            onPress={onReturnPress}
            label={"Donate"}
          ></FormButton>
        </View>
      </View>
      <Text> </Text>
    </View>
  );
}
