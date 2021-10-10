import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {useNavigation} from '@react-navigation/core';

import Main from '../../containers/Main';
import {LOGIN_SCREEN, MAIN_SCREEN, REGISTRATION_SCREEN} from '../routes';
import Login from '../../containers/Login';

import Registration from '../../containers/Registration';
import {ContainerHeader} from '../navConfig';

const Stack = createStackNavigator();

function AuthStack() {
  const navigation = useNavigation();
  return (
    <Stack.Navigator screenOptions={ContainerHeader}>
      <Stack.Screen
        name={MAIN_SCREEN}
        component={Main}
        options={{headerShown: false}}
      />
      <Stack.Screen name={LOGIN_SCREEN} component={Login} />
      <Stack.Screen name={REGISTRATION_SCREEN} component={Registration} />
    </Stack.Navigator>
  );
}

export default AuthStack;
