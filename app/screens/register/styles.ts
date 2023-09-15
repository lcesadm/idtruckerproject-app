import { StyleSheet } from 'react-native';
import { Dimensions } from 'react-native';

const win = Dimensions.get('window');
const ratio = win.width / 541;

const styles = StyleSheet.create({
  container: {
    marginBottom: 100,
    alignItems: 'center',
  },
  containerButton: {
    width: 300,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  textTitle: {
    margin: 40,
    fontSize: 60,
    color: 'white',
    fontFamily: 'Barlow-Bold',
  },
  text: {
    margin: 10,
    fontSize: 40,
    color: 'white',
    fontFamily: 'Barlow-SemiBold',
  },
  image: {
    width: win.width,
    height: 1150 * ratio,
    position: 'absolute',
    tintColor: '#445AA7',
  },
});

export default styles;