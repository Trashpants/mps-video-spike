import React, { FunctionComponent } from 'react';
import { View, Text } from 'react-native';
import Feather from '@expo/vector-icons/Feather';

import { ActionBarProps, ratingControl } from './types';
import { styles } from './styles';
import { ratingControls } from './logic';

const ActionBar: FunctionComponent<ActionBarProps> = ({}) => {
  return (
    <View style={styles.container}>
      {ratingControls.map(el => <RatingControl key={el.label} {...el} />)}
    </View>
  );
};

const RatingControl = ({ label, value }: ratingControl) => {
  return (
    <View style={styles.control}>
      <View style={styles.circle}>
        {typeof value === "number"
          ? <Text style={styles.value}>{value}</Text>
          : <Feather name="thumbs-up" size={18} color="#FFF" />
        }
      </View>
      <Text style={styles.label}>{label}</Text>
    </View>
  )
}


export default ActionBar;
export { ActionBar };
