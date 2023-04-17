import React, { FunctionComponent } from 'react';
import { View, Text, Pressable } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Feather from '@expo/vector-icons/Feather';

import { ControlsBarProps, controlData } from './types';
import { styles } from './styles';
import { allControls, renderValue } from './logic';

const ControlsBar: FunctionComponent<ControlsBarProps> = ({ }) => {
  const { bottom } = useSafeAreaInsets();
  return <View style={[styles.container, {paddingBottom: bottom}]}>{
    allControls.map(el => <Control key={el.label} {...el} />)
  }</View>;
};

const Control = ({ value, iconName, onPress }: controlData) => {
  return (
    <Pressable onPress={onPress}>
      <View style={styles.control}>
        <Feather name={iconName} style={styles.icon} size={18} color="#ababab" />
        <Text style={styles.iconValue}>{renderValue(value)}</Text>
      </View>
    </Pressable>
  )
}

export default ControlsBar;
export { ControlsBar };
