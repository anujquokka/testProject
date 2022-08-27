import { StyleSheet, Text, View, Platform } from 'react-native';
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Screen, Colors } from '../../constants';
import { Home, Camera, Network, LocalDb, Location } from '../../screens';


const BottomTab = createBottomTabNavigator();

const FocusedTab = () => {
  return (
    <View style={{ width: 20, height: 20, borderRadius: 10, borderWidth: 2, borderColor: Colors.AppRed }}></View>
  )
}

const NotFocusedTab = () => {
  return (
    <View style={{ width: 20, height: 20, borderRadius: 10, borderWidth: 2, borderColor: Colors.AppHGrey }}></View>
  )
}

const HomeNavigator = () => {
  return (
    <>
      <BottomTab.Navigator
        initialRouteName={'Home'}
        screenOptions={{
          activeTintColor: '#ff5500',
        }}>
        <BottomTab.Screen
          options={{
            tabBarLabel: ({ focused, color, size }) => (
              <Text
                style={{
                  color: focused ? Colors.AppRed : Colors.AppHGrey,
                }}>
                Home
              </Text>
            ),
            headerShown: false,
            tabBarIcon: ({ focused }) => (
              <View>{focused ? <FocusedTab /> : <NotFocusedTab />}</View>
            ),
          }}
          name={'Home'}
          component={Home}
        />
        <BottomTab.Screen
          options={{
            tabBarLabel: ({ focused, color, size }) => (
              <Text
                style={{
                  color: focused ? Colors.AppRed : Colors.AppHGrey,
                }}>
                Camera
              </Text>
            ),
            headerShown: false,
            tabBarIcon: ({ focused }) => (
              <View>{focused ? <FocusedTab /> : <NotFocusedTab />}</View>
            ),
          }}
          name={'Camera'}
          component={Camera}
        />
        <BottomTab.Screen
          options={{
            tabBarLabel: ({ focused, color, size }) => (
              <Text
                style={{
                  color: focused ? Colors.AppRed : Colors.AppHGrey,
                }}>
                Network
              </Text>
            ),
            headerShown: false,
            tabBarIcon: ({ focused }) => (
              <View>{focused ? <FocusedTab /> : <NotFocusedTab />}</View>
            ),
          }}
          name={'Network'}
          component={Network}
        />
        <BottomTab.Screen
          options={{
            tabBarLabel: ({ focused, color, size }) => (
              <Text
                style={{
                  color: focused ? Colors.AppRed : Colors.AppHGrey,
                }}>
                LocalDb
              </Text>
            ),
            headerShown: false,
            tabBarIcon: ({ focused }) => (
              <View>{focused ? <FocusedTab /> : <NotFocusedTab />}</View>
            ),
          }}
          name={'LocalDb'}
          component={LocalDb}
        />
        <BottomTab.Screen
          options={{
            tabBarLabel: ({ focused, color, size }) => (
              <Text
                style={{
                  color: focused ? Colors.AppRed : Colors.AppHGrey,
                }}>
                Location
              </Text>
            ),
            headerShown: false,
            tabBarIcon: ({ focused }) => (
              <View>{focused ? <FocusedTab /> : <NotFocusedTab />}</View>
            ),
          }}
          name={'Location'}
          component={Location}
        />

      </BottomTab.Navigator>




    </>
  );
};

export default HomeNavigator;

const styles = StyleSheet.create({

});
