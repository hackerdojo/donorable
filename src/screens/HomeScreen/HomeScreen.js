import React, {useState} from "react";
import {
  Image,
  StatusBar,
  Text,
  View,
  SafeAreaView,
  Dimensions,
  TouchableOpacity,
  StyleSheet,
  Modal
} from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Swiper from 'react-native-deck-swiper';
import {Transitioning, Transition} from 'react-native-reanimated';
//import { firebase } from "../../firebase/config";
import {MapModal} from "../../modals";
import styleguide from "../../../styles/styleguide";
import theme from "../../../styles/theme.style";
import data from './data';

/* new **************************/
const {width} = Dimensions.get('window');
const stackSize = 4;
const ANIMATION_DURATION = 200;

const styles = StyleSheet.create(styleguide);

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

const Card = ({card}) => {
  return (
    <View style={styles.card}>
      <Image source={{uri: card.image}} style={styles.cardImage}/>
    </View>
  );
};

const CardDetails = ({index}) => (
  <View key={data[index].id} style={{alignItems: 'center'}}>
    <Text style={[styles.name,styles.textBold]} numberOfLines={2}>{data[index].name}</Text>
    <Text style={[styles.text, styles.description]} numberOfLines={3}>{data[index].description}</Text>
  </View>
);
/** ************************************* */


export default function HomeScreen({navigation}) {
  const [index, setIndex] = React.useState(0);
  const [mapModalVisible, setMapModalVisible] = useState(false);
  const handleSwipedRight = () => {
    transitionRef.current.animateNextTransition();
    setIndex((index + 1) % data.length);
    navigation.navigate('Liked', {params: data[index], title: data[index].name});
  };

  const handleSwipedLeft = () => {
    transitionRef.current.animateNextTransition();
    setIndex((index + 1) % data.length);
  }

  /* View for the Home Screen */
  return (
    <SafeAreaView style={[styles.screen, styles.defaultBackgroundColor]}>
      <StatusBar hidden={false}/>
      <View style={styles.swiperContainer}>
        {/* Profile Card Swiper */}
        <Swiper
          ref={swiperRef}
          cards={data}
          cardIndex={index}
          renderCard={card => <Card card={card}/>}
          infinite
          backgroundColor={'transparent'}
          onSwipedLeft={handleSwipedLeft}
          onSwipedRight={handleSwipedRight}
          onTapCard={() => swiperRef.current.swipeLeft()}
          cardVerticalMargin={20}
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
          <CardDetails index={index}/>
        </Transitioning.View>
      </View>
      {/* Bottom Container Buttons */}
      <View style={styles.bottomContainerButtons}>

        {/* Undo Button */}
        <MaterialCommunityIcons
          style={styles.iconButton}
          name={"undo"} size={48} color={styles.iconButtonColor.color}/>
        {/* Map Button */}
        <TouchableOpacity
          onPress={() => setMapModalVisible(true)}>
          <MaterialCommunityIcons

            style={styles.iconButton}
            name={"map-marker-outline"} size={48} color={styles.iconButtonColor.color}/>
        </TouchableOpacity>

        {/* Dislike button */}
        <TouchableOpacity
          onPress={() => swiperRef.current.swipeLeft()}>
          <MaterialCommunityIcons
            style={styles.iconButton}
            name={"thumb-down-outline"} size={48} color={styles.iconButtonColor.color}/>
        </TouchableOpacity>
        {/* Like button */}
        <TouchableOpacity
          onPress={() => swiperRef.current.swipeRight()}>
          <MaterialCommunityIcons
            style={styles.iconButton}
            name={"thumb-up-outline"} size={48} color={styles.iconButtonColor.color}/>
        </TouchableOpacity>
      </View>
      <MapModal
        isPresented={mapModalVisible}
        onRequestToHide={() => setMapModalVisible(false)}
      />
    </SafeAreaView>
  );
}

