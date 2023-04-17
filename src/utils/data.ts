/**
 * For the sake of this spike no direct network requests are being made;
 *
 * Assumption made is that we get a nice pretty data structure thats more feature filled than this.
 * That said, this is a data structure made to fulfill specifically the requirements of displaying MP4 videos vs YouTube videos
 *
 * Also be aware that im using a YT video wrapper, a native video player for YouTube _may_ provide a better experience
 */

import { Match } from "./types/match";
import { Player, PlayerPosition } from "./types/player";
import { Team } from "./types/team";
import { mp4Video, ytVideo } from "./types/video";

const Team_Bournemouth: Team = {
  id: "team_bournemouth",
  name: "A.F.C. Bournemouth",
  homeGroundName: "Vitality Stadium",
  logoUrl: "https://upload.wikimedia.org/wikipedia/en/thumb/e/e5/AFC_Bournemouth_%282013%29.svg/182px-AFC_Bournemouth_%282013%29.svg.png"
};
const Team_Liverpool: Team = {
  id: "team_liverpool",
  name: "Liverpool F.C.",
  homeGroundName: "Anfield",
  logoUrl: "https://upload.wikimedia.org/wikipedia/en/thumb/0/0c/Liverpool_FC.svg/176px-Liverpool_FC.svg.png"
};

const Team_Newcastle: Team = {
  id: "team_newcastle",
  name: "Newcastle United F.C.",
  homeGroundName: "St. James' Park",
  logoUrl: "https://upload.wikimedia.org/wikipedia/en/thumb/5/56/Newcastle_United_Logo.svg/238px-Newcastle_United_Logo.svg.png"
};

const Team_Paris: Team = {
  id: "team_paris",
  name: "Paris Saint-Germain F.C.",
  homeGroundName: "Le Parc des Princes",
  logoUrl: "https://upload.wikimedia.org/wikipedia/en/thumb/a/a7/Paris_Saint-Germain_F.C..svg/240px-Paris_Saint-Germain_F.C..svg.png"
};

const Team_Benfica: Team = {
  id: "team_benfica",
  name: "S.L. Benfica",
  homeGroundName: "Estádio da Luz",
  logoUrl: "https://upload.wikimedia.org/wikipedia/en/thumb/a/a2/SL_Benfica_logo.svg/242px-SL_Benfica_logo.svg.png"
};

const Team_Chelsea: Team = {
  id: "team_chelsea",
  name: "Chelsea F.C.",
  homeGroundName: "Stamford Bridge",
  logoUrl: "https://upload.wikimedia.org/wikipedia/en/thumb/c/cc/Chelsea_FC.svg/240px-Chelsea_FC.svg.png"
};

const Team_Bayern: Team = {
  id: "team_bayern",
  name: "FC Bayern Munich",
  homeGroundName: "Allianz Arena",
  logoUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/FC_Bayern_München_logo_%282017%29.svg/240px-FC_Bayern_München_logo_%282017%29.svg.png"
};

const Team_Dortmund: Team = {
  id: "team_dortmund",
  name: "Borussia Dortmund",
  homeGroundName: "Signal Iduna Park",
  logoUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/Borussia_Dortmund_logo.svg/240px-Borussia_Dortmund_logo.svg.png"
};

const Team_Napoli: Team = {
  id: "team_napoli",
  name: "S.S.C. Napoli",
  homeGroundName: "Diego Armando Maradona Stadium",
  logoUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2d/SSC_Neapel.svg/240px-SSC_Neapel.svg.png"
};

const Team_ACMilan: Team = {
  id: "team_acmilan",
  name: "A.C. Milan",
  homeGroundName: "San Siro Stadium",
  logoUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/Logo_of_AC_Milan.svg/153px-Logo_of_AC_Milan.svg.png"
};

/**
 * Matches
 */

const Match_Bournemouth_Liverpool: Match = {
  id: "bournemouth_liverpool",
  date: new Date("2023-03-11TZ12:30:00Z"),
  teams: [
    { ...Team_Bournemouth, isHome: true },
    { ...Team_Liverpool, isHome: false },
  ]
}

