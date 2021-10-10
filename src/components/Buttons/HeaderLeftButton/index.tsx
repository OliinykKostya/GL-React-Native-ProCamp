import React from 'react';
import {TouchableOpacity, View} from 'react-native';
import {heightPercentageToDP} from 'react-native-responsive-screen';
import Ionicons from 'react-native-vector-icons/Ionicons';

import styles from './styles';

type Props = {
  onPress: () => void;
};

const HeaderLeftButton = ({onPress}: Props) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.iconContainer}>
      <Ionicons
        name="md-arrow-back"
        style={styles.icon}
        size={heightPercentageToDP(3)}
      />
    </TouchableOpacity>
  );
};

export default HeaderLeftButton;
