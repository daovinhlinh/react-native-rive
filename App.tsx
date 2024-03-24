import React from 'react';
import {ImageBackground, StyleSheet, Text, View} from 'react-native';
import Rive, {Alignment, Fit} from 'rive-react-native';

const App = () => {
  return (
    <View style={{flex: 1}}>
      <Rive
        // artboardName="Avatar 1"
        resourceName="shapes"
        alignment={Alignment.Center}
        fit={Fit.Cover}>
        <ImageBackground
          source={require('./Assets/Backgrounds/Spline.imageset/Spline.png')}
          style={styles.background}
          blurRadius={50}
        />
      </Rive>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
});
