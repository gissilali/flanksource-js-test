import { useData } from "../../hooks/useData";
import { renderHook } from "@testing-library/react";

import {
  allMatchesPlayed,
  withUnplayedMatches,
  withMoreThanTwoTeams,
} from "../../hooks/tests/testData";

test("should extract a standings correct table from already fixtures", () => {
  const currentDate = "2021-05-05T14:00:00";
  const { result } = renderHook(() => useData(allMatchesPlayed, currentDate));
  expect(result.current).toStrictEqual({
    "Manchester United": {
      wins: 0,
      losses: 6,
      draws: 0,
      points: 0,
      played: 6,
      goals: 6,
    },
    "Leicester City": {
      wins: 6,
      losses: 0,
      draws: 0,
      played: 6,
      points: 18,
      goals: 12,
    },
  });
});

test("should extract a correct standings  table from fixtures including unplayed matches", () => {
  const currentDate = "2021-05-05T14:00:00";
  const { result } = renderHook(() =>
    useData(withUnplayedMatches, currentDate)
  );
  expect(result.current).toStrictEqual({
    "Manchester United": {
      wins: 0,
      losses: 3,
      draws: 0,
      points: 0,
      played: 3,
      goals: 3,
    },
    "Leicester City": {
      wins: 3,
      losses: 0,
      draws: 0,
      played: 3,
      points: 9,
      goals: 6,
    },
  });
});

test("should extract a correct standings  table from fixtures with more than two teams", () => {
  const currentDate = "2021-05-05T14:00:00";
  const { result } = renderHook(() =>
    useData(withMoreThanTwoTeams, currentDate)
  );
  expect(result.current).toStrictEqual({
    "Manchester United": {
      wins: 1,
      losses: 2,
      draws: 2,
      points: 3,
      played: 5,
      goals: 11,
    },
    "Leicester City": {
      wins: 1,
      losses: 0,
      draws: 0,
      played: 1,
      points: 3,
      goals: 2,
    },
    Arsenal: {
      wins: 0,
      losses: 1,
      draws: 0,
      points: 0,
      played: 1,
      goals: 2,
    },
    Liverpool: {
      wins: 0,
      losses: 0,
      draws: 0,
      points: 0,
      played: 0,
      goals: 0,
    },
    "Tottenham Hotspur": {
      wins: 0,
      losses: 0,
      draws: 1,
      points: 1,
      played: 1,
      goals: 1,
    },
    Chelsea: {
      wins: 0,
      losses: 0,
      draws: 1,
      points: 1,
      played: 1,
      goals: 2,
    },
    "Manchester City": {
      wins: 1,
      losses: 0,
      draws: 0,
      points: 3,
      played: 1,
      goals: 2,
    },
  });
});
