import React, {useRef} from 'react';
import {SafeAreaView, Text, useColorScheme, View} from 'react-native';
import {
  NavigationContainer,
  NavigationContainerRef,
  DefaultTheme,
} from '@react-navigation/native';
import ErrorBoundary from './src/components/ErrorBoundary';
import AuthStack from './src/navigation/navigators/RootStack';

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
  // const backgroundStyle = {
  //   // backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  //   backgroundColor: 'white',
  // };

  return (
    <ErrorBoundary>
      <NavigationContainer ref={navigationRef} theme={WhiteTheme}>
        {token ? null : <AuthStack />}
      </NavigationContainer>
    </ErrorBoundary>
  );
};

export default App;
