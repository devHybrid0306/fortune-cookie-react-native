import React, { useState } from 'react';
import { FlatList, Text, View } from 'react-native';

import { CircleButton, FortuneCard, FortuneModal } from '../../components';
import fortuneJson from './fortune-data.json';
import styles from './styles';

const HomeScreen = ({ navigation }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [fortuneDetail, setFortuneDetail] = useState(null);

  const renderItem = ({ item, index }) => {
    return <FortuneCard key={index} isFull={index % 5 === 0} handleCard={handleCard} {...item} />;
  };

  const handleButton = () => {
    navigation.navigate('Writing');
  };

  const handleCard = ({ text, date, mColor }) => {
    setIsVisible(true);
    setFortuneDetail({ text, date, mColor });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>My Fortunes</Text>
      <FlatList
        contentContainerStyle={styles.flatList}
        data={fortuneJson.fortunes}
        renderItem={renderItem}
        keyExtractor={(item, index) => index}
      />
      <View style={styles.circleContainer}>
        <CircleButton handleButton={handleButton} size={50} text={'+'} textSize={35} />
      </View>
      {fortuneDetail && (
        <FortuneModal
          isVisible={isVisible}
          data={fortuneDetail}
          closeModal={() => setIsVisible(false)}
        />
      )}
    </View>
  );
};

export default HomeScreen;
