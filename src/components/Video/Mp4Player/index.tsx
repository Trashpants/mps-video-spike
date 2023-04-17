import React, { FunctionComponent, useEffect, useRef } from 'react';
import { View } from 'react-native';
import { Video, ResizeMode } from 'expo-av';

import { Mp4PlayerProps } from './types';
import { styles } from './styles';

const Mp4Player: FunctionComponent<Mp4PlayerProps> = ({ video, isFocused }) => {
  const videoRef = useRef<Video>(null);

  useEffect(() => {
    if (isFocused)
    {
      videoRef.current?.playAsync();
    } else {
      videoRef.current?.stopAsync();
    }
  },[isFocused])

  return (
    <View style={styles.container}>
      <Video
        ref={videoRef}
        style={styles.video}
        source={video.file}
        useNativeControls
        resizeMode={ResizeMode.COVER}
        isLooping
        onPlaybackStatusUpdate={status => null}
      />
    </View>
  );
};

export default Mp4Player;
export { Mp4Player };
