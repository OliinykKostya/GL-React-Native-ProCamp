import React from 'react';
import {Text, TextStyle} from 'react-native';

type Props = {title: string; titleStyle: TextStyle};

const Title = ({title, titleStyle}: Props) => (
  <Text style={titleStyle}>{title}</Text>
);

export default Title;
