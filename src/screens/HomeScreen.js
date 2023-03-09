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
  Modal,
  ScrollView
} from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Swiper from 'react-native-deck-swiper';
import {Transitioning, Transition} from 'react-native-reanimated';
import {HStack, Spacer, VStack} from "react-native-flex-layout";
import {DetailsScreen} from "../screens";
import {HR, PhotoGallery} from "./../components";
import styleguide from "../../styles/styleguide";
import {addLiked, addDisliked} from "../features/principal/principalSlice";
import {incrementIndex } from  "../features/cardDeckSlice/cardDeckSlice";
import nteecodesicons from "../data/nteecodesicons";
import {distanceInMiles, userLocation} from "../hooks/useLocationTools";

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
  const miles = (card) => {
    if (card.latlon) {
      const location = userLocation();
      const distance = distanceInMiles(
        card.latlon[0],
        card.latlon[1],
        location.latitude,
        location.longitude
      )
      return ( Math.floor(distance*10)/10 + " miles")
    } else return "Location unknown";
  }

  const distance = miles(card);

  return (
    <View style={styles.card}>
      <Image source={{uri: card.image}} style={styles.cardImage}/>
      <Text style={[styles.textCenteredP2,styles.textBold]} numberOfLines={2}>{card.name}</Text>
      <Text style={[styles.textCenteredP1, styles.description]} numberOfLines={3}>{card.description}</Text>
      <HStack justify={"between"} style={styles.fullWidth}>
        <VStack key={card.id}  style={{view:3,alignItems: 'flex-start'}}>
          <Text/>
          <Text/>
          <HStack spacing={5} style={styles.alignItemsCenter}>
            <MaterialCommunityIcons name={"map-marker"} size={20} color={styles.inActiveTabColor.color}/>
            <Text style={styles.inActiveTabColor}>{distance}</Text>
          </HStack>
          {/*  TODO: Needs
                    <HStack spacing={5} style={styles.alignItemsCenter}>
            <MaterialCommunityIcons name={"account-clock"} size={20} color={styles.inActiveTabColor.color}/>
            <Text style={styles.inActiveTabColor}>Mural Painting, Talks, ...</Text>
          </HStack>
          TODO: Campaign goals
          <HStack spacing={5} style={styles.alignItemsCenter}>
            <MaterialCommunityIcons name={"currency-usd"} size={20} color={styles.inActiveTabColor.color}/>
            <Text style={styles.inActiveTabColor}>$100,000</Text>
          </HStack>
          */}
        </VStack>
        <HStack spacing={5} items={"end"}
                style={{view:1}}>
          { card.ntee && card.ntee.map( ntee => <MaterialCommunityIcons name={nteecodesicons[ntee]} color={styles.inActiveTabColor.color} size={18}/>)})}
        </HStack>
      </HStack>
    </View>
  );
};

const CardDetails = ({index}) => (
<View/>
);
/** ************************************* */


export default function HomeScreen({navigation}) {
  const [index, setIndex] = React.useState(0);
  const [searchText, setSearchText] = useState("");
  const principal = useSelector(state => state.principal);
  const cardDeck = useSelector( state => state.cardDeck);
  const dispatch = useDispatch();

  const handleTapCard = () => {
    navigation.navigate("Detail",{params: cardDeck.cards[cardDeck.index]})
  }

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
          useViewOverflow={true}
          ref={swiperRef}
          cards={cardDeck.cards}
          cardIndex={cardDeck.index}
          renderCard={card => <Card card={card}/>}
          infinite
          backgroundColor={'transparent'}
          onSwipedLeft={handleSwipedLeft}
          onSwipedRight={handleSwipedRight}
          onTapCard={handleTapCard}
          cardVerticalMargin={20}
          stackSize={stackSize}
          stackScale={10}
          stackSeparation={30}
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
            name={"chevron-left"} size={28} color={styles.inActiveTabColor.color}/>
          <MaterialCommunityIcons
            name={"thumb-down-outline"} size={28} color={styles.inActiveTabColor.color}/>
          </HStack>
        </TouchableOpacity>

        <HStack style={styles.searchBox}>
          <MaterialCommunityIcons
            name={"magnify"}
            size={30}
            color={styles.inActiveTabColor.color}
          />
          <Spacer/>
          <TextInput
            value={searchText} onChangeText={setSearchText}
            style={{view: 2, width:"70%"}}
            placeholder={"Search"}
          />
          <Spacer/>
          <TouchableOpacity
            onPress={()=> navigation.navigate("Search For",{from:"goback"})}
            >
            <MaterialCommunityIcons
              name={"filter-outline"}
              size={28}
              color={styles.inActiveTabColor.color}
            />
          </TouchableOpacity>
        </HStack>
        <TouchableOpacity
          onPress={showLiked}>
          <HStack>
          <MaterialCommunityIcons
            name={"thumb-up-outline"} size={28} color={styles.inActiveTabColor.color}/>
          <MaterialCommunityIcons
            name={"chevron-right"} size={28} color={styles.inActiveTabColor.color}/>
          </HStack>
        </TouchableOpacity>
      </HStack>
    </SafeAreaView>
  );
}

