import {Formik} from 'formik';
import React from 'react';
import {View, Text, Image, Alert} from 'react-native';
import {heightPercentageToDP} from 'react-native-responsive-screen';
import EvilIcons from 'react-native-vector-icons/EvilIcons';

import MainButton from '../../components/Buttons/MainButton';
import CustomTextInput from '../../components/CustomTextInput';
import Title from '../../components/Title';
import {REGISTRATION_SCREEN} from '../../navigation/routes';
import {SignupSchema} from '../../validation/login';

import styles from './styles';

const Login = ({navigation}: any) => {
  const login = values => {
    console.log(Alert.alert('PUSHED LOGIN SUBMIT'));
  };
  return (
    <View style={{flex: 1}}>
      <View>
        <Image
          source={require('../../../assets/LoginBackground.png')}
          resizeMode={'stretch'}
          style={{
            width: '100%',
            height: 300,
            flex: 1,
            position: 'absolute',
          }}
        />
      </View>
      <View style={styles.contentContainer}>
        <View style={styles.titleContainer}>
          <Title title="Welcome Back!" titleStyle={styles.titleStyle} />
        </View>
        <MainButton
          title="CONTINUE WITH FACEBOOK"
          titleStyle={styles.facebookTitleStyle}
          buttonStyle={styles.facebookButtonStyle}
          onPress={() => Alert.alert('PUSHED CONTINUE WITH FACEBOOK')}
          iconContainerStyle={styles.facebookButtonIconContainer}
          icon={
            <EvilIcons
              name="sc-facebook"
              style={styles.facebookButtonIconColor}
              size={heightPercentageToDP(3)}
            />
          }
        />
        <MainButton
          title="CONTINUE WITH GOOGLE"
          titleStyle={styles.googleTitleStyle}
          buttonStyle={styles.googleButtonStyle}
          iconContainerStyle={styles.facebookButtonIconContainer}
          icon={
            <Image
              style={styles.googleButtonIconContainer}
              source={require('../../../assets/googleIcon.png')}
            />
          }
          onPress={() => Alert.alert('PUSHED CONTINUE WITH GOOGLE')}
        />
        <Text style={styles.titleH2}>OR LOG IN WITH EMAIL</Text>
        <Formik
          initialValues={{email: '', password: ''}}
          onSubmit={values => login(values)}
          validationSchema={SignupSchema}>
          {({
            handleBlur,
            handleChange,
            errors,
            values,
            touched,
            handleSubmit,
          }) => {
            return (
              <>
                <View style={{marginBottom: 20, width: '100%'}}>
                  <CustomTextInput
                    error={errors.email}
                    touched={touched.email}
                    textInputProps={{
                      autoCompleteType: 'email',
                      keyboardType: 'email-address',
                      textContentType: 'emailAddress',
                      value: values.email,
                      placeholder: 'Email address',
                      onBlur: handleBlur('email'),
                      onChangeText: handleChange('email'),
                    }}
                  />
                </View>
                <View style={{marginBottom: 40, width: '100%'}}>
                  <CustomTextInput
                    error={errors.password}
                    touched={touched.password}
                    textInputProps={{
                      autoCompleteType: 'password',
                      textContentType: 'password',
                      secureTextEntry: true,
                      value: values.password,
                      placeholder: 'Password',
                      onBlur: handleBlur('password'),
                      onChangeText: handleChange('password'),
                    }}
                  />
                </View>
                <MainButton
                  title="LOG IN"
                  onPress={handleSubmit}
                  buttonStyle={styles.singInButton}
                  titleStyle={styles.singInButtonTitle}
                />
              </>
            );
          }}
        </Formik>
        <MainButton
          title="Forgot Password?"
          titleStyle={styles.forgotPassword}
          onPress={() =>
            console.log(Alert.alert('NAvIGATED to RESET SCREEN Password'))
          }
        />
        <View style={styles.logInContainer}>
          <Text style={styles.descriptionLoginButton}>
            ALREADY HAVE AN ACCOUNT?
          </Text>
          <MainButton
            title=" SIGN UP"
            onPress={() => navigation.navigate(REGISTRATION_SCREEN)}
            titleStyle={styles.textButtomStyle}
          />
        </View>
      </View>
    </View>
  );
};
export default Login;
