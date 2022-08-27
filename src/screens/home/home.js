import { SafeAreaView, Text, View, ImageBackground, Image } from 'react-native'
import React from 'react';
import styles from './style';
import { Header } from '../../components';
import { SwiperFlatList } from 'react-native-swiper-flatlist';
import { one, two, four, five } from '../../images';
import { Colors } from '../../constants';

const Home = () => {
  const colors = [five, two, four, four, five];
  return (
    <View style={{ flex: 1, backgroundColor: Colors.AppTheam }}>
      <SafeAreaView>
        <Header heading={'Home'} />
        <ImageBackground style={styles.bgImage} source={{ uri: 'https://images.unsplash.com/photo-1628707351135-e963f2aa4387?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fHdhbGxwYXBlciUyMGZvciUyMG1vYmlsZXxlbnwwfHwwfHw%3D&w=1000&q=80' }}>
          <View style={styles.swiperContainer}>
            <SwiperFlatList
              index={0}
              showPagination
              data={colors}
              renderItem={({ item }) => (
                <View style={styles.child}>
                  <Image resizeMode='contain' style={styles.child} source={item} />
                </View>
              )}
            />
          </View>
        </ImageBackground>
      </SafeAreaView>
    </View>
  )
}

export default Home

