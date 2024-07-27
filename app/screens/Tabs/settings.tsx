import { EvilIcons } from '@expo/vector-icons';
import ProfileIcons from 'app/components/profileIcons';
import { colors, fontSize } from 'app/constants/theme';
import { Container, Text } from 'app/lib';
import { moderateScale } from 'app/lib/ResponsiveSize';
import {
  GlobalEdit,
  HashtagUp,
  MessageQuestion,
  ProfileTick,
  Star,
  ToggleOnCircle,
  Share,
  Lock,
  ArrowRight2,
} from 'iconsax-react-native';
import React from 'react';
import { FlatList, StyleSheet, View } from 'react-native';

const dummyData = [
  {
    id: '1',
    icon: <ToggleOnCircle size="32" color="black" variant="Bold" />,
    text: 'Mode',
  },
  {
    id: '2',
    icon: <GlobalEdit size="32" color="black" variant="Bold" />,
    text: 'Language',
  },
  {
    id: '3',
    icon: <HashtagUp size="28" color="black" variant="Bold" />,
    text: 'About',
  },
  {
    id: '4',
    icon: <MessageQuestion size="32" color="black" variant="Bold" />,
    text: 'Terms and Conditions',
  },
  {
    id: '5',
    icon: <Lock size="32" color="black" variant="Bold" />,
    text: 'Privacy Policy',
  },
  {
    id: '6',
    icon: <Star size="32" color="black" variant="Bold" />,
    text: 'Rate this app',
  },
  {
    id: '7',
    icon: <Share size="32" color="black" variant="Bold" />,
    text: 'Share this app',
  },
];

const renderItem = ({ item }: any) => <ProfileIcons icon={item.icon} text={item.text} />;

const Settings = () => {
  return (
    <Container>
      <View style={styles.pageTitle}>
        <Text family="medium" size={fontSize.medium}>
          Settings
        </Text>
      </View>
      <View style={styles.profileHeader}>
        <View style={styles.profile}>
          <View
            style={styles.icon}>
            <ProfileTick size="32" color='black'  variant="Outline"/>
          </View>
          <Text family="medium" size={fontSize.large} color="white">
            Edit Profile
          </Text>
        </View>
        <ArrowRight2 size="32" color="black" variant="Outline"/>
      </View>
      <View style={{ rowGap: 15, paddingHorizontal: 20 }}>
        <Text family="medium" size={fontSize.medium} color="white">
          General Settings
        </Text>
        <FlatList data={dummyData} renderItem={renderItem} keyExtractor={(item) => item.id} />
      </View>
    </Container>
  );
};

export default Settings;

const styles = StyleSheet.create({
  pageTitle: {
    backgroundColor: colors.theme.secondary,
    alignItems: 'center',
    paddingTop: 20,
  },
  profileHeader: {
    flexDirection: 'row',
    padding: 20,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  profile: {
    flexDirection: 'row',
    columnGap: 10,
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  icon: {
    backgroundColor: colors.theme.secondary,
    width: moderateScale(40),
    height: moderateScale(40),
    borderRadius: moderateScale(20),
    justifyContent: 'center',
    alignItems: 'center'
  }
});
