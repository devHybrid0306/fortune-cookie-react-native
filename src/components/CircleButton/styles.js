import { StyleSheet } from 'react-native';
import { RatioW } from '../../utils';

const styles = StyleSheet.create({
  container: {
    width: 50 * RatioW,
    height: 50 * RatioW,
    borderRadius: 25 * RatioW,
    backgroundColor: '#000000',
    justifyContent: 'center',
    alignItems: 'center',

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.41,
    shadowRadius: 9.11,

    elevation: 14,
  },
  text: {
    fontSize: 40 * RatioW,
    color: '#ffffff',
  },
});

export default styles;
