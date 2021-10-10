import React from 'react';
import {Text, TextInput, View, TextInputProps} from 'react-native';

import styles from './styles';

type Props = {
  error: string | undefined;
  touched: boolean | undefined;
  textInputProps?: TextInputProps;
};

const CustomTextInput = ({error, textInputProps, touched}: Props) => {
  const hasError = error && touched;
  return (
    <View style={styles.container}>
      {hasError && (
        <View style={styles.borderWithError}>
          <Text style={styles.errorColor}>{error}</Text>
        </View>
      )}

      <View style={styles.borderError(hasError)}>
        <TextInput style={styles.textInput} {...textInputProps} />
      </View>
    </View>
  );
};

export default CustomTextInput;
