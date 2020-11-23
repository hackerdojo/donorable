import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import styles from "./styles";


export default function LikedScreen(props) {

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
        props.navigation.navigate("Message");
    };

    /* Schedule a live chat via calendar **NEEDS TO BE IMPLEMENTED** */
    const onChatPress = () => {
        console.log('chat');
    };

    /* Go to QuickDonateScreen */
    const onDonatePress = () => {
        props.navigation.navigate('QuickDonate');
    };

    /* Return to HomeScreen to keep swiping */
    const onSwipePress = () => {
            props.navigation.goBack();
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
            <Text></Text>
            <Text style={styles.header}>Now do you want to...</Text>
        </View>

  


            <View style={styles.buttonView}>
                <TouchableOpacity
                    onPress={() => onHeartPress()}
                    style={styles.purpleButton}
                >
                    <Text style={styles.purpleTitle}>Save to heart list</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.buttonView}>
                <TouchableOpacity
                    onPress={() => onLearnPress()}
                    style={styles.tealButton}
                >
                    <Text style={styles.tealTitle}>Learn more</Text>
                </TouchableOpacity>
            </View>



            <TouchableOpacity
                onPress={() => onMessagePress()}
                style={styles.purpleButton}
            >
                <Text style={styles.purpleTitle}>Send a message</Text>
            </TouchableOpacity>

            <TouchableOpacity
                onPress={() => onChatPress()}
                style={styles.tealButton}
            >
                <Text style={styles.tealTitle}>Schedule a live chat</Text>
            </TouchableOpacity>

            <TouchableOpacity
                onPress={() => onDonatePress()}
                style={styles.purpleButton}
            >
                <Text style={styles.purpleTitle}>Donate now</Text>
            </TouchableOpacity>

            <TouchableOpacity
                onPress={() => onSwipePress()}
                style={styles.tealButton}
            >
                <Text style={styles.tealTitle}>Keep swiping</Text>
            </TouchableOpacity>

      </KeyboardAwareScrollView>
    </View>
  );
}