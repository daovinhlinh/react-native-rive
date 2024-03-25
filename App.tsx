import React from 'react';
import {StyleSheet} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import Navigation from './src/navigation';
import Onboarding from './src/screens/Onboarding';

const App = () => {
  return (
    <SafeAreaProvider style={{flex: 1}}>
      <Navigation />
      {/* <Onboarding /> */}
    </SafeAreaProvider>
  );
};

export default App;
