import { colors, fontSize } from 'app/constants/theme';
import { Text } from 'app/lib';
import { moderateScale } from 'app/lib/ResponsiveSize';
import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';

interface NavigationButtonsProps {
  icon: any;
  description: string;
  onPress: () => void;
}

const NavigationButtons = ({ icon, description, onPress }: NavigationButtonsProps) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.button}>
      <View style={styles.icon}>{icon}</View>
      <Text color={colors.theme.secondary} family="bold" size={fontSize.medium}>
        {description}
      </Text>
    </TouchableOpacity>
  );
};

export default NavigationButtons;

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.theme.primary,
    width: '40%',
    height: '40%',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    rowGap: 10,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: colors.theme.lightgrey,
    padding: 10
  },
  icon: {
    backgroundColor: colors.theme.secondary,
    height: moderateScale(50),
    width: moderateScale(50),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
  },
});
