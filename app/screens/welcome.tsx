import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { colors, fontSize } from 'app/constants/theme';
import { Button, Container, Input, Text } from 'app/lib';
import { moderateScale } from 'app/lib/ResponsiveSize';
import { Image, StyleSheet, TouchableOpacity, View } from 'react-native';

import { RootStackParamList } from '../navigation';

type WelcomeScreenNavigationProps = StackNavigationProp<RootStackParamList, 'Welcome'>;

const logo = require('../../assets/icon.png');
const Welcome = () => {
  const navigation = useNavigation<WelcomeScreenNavigationProps>();

  const handleCreateAccount = () => {
    navigation.navigate('Register');
  };

  return (
    <Container>
      <View style={styles.container}>
        <Image source={logo} style={styles.logo} />
        <Text family="bold" size={fontSize.extraLarge} color="white">
          Welcome Back
        </Text>
        <Text family="light" size={fontSize.small} color="white">
          Sign in to continue
        </Text>
      </View>
      <View style={styles.footer}>
        <View style={styles.spacing}>
          <Text family="medium" color={colors.theme.lightgrey} size={fontSize.small}>
            Username
          </Text>
          <Input placeholder="username" />
        </View>
        <View style={styles.spacing}>
          <Text family="medium" color={colors.theme.lightgrey} size={fontSize.small}>
            Password
          </Text>
          <Input placeholder="password" />
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <Text family="medium" color={colors.theme.lightgrey} size={fontSize.small}>
            Remember me
          </Text>
          <Text family="medium" color={colors.theme.secondary} size={fontSize.small}>
            Forgot Password?
          </Text>
        </View>
        <View>
          <Button label="Login" onPress={handleCreateAccount} />
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'flex-end' }}>
          <Text family="medium" color={colors.theme.lightgrey} size={fontSize.small}>
            Don't have an account?{' '}
          </Text>
          <TouchableOpacity onPress={handleCreateAccount}>
            <Text family="medium" color={colors.theme.secondary} size={fontSize.small}>
              Create a new account
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </Container>
  );
};

export default Welcome;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    rowGap: 10,
    paddingHorizontal: 20,
  },
  footer: {
    flex: 1,
    backgroundColor: colors.theme.secondary200,
    padding: 20,
    rowGap: 10,
    borderTopEndRadius: 20,
    borderTopStartRadius: 20,
  },
  logo: {
    width: moderateScale(70),
    height: moderateScale(70),
  },
  spacing: {
    rowGap: 10,
  },
});
