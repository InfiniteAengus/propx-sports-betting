import { objectType } from "nexus";
import BetModel from "../models/Bet";
import MatchModel from "../models/Match";
import TeamModel from "../models/Team";
import OddsModel from "../models/Odds";

export const Team = objectType({
  name: "Team",
  definition(t) {
    t.string("id");
    t.string("name");
    t.string("image");
  },
});

export const Match = objectType({
  name: "Match",
  definition(t) {
    t.string("id");
    t.string("date");
    t.field("teamA", {
      type: Team,
      resolve: async (parent) => {
        return await TeamModel.findByPk(parent.teamAId);
      },
    });
    t.field("teamB", {
      type: Team,
      resolve: async (parent) => {
        return await TeamModel.findByPk(parent.teamBId);
      },
    });
    t.field("oddsA", {
      type: Odds,
      resolve: async (parent) => {
        return await OddsModel.findOne({ where: { matchId: parent.id, teamId: parent.teamAId } });
      },
    });
    t.field("oddsB", {
      type: Odds,
      resolve: async (parent) => {
        return await OddsModel.findOne({ where: { matchId: parent.id, teamId: parent.teamBId } });
      },
    });
  },
});

export const Bet = objectType({
  name: "Bet",
  definition(t) {
    t.string("id");
    t.string("userId");
    t.string("betType");
    t.float("spreadValue");
    t.string("totalType");
    t.float("odds");
    t.float("wagerAmount");
    t.string("currency");

    // Relations
    t.field("match", {
      type: Match,
      resolve: async (parent) => {
        return await MatchModel.findByPk(parent.matchId);
      },
    });

    t.field("team", {
      type: Team,
      resolve: async (parent) => {
        return await TeamModel.findByPk(parent.teamId);
      },
    });
  },
});

export const Odds = objectType({
  name: "Odds",
  definition(t) {
    t.string("id");
    t.string("matchId");
    t.string("teamId");
    t.float("moneyline");
    t.float("spread");
    t.float("spreadOdds");
    t.float("total");
    t.float("totalOverOdds");
    t.float("totalUnderOdds");
  },
});
