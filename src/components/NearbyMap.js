import React, {useState, useEffect} from 'react';
import {View, Text} from 'react-native';
import MapView, {Circle, Marker} from 'react-native-maps';

const NearbyMap = (
  {
    region,
    searchRadius = 4000,
    places
  }) => {
/*
  RNLocation.configure({
    distanceFilter: 5.0
  })

  RNLocation.requestPermission({
    ios: "whenInUse",
    android: {
      detail: "coarse"
    }
  }).then(granted => {
    if (granted) {
      this.locationSubscription = RNLocation.subscribeToLocationUpdates(locations => {
        /* Example location returned
        {
          speed: -1,
          longitude: -0.1337,
          latitude: 51.50998,
          accuracy: 5,
          heading: -1,
          altitude: 0,
          altitudeAccuracy: -1
          floor: 0
          timestamp: 1446007304457.029,
          fromMockProvider: false
        }

      })
    }
  })
*/

  const userLocation = {
    latitude: 37.3963152,
    longitude: -122.049020
  }
  const [userRegion, setUserRegion] = useState({});
  const [location, setLocation] = useState(userLocation);
  const [error, setError] = useState(null);

/*
  useEffect(() => {
    Geolocation.getCurrentPosition(
      (position) => {
        setLocation(position.coords);
      },
      (error) => {
        setError(error.message);
      },
      { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
    );
  }, []);

*/


  return (
    <View style={{flex: 1, width: "100%", height: "100%"}}>
      <MapView
        style={{flex: 1}}
        region={region}
        showsUserLocation={true}
        onRegionChange={setUserRegion}
      >
        <Circle
          center={location}
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
