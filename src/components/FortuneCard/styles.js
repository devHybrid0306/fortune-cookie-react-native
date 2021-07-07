import { StyleSheet } from 'react-native';
import { RatioW } from '../../utils';

const styles = StyleSheet.create({
  container: {
    height: 150 * RatioW,
    padding: 20 * RatioW,
    backgroundColor: '#0ab5ff',
    borderRadius: 20 * RatioW,
    marginBottom: 10 * RatioW,
    marginLeft: 3 * RatioW,
    marginRight: 3 * RatioW,
    alignSelf: 'center',
    justifyContent: 'space-between',
  },
  dateContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, .2)',
    width: 120 * RatioW,
    borderRadius: 10 * RatioW,
  },
  title: {
    fontSize: 15 * RatioW,
    color: '#ffffff',
    marginBottom: 20 * RatioW,
  },
  date: {
    fontSize: 12 * RatioW,
    color: '#ffffff',
    textAlign: 'center',
    padding: 3 * RatioW,
  },
});

export default styles;
