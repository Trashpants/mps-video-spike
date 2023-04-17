import { mp4Video, ytVideo } from "../../../utils/types/video";

export function isMp4Video(pet: mp4Video | ytVideo): pet is mp4Video {
  return (<mp4Video>pet).file !== undefined;
}
