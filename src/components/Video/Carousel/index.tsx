import React, { FunctionComponent, useState } from 'react';
import PagerView from 'react-native-pager-view';

import { VideoCarouselProps } from './types';
import { styles } from './styles';
import { isMp4Video } from './logic';
import Mp4Player from '../Mp4Player';
import YTPlayer from '../YTPlayer';
import VideoWrapper from '../VideoWrapper';

const VideoCarousel: FunctionComponent<VideoCarouselProps> = ({ data }) => {

  const [activeVid, setActiveVid] = useState<number>(0);


  return (
    <VideoWrapper player={data[activeVid].players[0]} match={data[activeVid].match}>
      <PagerView
        style={styles.container}
        initialPage={activeVid}
        orientation="vertical"
        onPageSelected={(page) => setActiveVid(page.nativeEvent.position)}
      >
        {data.map((el, i) => {
          const isFocused = activeVid === i;

          if (isMp4Video(el)) {
            return <Mp4Player key={i} video={el} isFocused={isFocused} />
          }

          return <YTPlayer key={i} video={el} isFocused={isFocused} />
        })}
      </PagerView>
    </VideoWrapper>
  );
};

export default VideoCarousel;
export { VideoCarousel };
