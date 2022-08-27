import { Image, SafeAreaView, Text, TouchableOpacity, View } from 'react-native'
import React from 'react';
import styles from './style';
import { Header } from '../../components';
import { launchCamera } from 'react-native-image-picker';
import { Button } from "@rneui/themed";


const Camera = ({ setCameraCaptureImage, userCameraCapture }) => {

  const handleCaptureClick = () => {
    launchCamera({
      saveToPhotos: true,
      mediaType: 'photo',
      includeBase64: false,
      cameraType: 'front'
    }, (res) => {
      setCameraCaptureImage(res.assets[0])
    });
  }
  return (
    <View style={{ flex: 1, backgroundColor: 'white' }}>
      <SafeAreaView>
        <Header heading={'Camera'} />
        <Button buttonStyle={styles.captureButton} onPress={handleCaptureClick} titleStyle={styles.buttonTextStyle} title="Capture" />
        {userCameraCapture?.uri && <Image style={styles.imageStyle} source={{ uri: userCameraCapture.uri }} />}
      </SafeAreaView>
    </View>
  )
}

export default Camera

