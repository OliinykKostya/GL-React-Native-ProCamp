import React from 'react';
import {Text, View, Image} from 'react-native';
import LabelNameOfApp from '../../components/LabelNameOfApp';

import MainIcon from '../../components/Svg/MainIcon';
import MainButton from '../../components/Buttons/MainButton';
import styles from './styles';
import {
  LOGIN_SCREEN,
  REGISTRATION_SCREEN,
} from '../../navigation/routes';
import Title from '../../components/Title';

const Main = ({navigation}: any) => {
  return (
    <View>
      <LabelNameOfApp />
      <MainIcon props />
      <Image
        style={styles.image}
        source={require('../../../assets/Group.png')}
      />
      <View style={styles.contentContainer}>
        <View style={styles.titleContainer}>
          <Title title="We are what we do" titleStyle={styles.titleH2} />
          <Text style={styles.titleH3}>
            Thousand of people are usign silent moon for smalls meditation
          </Text>
        </View>
        <MainButton
          title="SIGN UP"
          titleStyle={styles.singInButtonTitle}
          buttonStyle={styles.singInButton}
          onPress={() => navigation.navigate(REGISTRATION_SCREEN)}
        />
        <View style={styles.logInContainer}>
          <Text style={styles.descriptionLoginButton}>
            ALREADY HAVE AN ACCOUNT?
          </Text>
          <MainButton
            title="LOG IN"
            titleStyle={styles.textButtomStyle}
            onPress={() => navigation.navigate(LOGIN_SCREEN)}
          />
        </View>
      </View>
    </View>
  );
};

export default Main;
