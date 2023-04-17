import { Team } from "./team";

export interface Match {
  id: string;
  date: Date;
  teams: (Team & {isHome: boolean})[]
}
