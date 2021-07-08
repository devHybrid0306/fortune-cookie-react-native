import { StyleSheet } from 'react-native';
import { RatioW } from '../../utils';

const styles = StyleSheet.create({
  modal: {
    margin: 0,
  },
  container: {
    flex: 1,
    padding: 20 * RatioW,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 25 * RatioW,
    color: '#ffffff',
    textAlign: 'center',
  },
  dateContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, .2)',
    width: 120 * RatioW,
    borderRadius: 10 * RatioW,
    position: 'absolute',
    bottom: 50 * RatioW,
  },
  date: {
    fontSize: 12 * RatioW,
    color: '#ffffff',
    textAlign: 'center',
    padding: 3 * RatioW,
  },
});

export default styles;
