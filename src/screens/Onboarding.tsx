import React, {useRef, useState} from 'react';
import {
  Button,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import ReactNativeModal from 'react-native-modal';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {SvgXml} from 'react-native-svg';
import Rive, {Alignment, Fit, RiveRef} from 'rive-react-native';
import {icons} from '../../assets/Icons/icons';
import Tabbar from '../components/Tabbar';
import {getFont, TextStyle} from '../shared/theme/font';
import {fontSize, horizontal, vertical} from '../shared/theme/responsive';
import SignInModal from './SignInModal';

const Onboarding = () => {
  const buttonRef = useRef<RiveRef>(null);
  const {top, bottom} = useSafeAreaInsets();
  const [isModalVisible, setModalVisible] = useState(false);

  const onPressButton = () => {
    buttonRef.current?.play('active');
    setTimeout(() => {
      setModalVisible(true);
    }, 700);
  };

  const onModalClose = () => {
    setModalVisible(false);
  };

  return (
    <View style={styles.container}>
      <Rive resourceName="shapes" alignment={Alignment.Center} fit={Fit.Cover}>
        <ImageBackground
          source={require('../../assets/Backgrounds/Spline.imageset/Spline.png')}
          style={styles.background}
          blurRadius={50}
        />
      </Rive>
      <View
        style={[
          {
            paddingTop: top + vertical(88),
            paddingBottom: bottom + vertical(30),
          },
          styles.content,
        ]}>
        <Text style={styles.title}>Learn design {'\n'}& code</Text>
        <Text style={styles.body}>
          Don’t skip design. Learn design and code, by building real apps with
          React and Swift. Complete courses about the best tools.
        </Text>
        <TouchableOpacity
          activeOpacity={1}
          onPress={onPressButton}
          style={styles.buttonContainer}>
          <Rive
            resourceName="button"
            alignment={Alignment.Center}
            fit={Fit.FitWidth}
            ref={buttonRef}
          />
          <View style={styles.button}>
            <SvgXml xml={icons.card} />
            <Text style={styles.buttonText}>Start the course</Text>
          </View>
        </TouchableOpacity>
        <Text style={styles.caption}>
          Purchase includes access to 30+ courses, 240+ premium tutorials, 120+
          hours of videos, source files and certificates.
        </Text>
      </View>
      <ReactNativeModal
        isVisible={isModalVisible}
        onBackdropPress={() => setModalVisible(false)}
        animationIn="slideInUp"
        animationOut="slideOutDown">
        <SignInModal onModalClose={onModalClose} />
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
  title: StyleSheet.flatten([
    getFont(TextStyle.title),
    {
      fontSize: fontSize(60),
      lineHeight: vertical(70),
      color: '#000',
    },
  ]),
  body: StyleSheet.flatten([
    getFont(TextStyle.body),
    {
      flex: 1,
      marginTop: vertical(30),
      color: '#000',
    },
  ]),
  caption: StyleSheet.flatten([
    getFont(TextStyle.caption),
    {
      marginTop: vertical(23),
      color: '#000',
    },
  ]),
  button: {
    flexDirection: 'row',
    position: 'absolute',
    top: vertical(28),
    alignItems: 'center',
    justifyContent: 'center',
    columnGap: horizontal(6),
    left: horizontal(40),
  },
  buttonText: StyleSheet.flatten([
    getFont(TextStyle.headline),
    {
      lineHeight: vertical(24),
      color: '#000',
    },
  ]),
  buttonContainer: {
    width: horizontal(236),
    height: vertical(72),
  },
});
