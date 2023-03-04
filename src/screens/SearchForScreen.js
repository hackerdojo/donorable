import React, {useState, useContext, useEffect} from "react";
import {useSelector} from "react-redux";
import {Text, StyleSheet, View, FlatList, TouchableOpacity} from "react-native";
import {TabBar, SearchCategoryEntry, NearbyMap, Map} from "../components";
import styleguide from "../../styles/styleguide";
import nteecodes from "../data/nteecodes";
import nteecodesicons from "../data/nteecodesicons";


export default function SearchForScreen({navigation, route}) {
  const styles = StyleSheet.create(styleguide);
  const principal = useSelector(state=> state.principal)
  const cardDeck = useSelector(state => state.cardDeck)

  const availableTags = Object
    .keys(nteecodes)
    .filter( key => key.length==1 )  // Grab the top level entries
    .map( key => ({key: key, name: nteecodes[key], icon: nteecodesicons[key]}));
  const listData = availableTags.sort((a, b) => (a.name > b.name));
  const [filterSet, setFilterSet] = useState(new Set(principal.searchFilter));

  const [selectedTab, setSelectedTab] = useState("interests");

  let searchDisable = false;

  /* Go to Welcome Screen, or return to Settings */
  const onDonePress = async () => {
    principal.searchFilter = Array.from(filterSet);
    searchDisable = true;
    // dispatch actions here.
//    await updateUser(principal);
    searchDisable = false;
 //   if (from === 'goback') {
//      navigation.goBack();
//    } else {
//      navigation.navigate("Welcome", {principal});
//    }
  };

  const handleTabChange = (selection) => {
    setSelectedTab(selection);
  }

  const handlePress = (tag) => {
    if (filterSet.has(tag)) {
      let myFilterSet = new Set(filterSet);
      myFilterSet.delete(tag);
      setFilterSet(myFilterSet);
    } else {
      let myFilterSet = new Set(filterSet);
      myFilterSet.add(tag);
      setFilterSet(myFilterSet);
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
            needs: "Needs",
            goals: "Goals",
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
                  tagState={filterSet.has(item.key)}
                  onPress={() => handlePress(item.key)}
                />
              </TouchableOpacity>
            )
            }
          />
          <Text/>
        </>
        }
        { selectedTab === "location" &&
          <Map places={cardDeck.cards}/>
        }
      </View>
  );
}
