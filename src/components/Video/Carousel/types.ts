import { mp4Video, ytVideo } from "../../../utils/types/video";

export interface VideoCarouselProps {
  data: (mp4Video | ytVideo)[]
}
