import { colors, fontSize } from 'app/constants/theme';
import { Text } from 'app/lib';
import { moderateScale } from 'app/lib/ResponsiveSize';
import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';

interface Props {
  icon: any;
  groupName: string;
  description: string;
  time: string;
  numberOfChat: number;
}
const Communitycomponent = ({ icon, groupName, description, time, numberOfChat }: Props) => {
  return (
    <TouchableOpacity style={styles.container}>
      <View style={{ flexDirection: 'row', columnGap: 10 }}>
        <View style={styles.icon}>{icon}</View>
        <View style={{ justifyContent: 'center' }}>
          <Text size={fontSize.medium} family="bold" color='white'>
            {groupName}
          </Text>
          <Text size={fontSize.small} family="light" color='white'>
            {description}
          </Text>
        </View>
      </View>
      <View style={{ alignItems: 'flex-end' }}>
        <Text
          size={fontSize.small}
          family="bold"
          color={colors.theme.primary}
          style={{ padding: 5, backgroundColor: colors.theme.secondary300, borderRadius: 50 }}>
          {numberOfChat}
        </Text>
        <Text size={fontSize.small} family="light" color={colors.theme.secondary300}>
          {time}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default Communitycomponent;

const styles = StyleSheet.create({
  icon: {
    width: moderateScale(40),
    height: moderateScale(40),
    backgroundColor: colors.theme.secondary300,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 15,
    backgroundColor: colors.theme.secondary200,
    marginBottom: 10,
    borderRadius: 15,
  },
});
