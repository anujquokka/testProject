import { FlatList, SafeAreaView, Text, TouchableOpacity, View } from 'react-native'
import React from 'react';
import styles from './style';
import { Header } from '../../components';
import { dummyData } from '../../constants';
import { Button, Card } from "@rneui/themed";

const LocalDb = ({ setLocalDummyData, userLocalData }) => {
  const handleStoreData = () => {
    setLocalDummyData(dummyData);
  }
  const renderItem = ({ item }) => {
    return (
      <Card>
        <Card.Title style={styles.titleText}>{item.title}</Card.Title>
        <Card.Divider />
        <Text style={styles.bodyText}>{item.body}</Text>
      </Card>
    )
  };

  return (
    <View style={{ flex: 1, backgroundColor: 'white' }}>
      <SafeAreaView>
        <Header heading={'Local DB'} />
        <Button buttonStyle={styles.captureButton} onPress={handleStoreData} titleStyle={styles.buttonTextStyle} title="Store Data" />
        <FlatList
          data={userLocalData}
          renderItem={renderItem}
          keyExtractor={item => Math.random()}
        />
      </SafeAreaView>
    </View>
  )
}

export default LocalDb

