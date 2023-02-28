import React, { useContext} from "react";
import {TouchableOpacity, FlatList, Text, StyleSheet, View} from "react-native";
import {HStack, VStack} from 'react-native-stacks';
import styleguide from "../../styles/styleguide";
import {HR, ImageMask} from "../components";
import theme from "../../styles/theme.style";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

export default function ListsScreen({navigation, route}) {
  const styles = StyleSheet.create(styleguide);
  let data = route.params.data || [];
  let addToListVerb = route.params.addToListVerb || [];

  const onCardPress = (item) => {
    navigation.push("FavoriteDetails", {params: item, title: item.name, from: "Favorites"})
// navigate to DetailScreen for this item.  Push, so person can come back to Favorites.
  }

  // Lists wants an array of objects passed to route.params.data property
  // [
  //   { id: "string",
  //     image: "url string",
  //     name:"string header",
  //     about: "String description two lines max"
  //   }
  // ]

  if ( data.length === 0) return (
    <View  style={styles.emptyListScreen}>
      <MaterialCommunityIcons name={"cat"} size={50} />
      <Text>No items found.</Text>
      <Text numberOfLines={3}>Items that you have {addToListVerb} will show up here.</Text>
    </View>
  )

  return (
    <View style={styles.listScreen}>
      <FlatList
        data={data}
        keyExtractor={(array, index) => index}
        renderItem={({item, index, separator}) => (
          <View key={item}>
            <TouchableOpacity
              onPress={(message) => onCardPress(item)}
            >
              <HStack style={styles.messageCard} spacing={7}>
                <ImageMask
                  source={{uri: item.image}}
                  size={70}
                  radius={10}
                  borderWidth={theme.IMAGE_BORDER_WIDTH}
                  borderColor={theme.IMAGE_BORDER_COLOR}
                  backgroundColor={theme.IMAGE_BACKGROUND_COLOR}
                />
                <VStack alignment={"left"}>
                  <View style={{flex: 1}}>
                    <Text style={styles.messageSender}>
                      {item.name}
                    </Text>
                  </View>
                  <View style={{flex: 22}}>
                    <Text style={styles.messagePreview}
                          numberOfLines={3}
                    >
                      {item.about}
                    </Text>
                  </View>
                </VStack>
              </HStack>
            </TouchableOpacity>
            <HR/>
          </View>
        )}
      />
    </View>
  );
}
