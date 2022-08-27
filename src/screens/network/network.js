import { FlatList, SafeAreaView, Text, View } from 'react-native'
import React, { useEffect } from 'react';
import styles from './style';
import { Header, AppActivityIndicator } from '../../components';
import { Button, Card } from "@rneui/themed";

const Network = ({ getAllPost, setAppLoader, userAppLoadere, userPost }) => {

  const handleStoreData = () => {
    setAppLoader(true);
    getAllPost();
  };

  const renderItem = ({ item }) => {
    return (
      <Card containerStyle={{borderRadius:20}}>
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
        <Button buttonStyle={styles.captureButton} onPress={handleStoreData} titleStyle={styles.buttonTextStyle} title="Get Data" />
        {userAppLoadere ?
          <View style={{ width: 100, height: 100, alignSelf: 'center', marginTop: 100 }}>
            <AppActivityIndicator />
          </View> :
          <FlatList
            data={userPost}
            renderItem={renderItem}
            keyExtractor={item => Math.random()}
          />}
      </SafeAreaView>
    </View>
  )
}

export default Network

