import React from "react";
import {Text, View, Image, StyleSheet} from "react-native";
import heart from "../../../assets/heart.png";
import FormButton from "../../components/FormButton";
import styleguide from "../../../styles/styleguide";

export default function LikedScreen({navigation, route}) {

  const styles = StyleSheet.create(styleguide);

  /* Get nonprofit name from HomeScreen */
  const {params} = route.params;

  navigation.setOptions({title: params.name})

  /* Save nonprofit to heart list */
  const onHeartPress = () => {
    console.log('heart');
  };

  /* View LearnMoreScreen of nonprofit **NEEDS TO BE IMPLEMENTED** */
  const onLearnPress = () => {
    console.log('learn');
  };

  /* Go to MessageScreen */
  const onMessagePress = () => {
    navigation.navigate("Message");
  };

  /* Schedule a live chat via calendar **NEEDS TO BE IMPLEMENTED** */
  const onChatPress = () => {
    console.log('chat');
  };

  /* Go to QuickDonateScreen */
  const onDonatePress = (params) => {
    navigation.navigate('QuickDonate', {params: params});
  };

  /* Return to HomeScreen to keep swiping */
  const onSwipePress = () => {
    navigation.goBack();
  };


  /* View for the KeywordScreen */
  return (
    <View style={styles.screen}>

      <View style={styles.horizontalContainer}>
        <Image
          source={{uri: params.image}}
          resizeMode={"contain"}
          style={styles.square100}
        />
        <View>
          <Text style={styles.textCenteredP2}>You liked</Text>
          <Text style={styles.textCenteredP2}>{params.name}</Text>
        </View>
      </View>
      <View>
        <Text style={styles.textCenteredP2}>Now do you want to...</Text>
      </View>

      <FormButton
        styles={styles}
        buttonStyle={styles.buttonPrimary}
        width={"40%"}
        onPress={onHeartPress}
        label={"Save to favorites 🤍"}/>

      <FormButton
        styles={styles}
        buttonStyle={styles.buttonSecondary}
        onPress={onLearnPress}
        label={"Learn more"}/>

      <FormButton
        styles={styles}
        buttonStyle={styles.buttonPrimary}
        onPress={onChatPress}
        label={"Schedule a live chat"}/>

      <FormButton
        styles={styles}
        buttonStyle={styles.buttonSecondary}
        onPress={() => onDonatePress(params)}
        label={"Donate now"}/>

      <FormButton
        styles={styles}
        buttonStyle={styles.buttonPrimary}
        onPress={onSwipePress}
        label={"Keep swiping"}/>

    </View>
  );
}
