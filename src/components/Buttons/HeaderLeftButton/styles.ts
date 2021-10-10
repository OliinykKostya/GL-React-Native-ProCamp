import {StyleSheet} from 'react-native';
import {widthPercentageToDP} from 'react-native-responsive-screen';

export default StyleSheet.create({
  icon: {
    color: '#3F414E',
  },
  iconContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 55,
    height: 55,
    borderRadius: 50,
    borderWidth: 1,
    borderColor: 'lightgrey',
    marginLeft: widthPercentageToDP(4.7),
  },
});
