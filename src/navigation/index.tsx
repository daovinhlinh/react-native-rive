import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Onboarding from '../screens/Onboarding';
import Tabbar from '../components/Tabbar';

const Navigation = () => {
  return (
    <NavigationContainer>
      {/* <Tabbar /> */}
      <Onboarding />
    </NavigationContainer>
  );
};

export default Navigation;

const styles = StyleSheet.create({});
