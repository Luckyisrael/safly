import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { colors, fontSize } from 'app/constants/theme';
import { Container, Text, Input, Button } from 'app/lib';
import { RootStackParamList } from 'app/navigation';
import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';

type WelcomeScreenNavigationProps = StackNavigationProp<RootStackParamList, 'Welcome'>;

const Register = () => {
  const navigation = useNavigation<WelcomeScreenNavigationProps>();

  const handleSignup = () => {
    navigation.navigate('TabNavigation');
  };


  return (
    <Container>
      <View style={styles.container}>
        <View style={styles.spacing}>
          <Text family="medium" color={colors.theme.lightgrey} size={fontSize.small}>
            Full Name
          </Text>
          <Input placeholder="fullname" />
        </View>
        <View style={styles.spacing}>
          <Text family="medium" color={colors.theme.lightgrey} size={fontSize.small}>
            Phone Number
          </Text>
          <Input placeholder="phone number" />
        </View>
        <View style={styles.spacing}>
          <Text family="medium" color={colors.theme.lightgrey} size={fontSize.small}>
            Email
          </Text>
          <Input placeholder="email" />
        </View>
        <View style={styles.spacing}>
          <Text family="medium" color={colors.theme.lightgrey} size={fontSize.small}>
            Password
          </Text>
          <Input placeholder="password" secureTextEntry />
        </View>
        <View style={styles.spacing}>
          <Text family="medium" color={colors.theme.lightgrey} size={fontSize.small}>
            Confirm Password
          </Text>
          <Input placeholder="confirm password" secureTextEntry />
        </View>

        <View style={styles.spacing}>
          <Button label="Sign Up" onPress={handleSignup}/>
          <View>
            <Text family="medium" color={colors.theme.lightgrey} size={fontSize.small}>
              Already have an account?
            </Text>
            <TouchableOpacity onPress={handleSignup}>
              <Text family="medium" color={colors.theme.secondary} size={fontSize.small}>
                Create a new account
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Container>
  );
};

export default Register;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    rowGap: 10,
    justifyContent: 'center'
  },
  spacing: {
    rowGap: 10,
  },
});
