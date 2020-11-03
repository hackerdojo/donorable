import React from "react";
import {
  Image,
  StatusBar,
  Text,
  View,
  SafeAreaView,
  Dimensions,
  TouchableOpacity,
} from "react-native";

import styles from "./styles";
//import { firebase } from "../../firebase/config";

import data from './data';
import Swiper from 'react-native-deck-swiper';
import { Transitioning, Transition } from 'react-native-reanimated';
import { MaterialCommunityIcons } from '@expo/vector-icons';

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
    <Text style={[styles.text, styles.heading]} numberOfLines={2}>
      {data[index].name}
    </Text>
    <Text style={[styles.text, styles.price]}>{data[index].price}</Text>
  </View>
);
/** ************************************* */



export default function HomeScreen(props) {
  
    
  /* Navigate to settings screen */
  const onSettingsPress = () => {
    props.navigation.navigate("Settings");
  };

  /** new **********************/
  const [index, setIndex] = React.useState(0);
  const onSwiped = () => {
    transitionRef.current.animateNextTransition();
    setIndex((index + 1) % data.length);
  };

    /* Navigate to message screen, NEED TO IMPLEMENT*/
    const onMessagePress = () => {
      props.navigation.navigate("Message");
    };

 /**************************** */


  /* View for the Home Screen */
  return (
    <SafeAreaView style={styles.container}>
      <MaterialCommunityIcons
      name='crop-square'
      size={width}
      style={{
        opacity: 0.05,
        transform: [{ rotate: '45deg' }, { scale: 1.6 }],
        position: 'absolute',
        left: -15,
        top: 140
      }}
      />
      <StatusBar hidden={true} />

      <View style={styles.swiperContainer}>
        {/* Profile Card Swiper */}
        <Swiper
        ref={swiperRef}
        cards={data}
        cardIndex={index}
        renderCard={card => <Card card={card} />}
        infinite
        backgroundColor={'transparent'}
        onSwiped={onSwiped}
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
                color: "red",
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
                color: "blue",
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
    <View style={styles.bottomContainer}>
      {/* Card Details or Description */}
      <Transitioning.View
        ref={transitionRef}
        transition={transition}
        style={styles.bottomContainerMeta}
      >
      <CardDetails index={index} />
      </Transitioning.View>

      {/* Bottom Container Buttons */}
      <View style={styles.bottomContainerButtons}>
        {/* X red button */}
        <MaterialCommunityIcons.Button
          name='close'
          size={90}
          backgroundColor='transparent'
          underlayColor='transparent'
          activeOpacity={0.3}
          color="red"
          onPress={() => swiperRef.current.swipeLeft()}
        />
        {/* O blue button */}
        <MaterialCommunityIcons.Button
          name='circle-outline'
          size={90}
          backgroundColor='transparent'
          underlayColor='transparent'
          activeOpacity={0.3}
          color="blue"
          onPress={() => swiperRef.current.swipeRight()}
        />
      </View>

      {/* Header Icon & Image */}
      <View style={styles.header}>
        {/* Setting Icon Press */}
        <TouchableOpacity
          style={styles.settingsIcon} onPress={onSettingsPress}>
          <Image source={require("../../../assets/settings-icon.png")} />
        </TouchableOpacity>
          {/* Message Icon on Press */}
        <TouchableOpacity
          style={styles.messageIcon} onPress={onMessagePress}>
          <Image source={require("../../../assets/message.png")} />
        </TouchableOpacity>
          {/* Donorable App Logo */}
        <Image
          style={styles.donorableTitle}
          source={require("../../../assets/donorable-title.png")}
        />
      </View>
    </View>
  </SafeAreaView>
);
}
