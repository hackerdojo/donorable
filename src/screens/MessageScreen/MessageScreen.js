import React, { useState } from "react";
import {Image, FlatList, Text, TouchableOpacity, View, StyleSheet} from "react-native";
import styleguide from "../../../styles/styleguide";
import {Circle} from "../../components/Circle";
//import { firebase } from "../../firebase/config";

import messagesdata from "./messasgesdata";


export default function MessageScreen(props) {

  const styles = StyleSheet.create(styleguide);
  /* Return to swiping */
  const onBackPress = () => {
    props.navigation.goBack();
  };


  /* Quick Donate option */
  /* to be implemented in "like screen" in future */
  const onCardPress = (to) => {
    navigate("QuickDonate",{param:to} );
  };



  /* View for the Message screen */
  return (
    <View style={[styles.screen, styles.messageScreen]}>
        <FlatList
          data = {messagesdata}
          keyExtractor={message => message.id}
          renderItem ={({item}) => (
            <View key={item.id} style={{width:"90%"}}>
              <TouchableOpacity
                onPress={(message) => onCardPress(item.from)}
              >
                <View style={styles.messageCard}>
                  <Circle
                    color={"blue"}
                    radius={10}
                    style={[styles.messageLight, styles.messageGap]}/>
                  <Image
                    source={{uri: item.avatar}}
                    style={[styles.messageImage, styles.messageGap]}
                    resizeMode={"contain"}
                  />
                <Text style={[styles.messagePreview, styles.messageGap]}>{item.text}</Text>
                </View>
              </TouchableOpacity>
              <Image style={styles.divBar} source={require("../../../assets/div-bar.png")}/>
            </View>
          )
          }
        />
    </View>
  );
}
/*




      <Image
        source={require("../../../assets/card_hackerdojo.png")}
        style={styles.smallCard}
      />
      <TouchableOpacity
        onPress={() => onCardPress()}
      >
        <Text style={styles.msgPreview}>Hi</Text>
      </TouchableOpacity>


        <Image style={styles.divBar} source={require("../../../assets/div-bar.png")}/>

        <Image
          source={require("../../../assets/card_handson.png")}
          style={styles.smallCard}
        />
        <Text style={styles.msgPreview}>Hey!</Text>

        <Image style={styles.divBar} source={require("../../../assets/div-bar.png")}/>


        <Image
          source={require("../../../assets/card_lacasa.png")}
          style={styles.smallCard}
        />
        <Text style={styles.msgPreview}>How's it going?</Text>

        <Image style={styles.divBar} source={require("../../../assets/div-bar.png")}/>

        <Image
          source={require("../../../assets/card_aspire.png")}
          style={styles.smallCard}
        />
        <Text style={styles.msgPreview}>What are the most...</Text>

        <Image style={styles.divBar} source={require("../../../assets/div-bar.png")}/>

        <Image
          source={require("../../../assets/card_stand.png")}
          style={styles.smallCard}
        />
        <Text style={styles.msgPreview}>How do you keep...</Text>

        <Image style={styles.divBar} source={require("../../../assets/div-bar.png")}/>


        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.backButton}
            onPress={() => onBackPress()}
          >
            <Text style={styles.buttonTitle}>Return</Text>
          </TouchableOpacity>
        </View>

 */
