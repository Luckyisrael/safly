import { colors } from 'app/constants/theme';
import { moderateScale } from 'app/lib/ResponsiveSize';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const EmergencyIcons = ({ icon }: any) => {
  return (
    <TouchableOpacity style={styles.first}>
      <View style={styles.second}>{icon}</View>
    </TouchableOpacity>
  );
};

export default EmergencyIcons;

const styles = StyleSheet.create({
  first: {
    width: moderateScale(50),
    height: moderateScale(50),
    borderRadius: moderateScale(25),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.theme.secondary400,
  },
  second: {
    width: moderateScale(40),
    height: moderateScale(40),
    borderRadius: moderateScale(20),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.theme.secondary300,
  },
});
