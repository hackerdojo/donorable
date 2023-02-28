import React, { useContext} from "react";
import {TouchableOpacity, FlatList, Text, StyleSheet, View} from "react-native";
import {HStack, VStack} from 'react-native-stacks';
import styleguide from "../../styles/styleguide";
import {HR, ImageMask} from "../components";
import {PrincipalContext} from "../contexts/PrincipalContext";
import theme from "../../styles/theme.style";

// mock
import data from '../mockdata/data';

export default function FavoritesScreen({navigation, route}) {
  const styles = StyleSheet.create(styleguide);
  const {user, updateUser} = useContext(PrincipalContext);

  const onCardPress = (itemId) => {
    const item = data.filter(org => (org.id === itemId))[0];
    navigation.push("FavoriteDetails", {params: item, title: item.name, from: "Favorites"})
// navigate to Liked Screen for this item.  Push, so person can come back to Favorites.
  }

  return (
    <View style={styles.listScreen}>
      <FlatList
        data={user.favorites}
        keyExtractor={(array, index) => index}
        renderItem={({item, index, separator}) => (
          <View key={item}>
            <TouchableOpacity
              onPress={(message) => onCardPress(item)}
            >
              <HStack style={styles.messageCard} spacing={7}>
                <ImageMask
                  source={{uri: data.filter(thing => thing.id === item)[0].image}}
                  size={70}
                  radius={10}
                  borderWidth={theme.IMAGE_BORDER_WIDTH}
                  borderColor={theme.IMAGE_BORDER_COLOR}
                  backgroundColor={theme.IMAGE_BACKGROUND_COLOR}
                />
                <VStack alignment={"left"}>
                  <View style={{flex: 1}}>
                    <Text style={styles.messageSender}>
                      {data.filter(thing => thing.id === item)[0].name}
                    </Text>
                  </View>
                  <View style={{flex: 22}}>
                    <Text style={styles.messagePreview}
                          numberOfLines={3}
                    >
                      {data.filter(thing => thing.id === item)[0].about}
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