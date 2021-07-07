import { StyleSheet } from 'react-native';
import { RatioW } from '../../utils';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10 * RatioW,
    paddingTop: 50 * RatioW,
    alignSelf: 'center',
    width: '100%',
  },
  header: {
    paddingHorizontal: 10 * RatioW,
    alignItems: 'flex-end',
    marginBottom: 15 * RatioW,
  },
  textInput: {
    fontSize: 25 * RatioW,
  },
  buttonContainer: {
    backgroundColor: '#000000',
    width: 60 * RatioW,
    padding: 5 * RatioW,
    borderRadius: 10 * RatioW,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 15 * RatioW,
  },
});

export default styles;
