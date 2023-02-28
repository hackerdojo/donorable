import React, {useState, useContext} from "react";
import {useDispatch, useSelector} from 'react-redux';
import {
  Image,
  StatusBar,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  StyleSheet,
  TextInput,
  Modal
} from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Swiper from 'react-native-deck-swiper';
import {Transitioning, Transition} from 'react-native-reanimated';
import {HStack, Spacer, VStack} from "react-native-flex-layout";

import {HR} from "./../components";
import {MapModal} from "../modals";
import styleguide from "../../styles/styleguide";

import {addLiked, addDisliked} from "../features/principal/principalSlice";
import {incrementIndex } from  "../features/cardDeckSlice/cardDeckSlice";

/* new **************************/
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
      <HStack spacing={5}>
        <Spacer/>
        <MaterialCommunityIcons name={"paw"} size={20}/>)}
      </HStack>
      <Image source={{uri: card.image}} style={styles.cardImage}/>
      <Text style={[styles.textCenteredP2,styles.textBold]} numberOfLines={2}>{card.name}</Text>
      <Text style={[styles.textCenteredP1, styles.description]} numberOfLines={3}>{card.description}</Text>
      <Text/>
      <HStack spacing={5}>
        <MaterialCommunityIcons name={"hammer-wrench"} size={20}/><MaterialCommunityIcons size={20} name={"account-clock"}/><MaterialCommunityIcons size={20} name={"currency-usd"}/>
      </HStack>
      <VStack key={card.id}  style={{alignItems: 'flex-start'}}>
        <Text/>
        <Text/>
        <HStack spacing={5} style={styles.alignItemsCenter}>
          <MaterialCommunityIcons name={"map-marker"} size={20}/>
          <Text>2.5 miles</Text>
        </HStack>
        <HStack spacing={5} style={styles.alignItemsCenter}>
          <MaterialCommunityIcons name={"account-clock"} size={20}/>
          <Text>Mural Painting, Talks, ...</Text>
        </HStack>
        <HStack spacing={5} style={styles.alignItemsCenter}>
          <MaterialCommunityIcons name={"currency-usd"} size={20}/>
          <Text>$100,000</Text>
        </HStack>
        <HStack spacing={5}>
          <MaterialCommunityIcons name={"dots-horizontal"} size={20}/>
        </HStack>
      </VStack>
    </View>
  );
};

const CardDetails = ({index}) => (
<View/>
);
/** ************************************* */


export default function HomeScreen({navigation}) {
  const [index, setIndex] = React.useState(0);
  const [mapModalVisible, setMapModalVisible] = useState(false);
  const [searchText, setSearchText] = useState("");
  const principal = useSelector(state => state.principal);
  const cardDeck = useSelector( state => state.cardDeck);
  const dispatch = useDispatch();

  const handleSwipedRight = () => {
    transitionRef.current.animateNextTransition();
    const currentIndex = cardDeck.index;
    dispatch(incrementIndex());
    dispatch(addLiked(cardDeck.cards[currentIndex].id));
  };

  const handleSwipedLeft = () => {
    transitionRef.current.animateNextTransition();
    dispatch(addDisliked(cardDeck.cards[cardDeck.index].id));
    dispatch(incrementIndex());
  };

  const showLiked = () => {
    navigation.navigate("Liked",
      {
        data: (principal.liked || []).map((id, index, data) => (
            cardDeck.indexedCards[id]
          )
        ),
        addToListVerb: "liked"
      });
  }

  const showDisliked = () => {
    navigation.navigate("Disliked",
      {
        data: (principal.disliked || []).map((id, index, data) => (
          cardDeck.indexedCards[id]
          )
        ),
        addToListVerb: "disliked"
      });
  }

  /* View for the Home Screen */
  return  (
    <SafeAreaView style={[styles.screen, styles.defaultBackgroundColor]}>
      <StatusBar hidden={false}/>
      <View style={styles.swiperContainer}>
        {/* Profile Card Swiper */}
        <Swiper
          ref={swiperRef}
          cards={cardDeck.cards}
          cardIndex={cardDeck.index}
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

      <Spacer/>

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

      {/*
      <View style={styles.bottomContainerButtons}>


        <MaterialCommunityIcons
          style={styles.iconButton}
          name={"undo"} size={48} color={styles.iconButtonColor.color}/>

        <TouchableOpacity
          onPress={() => setMapModalVisible(true)}>
          <MaterialCommunityIcons

            style={styles.iconButton}
            name={"map-marker-outline"} size={48} color={styles.iconButtonColor.color}/>
        </TouchableOpacity>


        <TouchableOpacity
          onPress={() => swiperRef.current.swipeLeft()}>
          <MaterialCommunityIcons
            style={styles.iconButton}
            name={"thumb-down-outline"} size={48} color={styles.iconButtonColor.color}/>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => swiperRef.current.swipeRight()}>
          <MaterialCommunityIcons
            style={styles.iconButton}
            name={"thumb-up-outline"} size={48} color={styles.iconButtonColor.color}/>
        </TouchableOpacity>
      </View>
      */}
      <Spacer/>

      <HR width={"100%"}/>
      <HStack spacing={5} style={styles.bottomContainerButtons} >
        <TouchableOpacity
          onPress={showDisliked}>
          <HStack>
          <MaterialCommunityIcons
            name={"chevron-left"} size={30} color={styles.inActiveTabColor}/>
          <MaterialCommunityIcons
            name={"thumb-down-outline"} size={30} color={styles.inActiveTabColor}/>
          </HStack>
        </TouchableOpacity>

        <HStack style={styles.searchBox}>
          <MaterialCommunityIcons
            name={"magnify"}
            size={30}
            color={"#333"}
          />
          <Spacer/>
          <TextInput
            value={searchText} onChangeText={setSearchText}
            style={{view: 2, width:"70%"}}
            placeholder={"Search"}
          />
          <Spacer/>
          <MaterialCommunityIcons
            name={"filter-outline"}
            size={30}
            color={"#333"}
          />
        </HStack>
        <TouchableOpacity
          onPress={showLiked}>
          <HStack>
          <MaterialCommunityIcons
            name={"thumb-up-outline"} size={30} color={styles.inActiveTabColor}/>
          <MaterialCommunityIcons
            name={"chevron-right"} size={30} color={styles.inActiveTabColor}/>
          </HStack>
        </TouchableOpacity>
      </HStack>
      <MapModal
        isPresented={mapModalVisible}
        onRequestToHide={() => setMapModalVisible(false)}
      />
    </SafeAreaView>
  );
}
