import { SafeAreaView, Text, View ,Platform, PermissionsAndroid} from 'react-native'
import React, { useEffect, useState } from 'react';
import styles from './style';
import { Header } from '../../components';
import MapView, { Marker } from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation'

const Location = () => {
  const [currentLongitude, setCurrentLongitude] = useState(null);
  const [currentLatitude, setCurrentLatitude] = useState(null);


  const getOneTimeLocation = () => {
    Geolocation.getCurrentPosition(
      position => {
        setCurrentLongitude(position.coords.longitude);
        setCurrentLatitude(position.coords.latitude);
      },
      error => {
        console.log('err', error);
      },
      {
        enableHighAccuracy: false,
        timeout: 30000,
        maximumAge: 1000,
      },
    );
  };
  const subscribeLocationLocation = () => {
    watchID = Geolocation.watchPosition(
      position => {
        setCurrentLongitude(position.coords.longitude);
        setCurrentLatitude(position.coords.latitude);
      },
      error => {
        console.log('err', error);
      },
      {
        enableHighAccuracy: false,
        maximumAge: 1000,
      },
    );
  };
  useEffect(() => {
    const requestLocationPermission = async () => {
      if (Platform.OS === 'ios') {
        getOneTimeLocation();
        subscribeLocationLocation();
      } else {
        try {
          const granted = await PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
            {
              title: 'Location Access Required',
              message: 'This App needs to Access your location',
            },
          );
          if (granted === PermissionsAndroid.RESULTS.GRANTED) {
            //To Check, If Permission is granted
            getOneTimeLocation();
            subscribeLocationLocation();
          } else {
            setLocationStatus('Permission Denied');
          }
        } catch (err) {
          console.warn(err);
        }
      }
    };
    requestLocationPermission()
  })
  
  return (
    <View style={{ flex: 1, backgroundColor: 'white' }}>
      <SafeAreaView>
        <Header heading={'Location'} />
        <View style={styles.coordinatesBox}>
          <Text style={{fontSize:16}}>Latitude : <Text style={styles.coordinates}>{currentLatitude}</Text></Text>
          <Text style={{fontSize:16}}>Longitude : <Text style={styles.coordinates}>{currentLongitude}</Text></Text>
        </View>
        <MapView
         showsMyLocationButton={true}
         followsUserLocation={true}
         showsCompass={true}
          style={{
            width: '100%',
            height: '92%',
          }}
          region={{
            latitude: currentLatitude? currentLatitude: 37.78825,
            longitude: currentLongitude? currentLongitude: -122.4324,
            latitudeDelta: 0.015,
            longitudeDelta: 0.0121,
          }}
        >
          <Marker coordinate={{
             latitude: currentLatitude? currentLatitude: 37.78825,
             longitude: currentLongitude? currentLongitude: -122.4324,
             latitudeDelta: 0.015,
             longitudeDelta: 0.0121
          }} />
        </MapView>
      </SafeAreaView>
    </View>
  )
}

export default Location

