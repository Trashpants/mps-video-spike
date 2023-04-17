import { AVPlaybackSource } from "expo-av";
import { Match } from "./match";
import { Player } from "./player";

interface VideoDetails {
  id: string;
  players: Player[],
  match: Match;
}

export interface mp4Video extends VideoDetails {
  file: AVPlaybackSource
}

export interface ytVideo extends VideoDetails {
  videoId: string,
  start: number,
  end: number,
}
