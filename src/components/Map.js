import React,{useEffect,useState} from 'react';
import {Text,StyleSheet} from 'react-native';
import Slider from "react-native-sliders";
import NearbyMap from "./NearbyMap";
import styleguide from "../../styles/styleguide";

export default function Map(
  {
    latitude = 37.53313,
    longitude=  -122.216233,
    latitudeDelta = 0.8,
    longitudeDelta = 0.8,
    places
  })
{

  const styles = StyleSheet.create(styleguide);
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
    <>
      <Text/>
      <NearbyMap
        style={[styles.fullWidth, {height: 400}]}
        region={region}
        searchRadius={searchRadius}
        places={places}
      />
      <Text/>
      <Text>Search within {Math.floor(searchRadius / 100 / 1.6)/10} miles</Text>
      <Slider
        style={styles.fullWidth}
        minimumValue={500}
        maximumValue={100000}
        value={searchRadius}
        onValueChange={(value) => setSearchRadius(value[0])}
      />
      <Text/>
    </>
  )
}
