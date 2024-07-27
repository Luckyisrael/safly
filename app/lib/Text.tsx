/* eslint-disable import/order */
/* eslint-disable prettier/prettier */
import React from 'react';
import { Text as RNText, type TextProps, TextStyle } from 'react-native';
import { moderateScale } from './ResponsiveSize';

export type ThemedTextProps = TextProps & {
  lightColor?: string;
  darkColor?: string;
  type?: 'default' | 'title' | 'defaultSemiBold' | 'subtitle' | 'link';
  children:
  | React.ReactElement
  | React.ReactElement[]
  | React.JSX.Element
  | string
  | string[]
  | React.JSX.Element[]
  | number
  | number[];
size?: number;
color?: string;
style?: TextStyle;
numberOfLines?: number;
family?:
  | 'bold'
  | 'medium'
  | 'light'
  | 'regular'
  | 'semi-bold'
  | 'extra-bold'
  | 'extra-light';
};

const Text = ({lightColor, darkColor, type = 'default', children, size, style, numberOfLines, family, color}: ThemedTextProps) => {

  return (
    <RNText 
      style={[
        {
          fontSize: moderateScale(size || 12),
          fontFamily: renderFamily(family) || 'TitilliumWeb-Regular',
          color: color 
        },
      
        style,
      ]}
      numberOfLines={numberOfLines}
    >
      {children}
    </RNText>
  );
};

const renderFamily = (type: string | undefined) => {
  switch (type) {
    case "black":
      return "CircularStd-Black";
    case "black-italic":
      return "CircularStd-BlackItalic";
    case "bold":
      return "CircularStd-Bold";
    case "bold-italic":
      return "CircularStd-BoldItalic";
    case "book":
      return "CircularStd-Book";
    case "medium":
      return "CircularStd-Medium";
    case "light":
      return "CircularStd-Light";
    default:
      return "CircularStd-Book";
  }
};

export { Text };
