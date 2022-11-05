export const allMatchesPlayed = [
  {
    score: { "Manchester United": 1, "Leicester City": 2 },
    date: "2021-04-29T14:00:00",
  },
  {
    score: { "Manchester United": 1, "Leicester City": 2 },
    date: "2021-04-30T14:00:00",
  },
  {
    score: { "Manchester United": 1, "Leicester City": 2 },
    date: "2021-05-01T14:00:00",
  },
  {
    score: { "Manchester United": 1, "Leicester City": 2 },
    date: "2021-05-02T14:00:00",
  },
  {
    score: { "Manchester United": 1, "Leicester City": 2 },
    date: "2021-05-03T14:00:00",
  },
  {
    score: { "Manchester United": 1, "Leicester City": 2 },
    date: "2021-05-04T14:00:00",
  },
];

export const withUnplayedMatches = [
  {
    score: { "Manchester United": 1, "Leicester City": 2 },
    date: "2021-05-01T14:00:00",
  },
  {
    score: { "Manchester United": 1, "Leicester City": 2 },
    date: "2021-05-03T14:00:00",
  },
  {
    score: { "Manchester United": 1, "Leicester City": 2 },
    date: "2021-05-04T14:00:00",
  },
  {
    score: { "Manchester United": 1, "Leicester City": 2 },
    date: "2021-05-05T15:00:00",
  },
  {
    score: { "Manchester United": 1, "Leicester City": 2 },
    date: "2021-05-06T14:00:00",
  },
  {
    score: { "Manchester United": 1, "Leicester City": 2 },
    date: "2021-05-07T14:00:00",
  },
];

export const withMoreThanTwoTeams = [
  {
    score: { "Manchester United": 1, "Leicester City": 2 }, //MU loss
    date: "2021-05-04T14:00:00",
  },
  {
    score: { "Manchester United": null, Liverpool: null }, //No play
    date: "2021-05-09T11:00:00",
  },
  {
    score: { "Manchester United": 1, "Tottenham Hotspur": 1 }, //MU draw
    date: "2021-05-05T11:00:00",
  },
  {
    score: { "Manchester United": 2, Chelsea: 2 },
    date: "2021-03-04T17:00:00",
  },
  {
    score: { "Manchester United": 1, "Manchester City": 2 },
    date: "2021-03-05T17:00:00",
  },
  {
    score: { "Manchester United": 6, Arsenal: 2 },
    date: "2021-01-04T17:00:00",
  },
];
