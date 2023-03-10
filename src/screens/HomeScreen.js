import React, {useState, useContext, useEffect} from "react";
import {useDispatch, useSelector} from 'react-redux';
import {
  Image,
  Button,
  StatusBar,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  StyleSheet,
  TextInput,
  ScrollView
} from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import {Transitioning, Transition} from 'react-native-reanimated';
import {HStack, Spacer, VStack} from "react-native-flex-layout";
import {HR, PhotoGallery, Swiper} from "./../components";
import styleguide from "../../styles/styleguide";
import {addLiked, addDisliked, principalSlice} from "../features/principal/principalSlice";
import nteecodesicons from "../data/nteecodesicons";
import {distanceInMiles, radiusToMiles} from "../hooks/useLocationTools";
import {setFilteredCards, setIndex} from "../features/cardDeckSlice/cardDeckSlice";

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
  const searchForLocation = useSelector(state => state.principal.searchForLocation)

  let milesText = "Location unknown";
  if (card && card.latlon) {
    const location = {latitude: searchForLocation[0], longitude: searchForLocation[1]};
    const distance = distanceInMiles(
      card.latlon[0],
      card.latlon[1],
      location.latitude,
      location.longitude
    )
    milesText = (Math.floor(distance * 10) / 10 + " miles")
  }

  return (
  <>
    {
      card
      &&
      <View key={card.id} style={styles.card} >
        <Image source={{uri: card.image}} style={styles.cardImage}/>
        <Text style={[styles.textCenteredP2, styles.textBold]} numberOfLines={2}>{card.name}</Text>
        <Text style={[styles.textCenteredP1, styles.description]} numberOfLines={3}>{card.description}</Text>
        <HStack justify={"between"} style={styles.fullWidth}>
          <VStack key={"vstack" + card.id} style={{view: 3, alignItems: 'flex-start'}}>
            <Text/>
            <Text/>
            <HStack spacing={5} style={styles.alignItemsCenter}>
              <MaterialCommunityIcons name={"map-marker"} size={20} color={styles.inActiveTabColor.color}/>
              <Text style={styles.inActiveTabColor}>{milesText}</Text>
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
                  style={{view: 1}}>
            {card.ntee && card.ntee.map(ntee => <MaterialCommunityIcons key={nteecodesicons[ntee]}
                                                                        name={nteecodesicons[ntee]}
                                                                        color={styles.inActiveTabColor.color}
                                                                        size={18}/>)})}
          </HStack>
        </HStack>
      </View>
    }
    {
      !card
      &&
      <View key={"cat-id"}>
        <MaterialCommunityIcons name={"cat"} size={40} />
        <Text>No Card Here</Text>
      </View>
    }
  </>
  )
};
/*  We put the details in the card.
const CardDetails = ({index}) => (
<View/>
);

 */
/** ************************************* */


export default function HomeScreen({navigation}) {

  const [searchText, setSearchText] = useState("");
  const principal = useSelector(state => state.principal);
  const cardDeck = useSelector( state => state.cardDeck);
  const dispatch = useDispatch();

  const cardFilter = card => (
      typeof card.latlon !== "undefined"
      &&
      distanceInMiles(
        card.latlon[0],
        card.latlon[1],
        principal.searchForLocation[0],
        principal.searchForLocation[1]
      )
      <
      radiusToMiles(principal.searchForRadius)
  )

  // update based on filters
  useEffect( () => {
    dispatch(setFilteredCards(cardDeck.cards.filter(cardFilter)));
  }, [principal.searchForRadius, cardDeck.cards] );

  const handleTapCard = () => {
    navigation.navigate("Detail",{params: cardDeck.filteredCards[(cardDeck.index)%cardDeck.filteredCards.length]})
  }

  const handleSwipedRight = (swipedCardIndex) => {
//    transitionRef.current.animateNextTransition();
    dispatch(setIndex(swipedCardIndex+1));
//    dispatch(addLiked(cardDeck.filteredCards[swipedCardIndex].id));
  };

  const handleSwipedLeft = (swipedCardIndex) => {
//    transitionRef.current.animateNextTransition();
    dispatch(setIndex(swipedCardIndex+1));
//    dispatch(addDisliked(cardDeck.filteredCards[swipedCardIndex].id));
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
      <View style={styles.cardDeckContainer}>
        {/* Profile Card Swiper */}
        {
          cardDeck.filteredCards.length > 0
          &&
          <Swiper
            useViewOverflow={true}
            ref={swiperRef}
            cards={cardDeck.filteredCards}
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
        }
        {cardDeck.filteredCards.length < 1 &&
        <View>
          <MaterialCommunityIcons name={"cat"} size={"60"} color={"grey"}/>
          <Text>No Organizations Found</Text>
          <Text>Please widen your search or reset your search</Text>
          <Button title={"reset search"}/>
        </View>
        }
      </View>
        {/* Bottom Container Main */}
        {/*
      <Spacer/>

      <View style={styles.descriptionContainer}>

        <Transitioning.View
          ref={transitionRef}
          transition={transition}
          style={styles.bottomContainerMeta}
        >
          <CardDetails index={index}/>
        </Transitioning.View>
      </View>
      */}
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
      <Text>{cardDeck.filteredCards.length} organizations found in {radiusToMiles(principal.searchForRadius)} miles. {cardDeck.index}</Text>
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

