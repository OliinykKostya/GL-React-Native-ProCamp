import {StyleSheet} from 'react-native';
import {heightPercentageToDP} from 'react-native-responsive-screen';
import { AirbnbCerealMedium } from '../../styles/fonts';

export default StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    marginTop: heightPercentageToDP(8),
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    zIndex: 999,
  },
  title: {
    fontWeight: '700',
    fontSize: 16,
    color: '#3F414E',
      fontFamily: AirbnbCerealMedium,
  },
  titleIcon: {
    width: 30,
    height: 30,
  },
});
