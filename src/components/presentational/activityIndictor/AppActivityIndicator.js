import React from 'react';
import {
  StyleSheet,
  View,
  ActivityIndicator,
} from 'react-native';
import { Colors } from '../../../constants';

const AppActivityIndicator = () => {
 
  return (
    <ActivityIndicator size={'large'} color={Colors.tintColor} />
  );
};

export default AppActivityIndicator;

const styles = StyleSheet.create({
});
