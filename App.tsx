import React from 'react';
import { StyleSheet } from 'react-native';
import { initialWindowMetrics, SafeAreaProvider } from 'react-native-safe-area-context';
import Onboarding from './src/screens/Onboarding';

const App = () => {

  return (
    <SafeAreaProvider>
      <Onboarding />
    </SafeAreaProvider>
  );
};

export default App;

const styles = StyleSheet.create({

});
