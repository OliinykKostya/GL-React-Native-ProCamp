import {StyleSheet} from 'react-native';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';
import {HelveticaNeueMedium} from '../../styles/fonts';
import mainStyles from '../../styles/mainStyles';

export default StyleSheet.create({
  contentContainer: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: 155,
    paddingHorizontal: widthPercentageToDP(5.1),
  },
  titleContainer: {
    marginBottom: heightPercentageToDP(3.55),
  },
  titleStyle: {
    fontWeight: '700',
    fontSize: 28,
    fontFamily: HelveticaNeueMedium,
  },
  facebookTitleStyle: mainStyles.mainButtonTitle,

  facebookButtonStyle: {
    ...mainStyles.mainButton,
    marginBottom: 20,
  },
  facebookButtonIconContainer: {position: 'absolute', left: 34},
  facebookButtonIconColor: {
    color: '#FFFFFF',
  },
  googleButtonStyle: {
    ...mainStyles.mainButton,
    borderWidth: 1,
    backgroundColor: 'white',
    borderColor: 'lightgrey',
    marginBottom: 40,
  },
  googleTitleStyle: {
    ...mainStyles.mainButtonTitle,
    color: '#3F414E',
  },
  googleButtonIconContainer: {width: 20, height: 20},
  titleH2: {
    ...mainStyles.mainButtonTitle,
    marginBottom: 40,
    fontWeight: '700',
    color: '#A1A4B2',
  },
  singInButton: {
    ...mainStyles.mainButton,
    backgroundColor: '#8E97FD',
    marginBottom: heightPercentageToDP(2.35),
  },
  singInButtonTitle: mainStyles.mainButtonTitle,
  forgotPassword: {
    ...mainStyles.mainButtonTitle,
    color: '#3F414E',
    marginBottom: 100,
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
  logInContainer: {
    flexDirection: 'row',
  },
});
