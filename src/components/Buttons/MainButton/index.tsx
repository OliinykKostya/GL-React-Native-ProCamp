import React from 'react';
import {Text, TouchableOpacity, TextStyle, ViewStyle, View} from 'react-native';

type Props = {
  title: string;
  onPress: () => void;
  buttonStyle?: ViewStyle;
  titleStyle: TextStyle;
  icon?: JSX.Element;
  iconContainerStyle?: ViewStyle;
};

const MainButton = ({
  title,
  onPress,
  buttonStyle,
  titleStyle,
  icon,
  iconContainerStyle,
}: Props) => {
  return (
    <TouchableOpacity onPress={onPress} style={buttonStyle}>
      <View style={iconContainerStyle}>{icon}</View>
      <Text style={titleStyle}>{title}</Text>
    </TouchableOpacity>
  );
};

export default MainButton;
