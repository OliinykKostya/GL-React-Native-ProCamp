import {StyleSheet} from 'react-native';
import {heightPercentageToDP} from 'react-native-responsive-screen';
import {HelveticaNeueMedium} from './fonts';

const mainStyles = StyleSheet.create({
  mainButton: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: heightPercentageToDP(3.1),
    backgroundColor: '#7583CA',
    width: '100%',
    borderRadius: 38,
  },
  mainButtonTitle: {
    fontFamily: HelveticaNeueMedium,
    fontWeight: '400',
    fontSize: 14,
    textAlign: 'center',
    color: '#F6F1FB',
    fontStyle: 'normal',
  },
});

export default mainStyles;
