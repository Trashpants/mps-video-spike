import React, { FunctionComponent, useCallback, useRef } from 'react';
import { View, useWindowDimensions } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { BlurView } from 'expo-blur';
import YoutubePlayer, { YoutubeIframeRef } from "react-native-youtube-iframe";

import { YTPlayerProps } from './types';
import { styles } from './styles';

const YTPlayer: FunctionComponent<YTPlayerProps> = ({ video, isFocused }) => {
  const backgroundRef = useRef<YoutubeIframeRef>(null);
  const playerRef = useRef<YoutubeIframeRef>(null);
  const { height, width } = useWindowDimensions();
  const { top, bottom } = useSafeAreaInsets();

  const playerHeight = height - top - bottom - 48;
  const playerWidth = (playerHeight / 9) * 16

  /**
   * handle player functions
   */
  const onPlayerUpdate = useCallback((state: string) => {
    if (state === "ended") {
      backgroundRef.current?.seekTo(video.start, true);
      playerRef.current?.seekTo(video.start, true);
    }
  }, []);

  return (
    <>
      <View style={[styles.container, {marginLeft: -playerWidth / 3} ]} pointerEvents='none'>
        <YoutubePlayer
          ref={backgroundRef}
          height={playerHeight}
          width={playerWidth}
          play={isFocused}
          mute
          videoId={video.videoId}
          initialPlayerParams={{
            start: video.start,
            end: video.end,
            loop: true,
            controls: false,
          }}
          onChangeState={onPlayerUpdate}
        />
      </View>
        <BlurView intensity={25} style={styles.videoOverlay}>
        <YoutubePlayer
          ref={playerRef}
          height={280}
          width={width}
          webViewStyle={{
            width,
          }}
          play={isFocused}
          mute
          videoId={video.videoId}
          initialPlayerParams={{
            start: video.start,
            end: video.end,
            loop: true,
            modestbranding: true,
            controls: false,
          }}
          onChangeState={onPlayerUpdate}
        />
        </BlurView>

    </>
  );
};

export default YTPlayer;
export { YTPlayer };
