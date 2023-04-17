import { ReactNode } from "react";
import { Match } from "../../../utils/types/match"
import { Player } from "../../../utils/types/player"

export interface VideoWrapperProps {
  player: Player;
  match: Match;
  children: ReactNode;
}
