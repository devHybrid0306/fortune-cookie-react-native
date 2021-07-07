import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

import { getFormattedDate, getRandomColor, RatioW, width } from '../../utils';
import styles from './styles';

const FortuneCard = ({ text, date, isFull, handleCard }) => {
  const mWidth = isFull ? width - 40 * RatioW : (width - 50 * RatioW) / 2;
  const mHeight = isFull ? 150 * RatioW : 220 * RatioW;

  const mColor = getRandomColor();

  return (
    <TouchableOpacity onPress={() => handleCard({ text, date, mColor })}>
      <View
        style={{
          ...styles.container,
          width: mWidth,
          height: mHeight,
          backgroundColor: mColor,
        }}>
        <Text style={styles.title}>{text}</Text>
        <View style={styles.dateContainer}>
          <Text style={styles.date}>{getFormattedDate(date)}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default FortuneCard;
