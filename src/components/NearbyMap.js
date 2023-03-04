import React, {useState, useEffect} from 'react';
import {View, Text} from 'react-native';
import MapView, {Circle, Marker} from 'react-native-maps';

const NearbyMap = (
  {
    region,
    searchRadius = 4000,
    places
  }) => {

  const userLocation = {
    latitude: 37.3963152,
    longitude: -122.049020
  }
  const [userRegion, setUserRegion] = useState({});

  return (
    <View style={{flex: 1, width: "100%", height: "100%"}}>
      <MapView
        style={{flex: 1}}
        region={region}
        showsUserLocation={true}
        onRegionChange={setUserRegion}
      >
        <Circle
          center={userLocation}
          radius={searchRadius}
          strokeWidth={2}
          strokeColor={"blue"}
          fillColor={"#b5d7e480"}
        />
        {/* Example markers for non-profit businesses within a 10 mile radius */}

        { places.map(place => (
            place.latlon &&
            <Marker
              coordinate={{latitude: place.latlon[0], longitude: place.latlon[1]}}
              title={place.name}
            />
          )
        )}
      </MapView>
    </View>
  );
};

export default NearbyMap;
