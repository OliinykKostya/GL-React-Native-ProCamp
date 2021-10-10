import React, {Component, ErrorInfo, ReactNode} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  DevSettings,
} from 'react-native';
// import i18n from 'i18n-js';

// import ScreenTitle from '../ScreenTitle';
import styles from './styles';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
}

class ErrorBoundary extends Component<Props, State> {
  // eslint-disable-next-line react/state-in-constructor
  public state: State = {
    hasError: false,
  };

  public static getDerivedStateFromError(_: Error): State {
    return {hasError: true};
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Uncaught error:', error, errorInfo);
  }

  handleBackToSignIn = async () => {
    DevSettings.reload();
  };
  // TODO: translate a text

  public render() {
    if (this.state.hasError) {
      return (
        <SafeAreaView>
          <View>
            {/* <ScreenTitle title={i18n.t('ErrorBoundary.Title')} /> */}
            <Text>Opss something going wrong</Text>
            <TouchableOpacity
              onPress={() => {
                this.handleBackToSignIn();
              }}>
              <Text>Reload</Text>
            </TouchableOpacity>
          </View>
        </SafeAreaView>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
