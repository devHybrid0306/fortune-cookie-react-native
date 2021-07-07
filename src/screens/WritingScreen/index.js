import React, { useState, useEffect } from 'react';
import {
  View,
  TextInput,
  Text,
  KeyboardAvoidingView,
  Keyboard,
  TouchableOpacity,
} from 'react-native';
import useKeyboardHeight from 'react-native-use-keyboard-height';

import { CircleButton } from '../../components';
import styles from './styles';

const WritingScreen = ({ navigation }) => {
  const [value, setValue] = useState('');
  const [isKeyboardVisible, setKeyboardVisible] = useState(false);
  const keyboardHeight = useKeyboardHeight();

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', () => {
      setKeyboardVisible(true);
    });
    const keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', () => {
      setKeyboardVisible(false);
    });

    return () => {
      keyboardDidHideListener.remove();
      keyboardDidShowListener.remove();
    };
  }, []);

  const handleClose = () => {
    navigation.goBack();
  };

  return (
    <KeyboardAvoidingView style={styles.container}>
      <View style={styles.header}>
        <CircleButton handleButton={handleClose} size={40} text={'✕'} textSize={25} />
      </View>
      <TextInput
        style={styles.textInput}
        value={value}
        onChangeText={(val) => setValue(val)}
        placeholder={'Start writing...'}
        placeholderTextColor={'#858585'}
        returnKeyType={'done'}
      />
      {isKeyboardVisible && (
        <TouchableOpacity
          onPress={handleClose}
          style={{ position: 'absolute', right: 10, bottom: keyboardHeight }}>
          <View style={styles.buttonContainer}>
            <Text style={styles.buttonText}>Done</Text>
          </View>
        </TouchableOpacity>
      )}
    </KeyboardAvoidingView>
  );
};

export default WritingScreen;
