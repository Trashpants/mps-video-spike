import React, { FunctionComponent } from 'react';
import { View, Text, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import { VideoWrapperProps } from './types';
import { styles } from './styles';
import ActionBar from '../../ActionBar';

const VideoWrapper: FunctionComponent<VideoWrapperProps> = ({ player, match, children }) => {

  return (
    <View style={styles.container}>
      {children}
      <LinearGradient
        colors={["#141414", "transparent"]}
        style={styles.header}
        start={{x: 0, y: 0}}
        end={{x: 0, y: 1}}
        pointerEvents='none'
      />

      <View style={styles.footerWrapper} pointerEvents='none'>
        <LinearGradient
          colors={["transparent", "#111"]}
          style={styles.footer}
          start={{x: 0, y: 0}}
          end={{x: 0, y: 1}}

        >
          <View style={styles.matchDetails}>
            <Image style={styles.teamLogo} source={{ uri: match.teams[0].logoUrl }} resizeMode='contain' />
            <View style={styles.spacer} />
            <Text style={styles.matchString}>{`${match.teams[0].name}`}</Text>
            <View style={styles.spacerLarge} />
            <Text style={styles.matchV}>-</Text>
            <View style={styles.spacerLarge} />
            <Image style={styles.teamLogo} source={{ uri: match.teams[1].logoUrl }} resizeMode='contain' />
            <View style={styles.spacer} />
            <Text style={styles.matchString}>{`${match.teams[1].name}`}</Text>
          </View>
          <Text style={styles.playerName}>{`${player.fName} ${player.lName}`}</Text>
        </LinearGradient>
        <ActionBar />
      </View>
    </View>
  );
};

export default VideoWrapper;
export { VideoWrapper };
