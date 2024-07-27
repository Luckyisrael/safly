import { FontAwesome6, MaterialCommunityIcons } from '@expo/vector-icons';
import Communitycomponent from 'app/components/communitycomponent';
import { colors, fontSize } from 'app/constants/theme';
import { Container, Text } from 'app/lib';
import { StatusBar } from 'expo-status-bar';
import { HashtagUp, People } from 'iconsax-react-native';
import React from 'react';
import { FlatList, StyleSheet, View } from 'react-native';

const dummyData = [
  {
    id: '1',
    icon: <HashtagUp size="28" color="black" variant="Bulk" />,
    groupName: 'Discussion forums',
    description: 'Do more of what you love',
    time: '12:00 PM',
    numberOfChat: 10,
  },
  {
    id: '2',
    icon: <HashtagUp size="28" color="black" variant="Bulk" />,
    groupName: 'Support Groups',
    description: 'Do your thing',
    time: '1:00 PM',
    numberOfChat: 20,
  },
  {
    id: '3',
    icon: <HashtagUp size="28" color="black" variant="Bulk" />,
    groupName: 'Events and workshop',
    description: 'Join us by 7pm',
    time: '2:00 PM',
    numberOfChat: 30,
  },
  {
    id: '4',
    icon: <HashtagUp size="28" color="black" variant="Bulk" />,
    groupName: 'Q & A Session',
    description: 'Live your purpose',
    time: '3:00 PM',
    numberOfChat: 40,
  },
  {
    id: '5',
    icon: <People size="24" color="black" variant="Bulk"/>,
    groupName: 'Councelor',
    description: 'Live your purpose',
    time: '3:00 PM',
    numberOfChat: 40,
  },
  {
    id: '6',
    icon: <FontAwesome6 name="house-fire" size={24} color="black" />,
    groupName: 'Fire station',
    description: 'you cam on time',
    time: '3:00 PM',
    numberOfChat: 40,
  },  {
    id: '7',
    icon: <MaterialCommunityIcons name="police-badge" size={24} color="black" />,
    groupName: 'Police',
    description: 'he was arrested yesterday',
    time: '3:00 PM',
    numberOfChat: 40,
  },
];

const renderItem = ({ item }: any) => (
  <Communitycomponent
    icon={item.icon}
    groupName={item.groupName}
    description={item.description}
    time={item.time}
    numberOfChat={item.numberOfChat}
  />
);

const Community = () => {
  return (
    <Container>
      <StatusBar backgroundColor={colors.theme.secondary} />
      <View style={styles.pageTitle}>
        <Text family="medium" size={fontSize.medium}>
          Community
        </Text>
      </View>
      <View style={styles.chatHeader}>
        <Text color={colors.theme.secondary} size={fontSize.small}>
          Mark all read
        </Text>
        <Text color={colors.theme.secondary} size={fontSize.small}>
          Sort by time{' '}
        </Text>
      </View>
      <View style={styles.group}>
        <FlatList data={dummyData} renderItem={renderItem} keyExtractor={(item) => item.id} />
      </View>
    </Container>
  );
};

export default Community;

const styles = StyleSheet.create({
  pageTitle: {
    backgroundColor: colors.theme.secondary,
    alignItems: 'center',
    paddingTop: 20,
  },
  chatHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 20,
    paddingHorizontal: 20,
  },
  group: {
    flex: 1,
    paddingHorizontal: 20,
  },
});
