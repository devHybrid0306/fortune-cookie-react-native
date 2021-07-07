import React from 'react';
import { Text, TouchableWithoutFeedback, View } from 'react-native';

import { RatioW } from '../../utils';
import styles from './styles';

const CircleButton = ({
  handleButton,
  size,
  bkgColor = '#000000',
  text,
  textColor = '#ffffff',
  textSize,
}) => {
  return (
    <TouchableWithoutFeedback onPress={handleButton}>
      <View
        style={{
          ...styles.container,
          width: size * RatioW,
          height: size * RatioW,
          borderRadius: (size / 2) * RatioW,
          backgroundColor: bkgColor,
        }}>
        <Text style={{ ...styles.text, color: textColor, fontSize: textSize }}>{text}</Text>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default CircleButton;
