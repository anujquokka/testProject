import React from 'react';
import { HomeNavigator } from '../navigation';
import { NavigationContainer } from '@react-navigation/native';
import navigationService from './navigationService';

const AppNavigator = () => {
  return (
    <NavigationContainer ref={navigationService.navigationRef}>
      <HomeNavigator />
    </NavigationContainer>
  )

};

export default AppNavigator;
