import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import styles from "./styles";


export default function LikedScreen() {

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
        console.log('message');
    };

    /* Schedule a live chat via calendar **NEEDS TO BE IMPLEMENTED** */
    const onChatPress = () => {
        console.log('chat');
    };

    /* Go to QuickDonateScreen */
    const onDonatePress = () => {
        console.log('donate');
    };

    /* Return to HomeScreen to keep swiping */
    const onSwipePress = () => {
            console.log('swipe');
        };


  /* View for the KeywordScreen */
  return (
    <View style={styles.container}>
      <KeyboardAwareScrollView
        style={{ flex: 1, width: "100%" }}
        keyboardShouldPersistTaps="always"
      >

        <View style={styles.headView}>
            <Text style={styles.header}>You liked</Text>
            <Text style={styles.header}>Hacker Dojo!</Text>
            <Text style={styles.header}>Now do you want to...</Text>
        </View>

        <View 
        >

            <View >

            <TouchableOpacity
                onPress={() => onHeartPress()}
            >
                <Text>Save to heart list</Text>
            </TouchableOpacity>

            <TouchableOpacity
                onPress={() => onLearnPress()}
            >
                <Text >Learn more</Text>
            </TouchableOpacity>

            <TouchableOpacity
                onPress={() => onMessagePress()}
            >
                <Text>Send a message</Text>
            </TouchableOpacity>

            <TouchableOpacity
                onPress={() => onChatPress()}
            >
                <Text >Schedule a live chat</Text>
            </TouchableOpacity>

            <TouchableOpacity
                onPress={() => onDonatePress()}
            >
                <Text>Donate now</Text>
            </TouchableOpacity>

            <TouchableOpacity
                onPress={() => onSwipePress()}
            >
                <Text>Keep swiping</Text>
            </TouchableOpacity>

            </View>
        </View>
      </KeyboardAwareScrollView>
    </View>
  );
}