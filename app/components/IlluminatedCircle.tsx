import { colors } from 'app/constants/theme';
import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import Svg, { Defs, RadialGradient, Stop, Circle } from 'react-native-svg';

interface IlluminatedCircleImageProps {
  imageUrl: any;
  size: number;
  borderWidth?: number;
  illuminationColor?: string;
  illuminationWidth?: number;
}

const IlluminatedCircleImage: React.FC<IlluminatedCircleImageProps> = ({
  imageUrl,
  size,
  borderWidth = 0.2,
  illuminationColor = 'rgb(173, 216, 230)', // Light blue
  illuminationWidth = 20,
}) => {
  const totalSize = size + illuminationWidth * 2;
  const center = totalSize / 2;
  const imageRadius = size / 2;

  return (
    <View style={[styles.container, { width: totalSize, height: totalSize }]}>
      <Svg height={totalSize} width={totalSize}>
        <Defs>
          <RadialGradient
            id="grad"
            cx="50%"
            cy="50%"
            rx="50%"
            ry="50%"
            gradientUnits="userSpaceOnUse">
            <Stop offset="0%" stopColor={illuminationColor} stopOpacity="0.9" />
            <Stop offset="100%" stopColor={illuminationColor} stopOpacity="0" />
          </RadialGradient>
        </Defs>
        <Circle cx={center} cy={center} r={center} fill="url(#grad)" />
      </Svg>
      <View
        style={[
          styles.imageContainer,
          {
            width: size,
            height: size,
            borderRadius: size / 2,
            borderWidth,
            position: 'absolute',
            top: illuminationWidth,
            left: illuminationWidth,
          },
        ]}>
        <Image
          source={imageUrl}
          style={[
            styles.image,
            {
              width: size - borderWidth * 2,
              height: size - borderWidth * 2,
              borderRadius: (size - borderWidth * 2) / 2,
            },
          ]}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: 'white',
    overflow: 'hidden',
    backgroundColor: colors.theme.primary
  },
  image: {
    resizeMode: 'cover',
  },
});

export default IlluminatedCircleImage;
