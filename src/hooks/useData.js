import { useState } from "react";
import isBefore from "date-fns/isBefore";
import parseISO from "date-fns/parseISO";

export const useData = (data, currentTime) => {
  const [fixtures] = useState(data);
  let standings = {};
  const addTeamToTable = (team, secondTeam, { score, date }) => {
    if (!standings.hasOwnProperty(team)) {
      standings[team] = {
        wins: 0,
        losses: 0,
        draws: 0,
        played: 0,
        points: 0,
        goals: 0,
      };
    }

    if (!standings.hasOwnProperty(secondTeam)) {
      standings[secondTeam] = {
        wins: 0,
        losses: 0,
        draws: 0,
        played: 0,
        points: 0,
        goals: 0,
      };
    }

    //Check if the match has already been played
    const isAfterCurrentDate = isBefore(parseISO(date), parseISO(currentTime));
    if (isAfterCurrentDate) {
      const firstTeamScore = score[team];
      const secondTeamScore = score[secondTeam];
      standings[team].played = standings[team].played + 1;
      standings[secondTeam].played = standings[secondTeam].played + 1;

      standings[team].goals = standings[team].goals + firstTeamScore;
      standings[secondTeam].goals =
        standings[secondTeam].goals + secondTeamScore;

      if (firstTeamScore > secondTeamScore) {
        standings[team].wins = standings[team].wins + 1;
        standings[team].points = standings[team].wins * 3;

        standings[secondTeam].losses = standings[secondTeam].losses + 1;
      } else if (secondTeamScore > firstTeamScore) {
        standings[secondTeam].wins = standings[secondTeam].wins + 1;
        standings[secondTeam].points = standings[secondTeam].wins * 3;

        standings[team].losses = standings[team].losses + 1;
      }

      if (firstTeamScore === secondTeamScore) {
        standings[team].draws = standings[team].draws + 1;
        standings[secondTeam].draws = standings[secondTeam].draws + 1;
        standings[team].points = standings[team].points + 1;
        standings[secondTeam].points = standings[secondTeam].points + 1;
      }

      if (secondTeam === "Leicester City" || team === "Leicester City") {
        console.log(
          "LCFC",
          standings["Leicester City"].played,
          secondTeam,
          team
        );
      }
    }
  };

  fixtures.forEach((fixture) => {
    const [firstTeam, secondTeam] = Object.keys(fixture.score);
    addTeamToTable(firstTeam, secondTeam, fixture);
  }, []);

  return standings;
};
