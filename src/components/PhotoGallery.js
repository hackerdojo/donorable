import React, { useState, useRef } from 'react';
import {View, Text, StyleSheet, FlatList, Image, TouchableWithoutFeedback, Dimensions} from 'react-native';
import theme from '../../styles/theme.style';
/*

const photos = [
  require('./images/image1.jpg'),
  require('./images/image2.jpg'),
  require('./images/image3.jpg'),
];

...

<PhotoGallery photos={photos} />

 */

const windowWidth = Dimensions.get('window').width;

const PhotoGallery = ({ photos }) => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  let flatListRef = null;

  const handlePageChange = (index) => {
    setSelectedIndex(index);
    flatListRef.scrollToIndex({index});
  };



  const renderDot = (index) => {
    return (
      <TouchableWithoutFeedback key={index} onPress={() => handlePageChange(index)}>
        <View style={[styles.dot, { backgroundColor: index === selectedIndex ? 'gray' : 'lightgray' }]} />
      </TouchableWithoutFeedback>
    );
  };

  return (
    <View style={styles.container}>
      { photos &&
        <>
      <FlatList
        ref={ thisref => flatListRef = thisref}
        style={styles.flatList}
        data={photos}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        progressViewOffset={selectedIndex}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={styles.page}>
            <Image source={{ uri: item }} style={styles.image} />
          </View>
        )}
        onMomentumScrollEnd={(e) => handlePageChange(e.nativeEvent.contentOffset.x / e.nativeEvent.layoutMeasurement.width)}
      />
      <View style={styles.dotsContainer}>
        {photos.map((_, index) => renderDot(index))}
      </View>
        </>
      }
    </View>
  );
};

const styles = StyleSheet.create({
  container: {

  },
  flatList: {

  },
  page: {
    alignItems: 'center',
    justifyContent: 'center',
    border:"1px solid red",
  },
  image: {
    width: windowWidth-theme.VIEW_PADDING_DETAIL*2,
    height: windowWidth-theme.VIEW_PADDING_DETAIL*2,
  },
  dotsContainer: {
    height: 50,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    marginHorizontal: 5,
  },
});

export default PhotoGallery;
