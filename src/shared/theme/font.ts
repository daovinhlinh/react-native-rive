import {fontSize} from './responsive';

const FontSize = (textStyle: string) => {
  switch (textStyle) {
    case 'title':
      return 28;
    case 'largeTitle':
      return 34;
    case 'title2':
      return 24;
    case 'title3':
      return 20;
    case 'body':
    case 'headline':
      return 17;
    case 'subheadline':
    case 'subheadline2':
      return 15;
    case 'footnote':
    case 'footnote2':
      return 13;
    case 'caption':
      return 12;
    default:
      return 17;
  }
};

const FontFamily = (textStyle: string) => {
  switch (textStyle) {
    case 'largeTitle':
    case 'title':
    case 'title2':
    case 'title3':
      return 'Poppins-Bold';

    case 'body':
    case 'subheadline':
    case 'footnote':
    case 'caption':
      return 'Inter-Regular';

    case 'headline':
    case 'footnote2':
    case 'subheadline2':
      return 'Inter-SemiBold';
  }
};

export const getFont = (textStyle: string) => {
  return {
    fontSize: fontSize(FontSize(textStyle)),
    fontFamily: FontFamily(textStyle),
  };
};

export enum TextStyle {
  title = 'title',
  largeTitle = 'largeTitle',
  title2 = 'title2',
  title3 = 'title3',
  body = 'body',
  subheadline = 'subheadline',
  caption = 'caption',
  headline = 'headline',
  subheadline2 = 'subheadline2',
  footnote = 'footnote',
  footnote2 = 'footnote2',
}
