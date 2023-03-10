import React, {useState, useEffect} from "react";
import {useSelector, useDispatch} from "react-redux";
import {Button, Text, StyleSheet, View, FlatList, TouchableOpacity} from "react-native";
import {TabBar, SearchCategoryEntry, NearbyMap, Map} from "../components";
import {updateProfile} from "../features/principal/principalSlice";
import styleguide from "../../styles/styleguide";
import nteecodes from "../data/nteecodes";
import nteecodesicons from "../data/nteecodesicons";


export default function SearchForScreen({navigation, route}) {
  const styles = StyleSheet.create(styleguide);
  const principal = useSelector(state=> state.principal)
  const cardDeck = useSelector(state => state.cardDeck)
  const dispatch = useDispatch();

  const availableTags = Object
    .keys(nteecodes)
    .filter( key => key.length==1 )  // Grab the top level entries
    .map( key => ({key: key, name: nteecodes[key], icon: nteecodesicons[key]}));
  const listData = availableTags.sort((a, b) => (a.name > b.name));
  const [selectedTab, setSelectedTab] = useState("interests");

  const [searchForInterests, setSearchForInterests] = useState(new Set(principal.searchForInterests));
  const [searchForNeeds, setSearchForNeeds] = useState(new Set(principal.searchForNeeds));
  const [searchForGoals, setSearchForGoals] = useState(new Set(principal.searchForGoals));
  const [searchForLocation, setSearchForLocation] = useState(principal.searchForLocation );
  const [searchForRadius, setSearchForRadius] = useState(principal.searchForRadius );

  useEffect( () => {
    navigation.setOptions({
      headerRight: () => <Button
        title="Done"
        onPress={() => {
          dispatch(
            updateProfile(
              {
                searchForInterests: Array.from(searchForInterests),
//                searchForNeeds: Array.from(searchForNeeds),
//                searchForGoals: Array.from(searchForGoals),
                searchForLocation: searchForLocation,
                searchForRadius: searchForRadius
              }
            ));
          navigation.goBack();
        }}
      />
    })
  });

  const handleTabChange = (selection) => {
    setSelectedTab(selection);
  }

  const handleInterestPress = (tag) => {
    if (searchForInterests.has(tag)) {
      let myFilterSet = new Set(searchForInterests);
      myFilterSet.delete(tag);
      setSearchForInterests(myFilterSet);
    } else {
      let myFilterSet = new Set(searchForInterests);
      myFilterSet.add(tag);
      setSearchForInterests(myFilterSet);
    }
  }

  /* View for the KeywordScreen */
  return (
      <View style={styles.listScreen}>
        <Text/>
        <TabBar
          styles={styles}
          onChange={handleTabChange}
          selections={{
            interests : "Interests",
       //     needs: "Needs",
       //     goals: "Goals",
            location: "Location"
          }}
        />
        { selectedTab == "interests" &&
        <>
          <Text/>
          <FlatList
            style={{width: "100%", borderRadius: 10}}
            data={listData}
            keyExtractor={item => item.key}
            keyboardShouldPersistTaps="always"
            renderItem={({item, index, separators}) => (
              <TouchableOpacity
                onPress={(message) => {
                }}
              >
                <SearchCategoryEntry
                  key={item.key}
                  label={item.name}
                  icon={item.icon}
                  styles={styles}
                  position={index === 0 ? "First" : index === availableTags.length - 1 ? "Last" : availableTags.length === 1 ? "Only" : "Middle"}
                  size={"small"}
                  tagState={searchForInterests.has(item.key)}
                  onPress={() => handleInterestPress(item.key)}
                />
              </TouchableOpacity>
            )
            }
          />
          <Text/>
        </>
        }
        { selectedTab === "location" &&
        <Map
          places={cardDeck.cards}
          searchForRadius = {searchForRadius}
          searchForLocation={searchForLocation}
          onSearchRadiusChange={ (radius) => {
            setSearchForRadius(radius)
          }}
        />
        }
      </View>
  );
}
