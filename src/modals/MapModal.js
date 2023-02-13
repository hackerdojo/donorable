import React, {useState, useEffect} from 'react';
import {Modal, View, Text, StyleSheet, Pressable} from 'react-native';
import Slider from 'react-native-sliders';
import {NearbyMap} from '../components';
import styleguide from "../../styles/styleguide";

const MapModal = (
  {
    isPresented = false,
    onRequestToHide,
    latitude = 37.53313,
    longitude = -122.216233,
    latitudeDelta = 0.8,
    longitudeDelta = 0.8,
//    range,
    onTranslate,
    onRangeChange
  }) => {

  const styles = StyleSheet.create(styleguide);
  // 40 miles
  const [searchRadius, setSearchRadius] = useState(4000)
  const [region, setRegion] = useState(
    {
      latitude: latitude,
      longitude: longitude,
      latitudeDelta: latitudeDelta,
      longitudeDelta: longitudeDelta,
    })

  useEffect(() => {
    setRegion({
      latitude: latitude,
      longitude: longitude,
      latitudeDelta: latitudeDelta,
      longitudeDelta: longitudeDelta,
    })
  }, [latitudeDelta, longitudeDelta, longitude, latitude]);

  return (
    <Modal
      transparent={true}
      presentationStyle={"pageSheet"}
      animationType="fade"
      visible={isPresented}
      onRequestClose={onRequestToHide}
    >
      <View style={styles.modalView}>
        <NearbyMap
          style={[styles.fullWidth, {height: 400}]}
          region={region}
          searchRadius={searchRadius}
        />
        <Text/>
        <Text>Search within {Math.floor(searchRadius / 1000 / 1.6)} miles</Text>
        <Slider
          style={styles.fullWidth}
          minimumValue={4000}
          maximumValue={50000}
          value={searchRadius}
          onValueChange={(value) => setSearchRadius(value[0])}
        />
        <Text/>
        <Pressable
          title="Hide Map"
          onPress={onRequestToHide}
        >
          <View style={{backgroundColor: "grey", width: 50, height: 5, borderRadius: 3}}></View>
        </Pressable>
      </View>
    </Modal>
  )
}

export default MapModal;
