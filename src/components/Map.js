import React,{useEffect,useState} from 'react';
import {Text,StyleSheet, View} from 'react-native';
import Slider from "react-native-sliders";
import NearbyMap from "./NearbyMap";
import styleguide from "../../styles/styleguide";
import {radiusToMiles} from "../hooks/useLocationTools";

export default function Map(
  {
    latitude = 37.53313,
    longitude=  -122.216233,
    latitudeDelta = 0.8,
    longitudeDelta = 0.8,
    places,
    searchForLocation,
    searchForRadius,
    onSearchRadiusChange,
  })
{

  const styles = StyleSheet.create(styleguide);
  const [searchRadius, setSearchRadius] = useState(searchForRadius || 4000);
  const [searchLocation, setSearchLocation] = useState(searchForLocation);

  const handleSearchRadiusChange= (radius) => {
    setSearchRadius(radius);
    if (onSearchRadiusChange) {
      onSearchRadiusChange(radius)
    }
  }

  // Map location
  const [region, setRegion] = useState(
    {
      latitude: latitude,
      longitude: longitude,
      latitudeDelta: latitudeDelta,
      longitudeDelta: longitudeDelta,
    })
  // Map location
  useEffect(() => {
    setRegion({
      latitude: latitude,
      longitude: longitude,
      latitudeDelta: latitudeDelta,
      longitudeDelta: longitudeDelta,
    })
  }, [latitudeDelta, longitudeDelta, longitude, latitude]);

  return (
    <View style={{flex: 1, width: "90%", height: "100%"}}>
      <Text/>
      <NearbyMap
        style={[styles.fullWidth, {height: 400}]}
        region={region}
        searchForRadius={searchRadius}
        searchForLatLon = {searchLocation}
        places={places}
      />
      <Text/>
      <Text>Search within {radiusToMiles(searchRadius)} miles</Text>
      <Slider
        style={styles.fullWidth}
        minimumValue={500}
        maximumValue={100000}
        value={searchRadius}
        onValueChange={(value) => handleSearchRadiusChange(value[0])}
      />
      <Text/>
    </View>
  )
}
