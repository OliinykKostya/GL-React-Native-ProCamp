import * as React from 'react';
import {StackNavigationOptions} from '@react-navigation/stack';

import HeaderLeftButton from '../components/Buttons/HeaderLeftButton';
import { heightPercentageToDP } from 'react-native-responsive-screen';

export const ContainerHeaderStyles: StackNavigationOptions = {
  headerStyle: {
    height: heightPercentageToDP(11.35),
    shadowOpacity: 0,
    elevation: 0,
  },
};

export const ContainerHeader = ({
  navigation,
}: {
  navigation: any;
}): StackNavigationOptions => {
  return {
    headerShown: true,
    headerTransparent: true,
    title: '',
    headerLeft: () => <HeaderLeftButton onPress={() => navigation.goBack()} />,
    ...ContainerHeaderStyles,
  };
};
