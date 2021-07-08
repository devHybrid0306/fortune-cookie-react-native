import React from 'react';
import { Text, View } from 'react-native';
import Modal from 'react-native-modal';

import { getFormattedDate, RatioW } from '../../utils';
import CircleButton from '../CircleButton';
import styles from './styles';

const FortuneModal = ({ isVisible, closeModal, data }) => {
  return (
    <Modal
      isVisible={isVisible}
      onBackButtonPress={closeModal}
      customBackdrop={<View style={{ flex: 1, backgroundColor: data?.mColor }} />}
      backdropOpacity={1}
      animationIn={'zoomIn'}
      animationOut={'zoomOut'}
      style={styles.modal}>
      <View style={{ ...styles.container, backgroundColor: data?.mColor }}>
        <View style={{ position: 'absolute', top: 50 * RatioW, right: 20 * RatioW }}>
          <CircleButton
            handleButton={closeModal}
            size={40}
            bkgColor={'#ffffff'}
            text={'✕'}
            textColor={data?.mColor}
            textSize={25}
          />
        </View>
        <Text style={styles.text}>{data?.text}</Text>
        <View style={styles.dateContainer}>
          <Text style={styles.date}>{getFormattedDate(data?.date)}</Text>
        </View>
      </View>
    </Modal>
  );
};

export default FortuneModal;
