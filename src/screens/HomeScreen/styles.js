import { StyleSheet } from 'react-native';
import { RatioW } from '../../utils';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10 * RatioW,
    alignItems: 'center',
    paddingTop: 50 * RatioW,
    alignSelf: 'center',
  },
  title: {
    fontSize: 25 * RatioW,
    color: '#000000',
    paddingBottom: 20 * RatioW,
    alignSelf: 'flex-start',
  },
  flatList: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  circleContainer: {
    position: 'absolute',
    bottom: 50 * RatioW,
    right: 10 * RatioW,
    zIndex: 1,
  },
});

export default styles;
