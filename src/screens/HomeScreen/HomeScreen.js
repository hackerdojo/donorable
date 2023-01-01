import React from "react";
import {
  Image,
  StatusBar,
  Text,
  View,
  SafeAreaView,
  Dimensions,
  TouchableOpacity,
  StyleSheet
} from "react-native";

//import styleguide from "../../../styles/styleguide";
//const styles = StyleSheet.create(styleguide);
import styles from "./styles";

//import { firebase } from "../../firebase/config";

import data from './data';
import Swiper from 'react-native-deck-swiper';
import { Transitioning, Transition } from 'react-native-reanimated';
import Logo from "../../components/Logo";
import HR from "../../components/HR";


/* new **************************/
const { width } = Dimensions.get('window');
const stackSize = 4;
const ANIMATION_DURATION = 200;

const transition = (
  <Transition.Sequence>
    <Transition.Out
      type='slide-bottom'
      durationMs={ANIMATION_DURATION}
      interpolation='easeIn'
    />
    <Transition.Together>
      <Transition.In
        type='fade'
        durationMs={ANIMATION_DURATION}
        delayMs={ANIMATION_DURATION / 2}
      />
      <Transition.In
        type='slide-bottom'
        durationMs={ANIMATION_DURATION}
        delayMs={ANIMATION_DURATION / 2}
        interpolation='easeOut'
      />
    </Transition.Together>
  </Transition.Sequence>
);

const swiperRef = React.createRef();
const transitionRef = React.createRef();

const Card = ({ card }) => {
  return (
    <View style={styles.card}>
      <Image source={{ uri: card.image }} style={styles.cardImage} />
    </View>
  );
};

const CardDetails = ({ index }) => (
  <View key={data[index].id} style={{ alignItems: 'center' }}>
    <Text style={[styles.text, styles.name]} numberOfLines={2}>
      {data[index].name}
    </Text>
    <Text style={[styles.text, styles.description]}>{data[index].description}</Text>
  </View>
);
/** ************************************* */



export default function HomeScreen({ navigation }) {

  /* Navigate to settings screen */
  const onSettingsPress = () => {
    navigation.navigate("Settings");
  };

  /** new **********************/
  const [index, setIndex] = React.useState(0);
  const handleSwipedRight = () => {
    transitionRef.current.animateNextTransition();
    setIndex((index + 1) % data.length);
    navigation.navigate('Liked', { params:  data[index]});
  };

  const handleSwipedLeft = () => {
    transitionRef.current.animateNextTransition();
    setIndex((index + 1) % data.length);
  }

    /* Navigate to message screen*/
    const onMessagePress = () => {
      navigation.navigate("Messages");
    };

 /**************************** */

  /* View for the Home Screen */
  return (
    <SafeAreaView style={[styles.screen,styles.defaultBackgroundColor]}>

      <StatusBar hidden={false} />
      <View style={[
        styles.screen,
        styles.mainAreaForm,
        {flex:0.5, backgroundColor:"white"}]}>
        <View style={[
          styles.horizontalButtonContainer,
          styles.fullWidth,
          styles.spaceBetween,
          { flex: 1}
          ]}>
          <TouchableOpacity
            style={styles.settingsIcon} onPress={onSettingsPress}>
            <Image
              source={require("../../../assets/settings-icon.png")}
              style={styles.square25}
            />
          </TouchableOpacity>
          {/* Message Icon on Press */}
          <Logo
            source={require("../../../assets/DonorableHeartLogo.png")}
            width={"60%"}
            />
          <TouchableOpacity
            style={styles.messageIcon} onPress={onMessagePress}>
            <Image source={require("../../../assets/message.png")}
                   style={styles.square25}/>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.swiperContainer}>
        {/* Profile Card Swiper */}
        <Swiper
        ref={swiperRef}
        cards={data}
        cardIndex={index}
        renderCard={card => <Card card={card} />}
        infinite
        backgroundColor={'transparent'}
        onSwipedLeft={handleSwipedLeft}
        onSwipedRight={handleSwipedRight}
        onTapCard={() => swiperRef.current.swipeLeft()}
        cardVerticalMargin={50}
        stackSize={stackSize}
        stackScale={10}
        stackSeparation={14}
        animateOverlayLabelsOpacity
        animateCardOpacity
        disableTopSwipe
        disableBottomSwipe
        overlayLabels={{
          left: {
            title: 'NOPE',
            style: {
              label: {
                backgroundColor: "red",
                borderColor: "red",
                color: "white",
                borderWidth: 1,
                fontSize: 24
              },
              wrapper: {
                flexDirection: 'column',
                alignItems: 'flex-end',
                justifyContent: 'flex-start',
                marginTop: 20,
                marginLeft: -20
              }
            }
          },
          right: {
            title: 'LIKE',
            style: {
              label: {
                backgroundColor: "blue",
                borderColor: "blue",
                color: "white",
                borderWidth: 1,
                fontSize: 24
              },
              wrapper: {
                flexDirection: 'column',
                alignItems: 'flex-start',
                justifyContent: 'flex-start',
                marginTop: 20,
                marginLeft: 20
              }
            }
          }
        }}
      />
    </View>

    {/* Bottom Container Main */}
    <View style={styles.descriptionContainer}>
      {/* Card Details or Description */}
      <Transitioning.View
        ref={transitionRef}
        transition={transition}
        style={styles.bottomContainerMeta}
      >
        <CardDetails index={index} />
      </Transitioning.View>

    </View>


      {/* Bottom Container Buttons */}
      <View style={styles.bottomContainerButtons}>

        {/* Undo Button */}
        <Image style={styles.undoButton} source={require("../../../assets/undo.png")}/>

        {/* Map Button */}
        <Image style={styles.mapButton} source={require("../../../assets/map.png")}/>

        {/* Dislike button */}
        <TouchableOpacity
          onPress={() => swiperRef.current.swipeLeft()}>
          <Image style={styles.dislikeButton} source={require("../../../assets/dislike.png")}/>
        </TouchableOpacity>

        {/* Like button */}
        <TouchableOpacity
          onPress={() => swiperRef.current.swipeRight()}>
          <Image style={styles.likeButton} source={require("../../../assets/heart.png")}/>
        </TouchableOpacity>
      </View>



  </SafeAreaView>
);
}

