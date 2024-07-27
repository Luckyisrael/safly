import { colors, fontSize } from 'app/constants/theme';
import { Text } from 'app/lib';
import { moderateScale } from 'app/lib/ResponsiveSize';
import { ArrowRight2 } from 'iconsax-react-native';
import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';

const ProfileIcons = ({ icon, text }: any) => {
  return (
    <TouchableOpacity style={styles.first}>
      <View style={{ flexDirection: 'row', columnGap: 10, alignItems: 'center' }}>
        <View style={styles.second}>{icon}</View>
        <Text family="light" size={fontSize.medium} color="white">
          {text}
        </Text>
      </View>
      <ArrowRight2 size="26" color={colors.theme.secondary} variant="Outline" />
    </TouchableOpacity>
  );
};

export default ProfileIcons;

const styles = StyleSheet.create({
  first: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  second: {
    width: moderateScale(40),
    height: moderateScale(40),
    borderRadius: moderateScale(20),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.theme.secondary400,
  },
});
