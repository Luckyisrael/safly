import React, { useRef, useState } from 'react';
import { Animated, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { colors } from 'app/constants/theme';
import { moderateScale } from './ResponsiveSize';

interface InputProps {
  containerStyle?: any;
  placeholder: string;
  onChangeText?: (text: string) => void;
  error?: string;
  secureTextEntry?: boolean;
}

const Input: React.FC<InputProps> = ({ containerStyle, placeholder, onChangeText, error, ...props }) => {
  const [isFocused, setIsFocused] = useState<boolean>(false);
  const [text, setText] = useState<string>('');
  const [showPassword, setShowPassword] = useState<boolean>(props.secureTextEntry || false);
  const labelPosition = useRef(new Animated.Value(text ? 1 : 0)).current;

  const handleFocus = () => {
    setIsFocused(true);
    animatedLabel(1);
  };

  const handleBlur = () => {
    setIsFocused(false);
    if (!text) {
      animatedLabel(0);
    }
  };

  const handleTextChange = (text: string) => {
    setText(text);
    if (onChangeText) {
      onChangeText(text);
    }
    if (text) {
      animatedLabel(1);
    } else {
      animatedLabel(isFocused ? 1 : 0);
    }
  };

  const animatedLabel = (toValue: number) => {
    Animated.timing(labelPosition, {
      toValue,
      duration: 200,
      useNativeDriver: false,
    }).start();
  };

  const labelStyle = {
    left: 10,
    top: labelPosition.interpolate({
      inputRange: [0, 1],
      outputRange: [17, 0],
    }),
    fontSize: labelPosition.interpolate({
      inputRange: [0, 1],
      outputRange: [16, 14],
    }),
    color: labelPosition.interpolate({
      inputRange: [0, 1],
      outputRange: ['gray', '#888'],
    }),
  };

  return (
    <View style={containerStyle}>
      <View style={[styles.innerContainer, error && { borderColor: 'red' }]}>
        <Animated.Text style={[styles.label, labelStyle]}>{placeholder}</Animated.Text>
        <View style={styles.inputContainer}>
          <TextInput
            {...props}
            style={styles.input}
            onFocus={handleFocus}
            onBlur={handleBlur}
            onChangeText={handleTextChange}
            value={text}
            textAlignVertical="center"
            textContentType={props.secureTextEntry ? 'newPassword' : props.secureTextEntry}
            secureTextEntry={showPassword}
          />
          {props.secureTextEntry && !!text && (
            <View>
              <TouchableOpacity
                style={{ width: 24 }}
                onPress={() => setShowPassword(!showPassword)}>
                {!showPassword ? (
                  <Ionicons name="eye-outline" color="gray" size={24} />
                ) : (
                  <Ionicons name="eye-off-outline" color="gray" size={24} />
                )}
              </TouchableOpacity>
            </View>
          )}
        </View>
      </View>
      {error && <Text style={styles.errorText}>{error}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  innerContainer: {
    backgroundColor: colors.theme.secondary200,
    borderRadius: 12,
    height: 60,
    justifyContent: 'center',
  },
  label: {
    position: 'absolute',
    color: 'gray',
    paddingLeft: 20
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingRight: 10,
    borderWidth: 2,
    borderColor: colors.theme.secondary,
    borderRadius: moderateScale(12)
  },
  input: {
    flex: 1,
    fontSize: 16,
    height: 50,
    marginTop: 10,
    paddingLeft: 10,
  },
  errorText: {
    marginTop: 5,
    fontSize: 14,
    color: 'red',
  },
});

export { Input };
