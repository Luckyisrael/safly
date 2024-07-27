import { MaterialCommunityIcons } from '@expo/vector-icons';
import EmergencyIcons from 'app/components/emergencyIcons';
import { colors, fontSize } from 'app/constants/theme';
import { Container, Text } from 'app/lib';
import { moderateScale } from 'app/lib/ResponsiveSize';
import { Microphone, Video, VolumeHigh } from 'iconsax-react-native';
import React from 'react';
import { StyleSheet, View } from 'react-native';

const Emergency = () => {
  return (
    <Container>
      <View style={styles.container}>
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', rowGap: 20 }}>
          <View style={styles.first}>
            <View style={styles.second}>
              <View style={styles.third}>
                <MaterialCommunityIcons name="bell-ring" size={24} color="black" />
                <Text family="bold" size={fontSize.medium}>
                  SOS
                </Text>
              </View>
            </View>
          </View>
          <Text color={colors.theme.secondary400} family="light" size={fontSize.medium}>
            Press the button below help will reach you soon
          </Text>
        </View>
        <View style={styles.communication}>
          <EmergencyIcons icon={<Microphone size="25" color="black" variant="Bulk" />} />
          <EmergencyIcons icon={<Video size="25" color="black" variant="Bold" />} />
          <EmergencyIcons icon={<VolumeHigh size="25" color="black" variant="Bold" />} />
        </View>
      </View>
    </Container>
  );
};

export default Emergency;

const styles = StyleSheet.create({
  first: {
    width: moderateScale(120),
    height: moderateScale(120),
    borderRadius: moderateScale(60),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.theme.secondary400,
  },
  second: {
    width: moderateScale(100),
    height: moderateScale(100),
    borderRadius: moderateScale(50),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.theme.secondary300,
  },
  third: {
    width: moderateScale(80),
    height: moderateScale(80),
    borderRadius: moderateScale(40),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.theme.secondary,
  },
  container: {
    flex: 1,
    alignItems: 'center',
  },
  communication: {
    flex: 1,
    flexDirection: 'row',
    columnGap: 15,
  },
});
