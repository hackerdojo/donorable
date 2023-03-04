import React, {useContext, useState} from "react";
import {useSelector, useDispatch} from 'react-redux';
import {Text, View, Modal, StyleSheet, TouchableOpacity, Pressable} from "react-native";
import {HStack, Spacer} from 'react-native-flex-layout';
import {ChatScreen, FormButton, ImageMask, PhotoGallery} from "../components";
import styleguide from "../../styles/styleguide";
import theme from "../../styles/theme.style";
import QuickDonateScreen from "./QuickDonateScreen";
import {KeyboardAwareScrollView} from "react-native-keyboard-aware-scroll-view";
import {addFavorite,removeFavorite} from "../features/principal/principalSlice";

export default function DetailScreen({navigation, route}) {
  const styles = StyleSheet.create(styleguide);
  const principal = useSelector(state=>state.principal);
  const dispatch = useDispatch();
  const [showDonatePanel, setShowDonatePanel] = useState(false);
  const [showChatPanel, setShowChatPanel] = useState(false);

  /* Get nonprofit name from HomeScreen */
  const {params} = route.params;

  // TODO:  This screen needs to be updated to use redux
  /* Save nonprofit to heart list */
  const handleHeartPress = () => {
    if (principal.favorites.includes(params.id)) {
      dispatch(removeFavorite(params.id));
    } else {
      dispatch(addFavorite(params.id));
    }
  };

  /* Go to MessageScreen */
  const onMessagePress = () => {
    navigation.navigate("Message");
  };

  /* Schedule a live chat via calendar **NEEDS TO BE IMPLEMENTED** */
  const onChatPress = () => {
    console.log('chat');
    setShowChatPanel(true);
  };

  /* Go to QuickDonateScreen */
  const onDonatePress = () => {
    navigation.navigate('QuickDonate', {params: params, title: "Donate"});
//    setShowDonatePanel(true);
  };


  /* View for the DetailScreen */
  return (
    <View style={styles.screenDetail}>
      <HStack spacing={10} alignment="center">
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
      { /*  <View>
        <Text style={styles.textCenteredP2}>Now, would you like to...</Text>
      </View>
*/}

      <HStack
        style={{paddingBottom: 8}}
        alignment="center"
        spacing={10}
        justify={"center"}
      >
        {/*  TODO: let's do messages later as this is a burden on the non-profit
        <FormButton
          styles={styles}
          size={"small"}
          width={"33%"}
          buttonStyle={"Tertiary"}
          onPress={onMessagePress}
          label={"Message"}/>
        <Spacer/>
        */}
        <View style={{flex:1}}>
          <FormButton
            styles={styles}
            size={"small"}
            buttonStyle={principal.favorites.includes(params.id) ? "secondary" : "tertiary"}
            onPress={handleHeartPress}
            label={principal.favorites.includes(params.id) ? "❤️ Favorited" : "🤍 Favorite"}/>
        </View>
        <View style={{flex:1}}>
          <FormButton
            styles={styles}
            size={"small"}
            buttonStyle={"Primary"}
            onPress={onDonatePress}
            label={"Donate now"}/>
        </View>
      </HStack>
      <KeyboardAwareScrollView enableAutomaticScroll={true}>
        <PhotoGallery photos={params.carousel}/>
        <Text
          numberOfLines={30}
          style={styles.description}
        >
          {params.about}
        </Text>
        <View style={{height: 200}}/>
      </KeyboardAwareScrollView>

      {/* TODO: Chat feature looks great, but it can wait
      <View
        style={{
          borderRadius: 100,
          alignItems: "center",
          borderWidth: 0,
          backgroundColor: '#008800',
          bottom: 20,
          right: 20,
          position: "absolute",
          width: 70,
          height: 70,
          paddingTop: 10
        }}
      >
        <TouchableOpacity
          onPress={onChatPress}
        >
          <MaterialCommunityIcons name={"chat"} size={50} color={"white"}/>
        </TouchableOpacity>
      </View>
*/}
      <Modal
        animationType="slide"
        transparent={true}
        visible={showChatPanel}
        onRequestClose={() => {
          setShowChatPanel(!showChatPanel);
        }}>
        <View style={[styles.modalView]}>

          <Text style={{fontSize: 24}}>{params.name}</Text>
          <ChatScreen chatee={params}/>
          <Pressable
            title="Hide Chat"
            onPress={() => setShowChatPanel(false)}
          >
            <View style={{
              marginTop: 10,
              marginBottom: 0,
              backgroundColor: "grey",
              width: 50,
              height: 5,
              borderRadius: 5
            }}/>
          </Pressable>

        </View>
      </Modal>

      <Modal
        animationType="slide"
        transparent={true}
        visible={showDonatePanel}
        onRequestClose={() => {
          setShowDonatePanel(!showDonatePanel);
        }}>

        <View style={styles.modalView}>
          <QuickDonateScreen/>
          <Pressable
            style={[styles.button, styles.buttonClose]}
            onPress={() => setShowDonatePanel(!showDonatePanel)}>
            <Text style={styles.textStyle}>Hide Modal</Text>
          </Pressable>
        </View>

      </Modal>
    </View>
  );
}
