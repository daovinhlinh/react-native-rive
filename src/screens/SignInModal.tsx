import React, {useEffect, useRef, useState} from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {SvgXml} from 'react-native-svg';
import Rive, {Alignment, Fit, RiveRef} from 'rive-react-native';
import {icons} from '../../assets/Icons/icons';
import {getFont, TextStyle} from '../shared/theme/font';
import {fontSize, horizontal, vertical} from '../shared/theme/responsive';

type SignInModalProps = {
  onModalClose: () => void;
};

const SignInModal = ({onModalClose}: SignInModalProps) => {
  const [isLoading, setIsLoading] = useState(false);

  const indicatorRef = useRef<RiveRef>(null);
  const confettiRef = useRef<RiveRef>(null);

  const onSignIn = () => {
    console.log('sign in ');

    setIsLoading(true);
  };

  useEffect(() => {
    if (isLoading) {
      console.log('isloading');

      const p1 = new Promise(resolve => {
        setTimeout(() => {
          requestAnimationFrame(() => {
            indicatorRef.current?.fireState('State Machine 1', 'Check');
            resolve('xxx success');
          });
        }, 1500);
      });

      p1.then(() => {
        console.log('success');
        setTimeout(() => {
          setIsLoading(false);
          confettiRef.current?.fireState(
            'State Machine 1',
            'Trigger explosion',
          );
        }, 2000);
      });
    }
  }, [isLoading]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sign in</Text>
      <Text style={styles.subhead2}>
        Access to 240+ hours of content.{'\n'}Learn design and code, by building
        real apps with React and Swift.
      </Text>
      <View>
        <Text style={styles.subhead}>Email</Text>
        <TextInput style={styles.input} />
      </View>
      <View>
        <View style={styles.sbRow}>
          <Text style={styles.subhead}>Password</Text>
          <Text style={styles.subhead_forgot}>Forgot password</Text>
        </View>
        <TextInput style={styles.input} />
      </View>
      <TouchableOpacity style={styles.submitButton} onPress={onSignIn}>
        <Text style={styles.headline}>Sign in</Text>
      </TouchableOpacity>
      <View style={styles.separateText}>
        <View style={styles.line} />
        <Text style={styles.footnote2}>OR</Text>
        <View style={styles.line} />
      </View>
      <Text style={styles.footnote}>Sign up with Email, Apple or Google</Text>
      <View style={styles.socialLogin}>
        <SvgXml xml={icons.mail} height={vertical(36)} width={vertical(36)} />
        <SvgXml
          xml={icons.apple}
          height={vertical(36)}
          width={vertical(36)}
          color="#000"
        />
        <SvgXml xml={icons.google} height={vertical(36)} width={vertical(36)} />
      </View>
      <TouchableOpacity style={styles.closeButton} onPress={onModalClose}>
        <SvgXml xml={icons.close} width={vertical(16)} height={vertical(16)} />
      </TouchableOpacity>
      {isLoading && (
        <Rive
          resourceName="check"
          stateMachineName="State Machine 1"
          alignment={Alignment.Center}
          fit={Fit.Cover}
          ref={indicatorRef}
          style={styles.indicator}
        />
      )}
      <View
        style={{position: 'absolute', alignSelf: 'center', top: '50%'}}
        pointerEvents="none">
        <Rive
          resourceName="confetti"
          ref={confettiRef}
          alignment={Alignment.Center}
          fit={Fit.Cover}
          style={styles.confetti}
        />
      </View>
    </View>
  );
};

export default SignInModal;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    paddingHorizontal: horizontal(30),
    paddingTop: vertical(48),
    paddingBottom: vertical(40),
    borderRadius: 20,
    shadowColor: 'rgba(0, 0, 0, 0.1)',
    shadowOffset: {
      height: vertical(30),
      width: 0,
    },
    rowGap: vertical(24),
  },
  title: StyleSheet.flatten([
    getFont(TextStyle.title),
    {
      fontSize: fontSize(34),
      lineHeight: vertical(41),
      textAlign: 'center',
      color: '#000',
    },
  ]),
  subhead2: {
    ...getFont(TextStyle.subheadline2),
    textAlign: 'center',
    color: 'rgba(0, 0, 0, 0.5)',
  },
  subhead_forgot: {
    ...getFont(TextStyle.subheadline2),
    textAlign: 'center',
    color: 'rgba(0, 0, 0, 0.3)',
  },
  subhead: {
    ...getFont(TextStyle.subheadline),
    color: 'rgba(0, 0, 0, 0.5)',
  },
  input: {
    height: vertical(50),
    borderRadius: 15,
    borderWidth: 1,
    borderColor: 'rgba(194, 207, 240, 0.55)',
    marginTop: vertical(8),
    paddingHorizontal: vertical(16),
    paddingVertical: vertical(8),
    ...getFont(TextStyle.body),
  },
  sbRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  headline: {
    ...getFont(TextStyle.headline),
    color: 'white',
    textAlign: 'center',
    lineHeight: vertical(50),
  },
  submitButton: {
    height: vertical(56),
    backgroundColor: '#F77D8E',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 25,
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
    shadowColor: 'rgba(247, 125, 142, 0.3)',
    shadowOffset: {
      height: vertical(10),
      width: 0,
    },
    alignItems: 'center',
    justifyContent: 'center',
  },
  footnote2: {
    ...getFont(TextStyle.footnote2),
    color: 'rgba(0, 0, 0, 0.3)',
  },
  line: {
    height: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
    flex: 1,
  },
  separateText: {
    flexDirection: 'row',
    alignItems: 'center',
    columnGap: horizontal(8),
  },
  footnote: {
    ...getFont(TextStyle.footnote),
    color: 'rgba(0, 0, 0, 0.5)',
    textAlign: 'center',
  },
  socialLogin: {
    marginVertical: vertical(18),
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  closeButton: {
    height: vertical(36),
    width: vertical(36),
    borderRadius: 18,
    elevation: 5,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    bottom: vertical(-18),
    alignSelf: 'center',
  },
  indicator: {
    position: 'absolute',
    // zIndex: 2,
    alignSelf: 'center',
    height: vertical(100),
    width: vertical(100),
    top: '50%',
  },
  confetti: {
    height: vertical(200),
    width: vertical(200),
    transform: [
      {
        scale: 5,
      },
    ],
  },
});
