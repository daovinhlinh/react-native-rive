import { ImageBackground, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useRef, useState } from 'react';
import Rive, { Alignment, Fit, RiveRef } from 'rive-react-native';
import { getFont, TextStyle } from '../shared/theme/font';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { fontSize, horizontal, vertical } from '../shared/theme/responsive';
import { SvgXml } from 'react-native-svg';
import { icons } from '../../assets/Icons/icons';
import ReactNativeModal from 'react-native-modal';
import SignInModal from './SignInModal';

const Onboarding = () => {
  const buttonRef = useRef<RiveRef>(null);
  const { top, bottom } = useSafeAreaInsets();
  const [isModalVisible, setModalVisible] = useState(false);

  const onPressButton = () => {
    buttonRef.current?.play('active')
    setTimeout(() => {
      setModalVisible(true);
    }, 800)
  }

  return (
    <View style={styles.container}>
      <Rive
        resourceName="shapes"
        alignment={Alignment.Center}
        fit={Fit.Cover}
      >
        <ImageBackground
          source={require('../../assets/Backgrounds/Spline.imageset/Spline.png')}
          style={styles.background}
          blurRadius={50}
        />
      </Rive>
      <View style={[{ paddingTop: top + vertical(88), paddingBottom: bottom }, styles.content]}>
        <Text style={styles.title}>
          Learn design {'\n'}& code
        </Text>
        <Text style={styles.body}>
          Don’t skip design. Learn design and code, by building real apps with React and Swift. Complete courses about the best tools.
        </Text>
        <TouchableOpacity
          activeOpacity={1}
          onPress={onPressButton}
          style={{
            height: 64,
            width: 236,
          }}>
          <Rive
            resourceName="button"
            alignment={Alignment.Center}
            fit={Fit.FitWidth}
            ref={buttonRef}
          />
          <View style={styles.button}>
            <SvgXml xml={icons.card} />
            <Text
              style={styles.buttonText}>
              Start the course
            </Text>
          </View>
        </TouchableOpacity>
        <Text style={styles.caption}>
          Purchase includes access to 30+ courses, 240+ premium tutorials, 120+ hours of videos, source files and certificates.
        </Text>
      </View>
      <ReactNativeModal
        isVisible={isModalVisible}
        onBackdropPress={() => setModalVisible(false)}
        animationIn="zoomIn"
      >
        <SignInModal />
      </ReactNativeModal>
    </View>
  );
};

export default Onboarding;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  container: {
    flex: 1,
  },
  content: {
    ...StyleSheet.absoluteFillObject,
    paddingHorizontal: horizontal(40),
    flex: 1,
  },
  background: {
    flex: 1,
  },
  title: StyleSheet.flatten([getFont(TextStyle.title), {
    fontSize: fontSize(60),
    lineHeight: vertical(70)
  }]),
  body: StyleSheet.flatten([getFont(TextStyle.body),
  {
    flex: 1,
    marginTop: vertical(30)
  }]),
  caption: StyleSheet.flatten([getFont(TextStyle.caption),
  {
    marginTop: vertical(23)
  }]),
  button: {
    flexDirection: 'row',
    position: 'absolute',
    top: vertical(24),
    alignItems: 'center',
    justifyContent: 'center',
    columnGap: horizontal(6),
    left: horizontal(40),
  },
  buttonText: StyleSheet.flatten([getFont(TextStyle.headline), {
    lineHeight: vertical(24),
  }])
});
