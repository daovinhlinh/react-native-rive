import {Dimensions, PixelRatio} from 'react-native';

export const {width, height} = Dimensions.get('window');

const designWidth = 390;
const designHeight = 844;

const isTablet = () => {
  const ratio = width / height;
  return ratio < 1 ? false : ratio >= 1.6;
};

const moderateVerticalScale = (size: number, factor = 0.5) =>
  size + (vertical(size) - size) * factor;

export const fontSize = (size: number) => {
  // const sizeInPercent = size * (100 / designWidth - 0.025);
  // return PixelRatio.roundToNearestPixel(
  //   (ScreenWidth * sizeInPercent * ScreenFontScale) / 100,
  // );
  const scaleValue = isTablet() ? 1.2 : 1;
  return moderateVerticalScale(size, scaleValue);
};

export const horizontal = (size: number) =>
  PixelRatio.roundToNearestPixel((width * size) / designWidth);

export const vertical = (size: number) =>
  PixelRatio.roundToNearestPixel((height * size) / designHeight);

export const fontWeights = {
  regular: '400',
  medium: '500',
  semibold: '600',
  bold: '700',
} as const;

export const textStyles = {
  default: {
    // fontFamily: 'Hanken Grotesk',
  },
  t1_normal: {
    fontSize: fontSize(30),
    fontWeight: fontWeights.regular,
    lineHeight: fontSize(36),
    // fontFamily: 'Hanken Grotesk'
  },
  t2_normal: {
    fontSize: fontSize(16),
    fontWeight: fontWeights.regular,
    lineHeight: fontSize(24),
    // fontFamily: 'Hanken Grotesk'
  },
};

export const textType = {
  t1_normal: 't1_normal',
  t2_normal: 't2_normal',
} as const;
