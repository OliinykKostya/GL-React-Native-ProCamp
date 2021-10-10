import {StyleSheet} from 'react-native';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';
import mainStyles from '../../styles/mainStyles';

export default StyleSheet.create({
  image: {
    position: 'absolute',
    alignSelf: 'center',
    marginTop: heightPercentageToDP(15),
  },
  contentContainer: {
    backgroundColor: 'white',
    paddingHorizontal: widthPercentageToDP(5.1),
    alignItems: 'center',
  },
  titleContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: heightPercentageToDP(7.47),
    paddingHorizontal: widthPercentageToDP(12),
  },
  titleH2: {
    ...mainStyles.mainButtonTitle,
    marginBottom: heightPercentageToDP(1.76),
    fontWeight: '700',
    fontSize: 30,
    color: '#3F414E',
  },
  titleH3: {
    ...mainStyles.mainButtonTitle,
    fontWeight: '300',
    fontSize: 16,
    color: '#A1A4B2',
  },
  singInButton: {
    ...mainStyles.mainButton,
    backgroundColor: '#8E97FD',
    marginBottom: heightPercentageToDP(2.35),
  },
  singInButtonTitle: mainStyles.mainButtonTitle,

  logInContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  descriptionLoginButton: {
    ...mainStyles.mainButtonTitle,
    color: '#A1A4B2',
    marginRight: 5,
  },
  textButtomStyle: {
    ...mainStyles.mainButtonTitle,
    color: '#8E97FD',
  },
});
