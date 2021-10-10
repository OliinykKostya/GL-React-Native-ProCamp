import React from 'react';
import {Text, View, Image} from 'react-native';
import styles from './styles';

const LabelNameOfApp = () => (
  <View style={styles.titleContainer}>
    <Text style={styles.title}>Silent</Text>
    <Image
      style={styles.titleIcon}
      source={require('../../../assets/logo.png')}
    />
    <Text style={styles.title}>Moon</Text>
  </View>
);

export default LabelNameOfApp;
