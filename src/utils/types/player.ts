import { Team } from "./team";

export enum PlayerPosition {
  ATTACK,
  MIDFIELD,
  DEFENCE,
  GOALKEEPER
}

export interface Player {
  fName: string;
  lName: string;
  number: number,
  position: PlayerPosition;
  teams: (Team & { joinDate: Date; leaveDate: Date | undefined }) []
}
