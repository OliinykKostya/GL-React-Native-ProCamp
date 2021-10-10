import React, {useRef} from 'react';
import {StatusBar, useColorScheme} from 'react-native';

import {
  NavigationContainer,
  DefaultTheme,
  NavigationContainerRef,
} from '@react-navigation/native';
import ErrorBoundary from './src/components/ErrorBoundary';
import AuthStack from './src/navigation/navigators/AuthStack';

const WhiteTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: 'white',
  },
};

const App = () => {
  const navigationRef = useRef<NavigationContainerRef>(null);
  const isDarkMode = useColorScheme() === 'dark';
  const token = false;

  return (
    <ErrorBoundary>
      <NavigationContainer ref={navigationRef} theme={WhiteTheme}>
        <StatusBar barStyle="dark-content" />
        <AuthStack />
      </NavigationContainer>
    </ErrorBoundary>
  );
};

export default App;