const Match_Newcastle_Liverpool: Match = {
  id: "newcastle_liverpool",
  date: new Date("2023-02-18TZ12:30:00Z"),
  teams: [
    { ...Team_Newcastle, isHome: true },
    { ...Team_Liverpool, isHome: false },
  ]
}

const Match_Paris_Benfica: Match = {
  id: "paris_benfica",
  date: new Date("2022-10-11TZ12:30:00Z"),
  teams: [
    { ...Team_Paris, isHome: true },
    { ...Team_Benfica, isHome: false },
  ]
}

const Match_Chelsea_Liverpool: Match = {
  id: "chelsea_liverpool",
  date: new Date("2023-04-04TZ20:00:00Z"),
  teams: [
    { ...Team_Chelsea, isHome: true },
    { ...Team_Liverpool, isHome: false },
  ]
}

const Match_Bayern_Dortmund: Match = {
  id: "bayern_dortmund",
  date: new Date("2023-04-04TZ20:00:00Z"),
  teams: [
    { ...Team_Bayern, isHome: true },
    { ...Team_Dortmund, isHome: false },
  ]
}

const Match_Napoli_Milan: Match = {
  id: "napoli_milan",
  date: new Date("2023-04-02TZ20:00:00Z"),
  teams: [
    { ...Team_Napoli, isHome: false },
    { ...Team_ACMilan, isHome: true },
  ]
}

/**
 * Players
 */
const Player_TAA: Player = {
  fName: "Trent",
  lName: "Alexander-Arnold",
  number: 66,
  position: PlayerPosition.DEFENCE,
  teams: [
    {...Team_Liverpool, joinDate: new Date('2016-10-25T00:00:00Z'), leaveDate: undefined}
  ]
}

const Player_Messi: Player = {
  fName: "Lionel",
  lName: "Messi",
  number: 30,
  position: PlayerPosition.ATTACK,
  teams: [
    {...Team_Paris, joinDate: new Date('2021-08-10T00:00:00Z'), leaveDate: undefined}
  ]
}

const Player_Kovacic: Player = {
  fName: "Mateo",
  lName: "Kovacic",
  number: 8,
  position: PlayerPosition.MIDFIELD,
  teams: [
    {...Team_Chelsea, joinDate: new Date('2019-07-1T00:00:00Z'), leaveDate: undefined}
  ]
}

const Player_Kobel: Player = {
  fName: "Gregor",
  lName: "Kobel",
  number: 1,
  position: PlayerPosition.GOALKEEPER,
  teams: [
    {...Team_Dortmund, joinDate: new Date('2021-05-31T00:00:00Z'), leaveDate: undefined}
  ]
}

const Player_Leao: Player = {
  fName: "Rafael",
  lName: "Leão",
  number: 17,
  position: PlayerPosition.ATTACK,
  teams: [
    {...Team_ACMilan, joinDate: new Date('2019-08-01T00:00:00Z'), leaveDate: undefined}
  ]
}

/**
 * Main block data export
 */

export const data: (mp4Video | ytVideo)[] = [
  {
    id: "rand_mp4_1",
    players: [Player_TAA],
    match: Match_Bournemouth_Liverpool,
    file: require("../../assets/videos/TAA1.mp4")
  },
  {
    id: "rand_mp4_2",
    players: [Player_TAA],
    match: Match_Newcastle_Liverpool,
    file: require("../../assets/videos/TAA2.mp4")
 },
 {
    id: "rand_mp4_3",
    players: [Player_Messi],
    match: Match_Paris_Benfica,
    file: require("../../assets/videos/Messi1.mp4")
 },
 {
    id: "rand_yt_1",
    players: [Player_Kovacic],
    match: Match_Chelsea_Liverpool,
    videoId: "FVLOUFbPLmM",
    start: 7,
    end: 17
 },
 {
    id: "rand_yt_2",
    players: [Player_Kobel],
    match: Match_Bayern_Dortmund,
    videoId: "9iOJjo1vU1A",
    start: 8,
    end: 20
 },
 {
    id: "rand_yt_3",
    players: [Player_Leao],
    match: Match_Napoli_Milan,
    videoId: "wviDhHBcZ_E",
    start: 121,
    end: 135
 }
]

export default data;
