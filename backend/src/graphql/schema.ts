import {
  queryType,
  mutationType,
  intArg,
  stringArg,
  floatArg,
  makeSchema,
  fieldAuthorizePlugin,
  objectType,
  nullable,
} from "nexus";
import { Bet, Team, Match, Odds } from "./types";
import BetModel from "../models/Bet";
import MatchModel from "../models/Match";
import TeamModel from "../models/Team";
import OddsModel from "../models/Odds";

export const Query = queryType({
  definition(t) {
    t.list.field("getUserBets", {
      type: Bet,
      args: { userId: intArg() },
      resolve: async (_, { userId }) => BetModel.findAll({ where: { userId } }),
    });
    t.list.field("getMatches", {
      type: Match,
      resolve: async () => {
        const matches = await MatchModel.findAll();
        return matches;
      },
    });
  },
});

export const Mutation = mutationType({
  definition(t) {
    t.field("placeBet", {
      type: Bet,
      args: {
        userId: stringArg(),
        matchId: stringArg(),
        teamId: stringArg(),
        betType: stringArg(), // moneyline, spread, or total
        spreadValue: nullable(floatArg()), // Used only for spread bets
        totalType: nullable(stringArg()), // "over" or "under" for total bets
        odds: floatArg(), // The odds at the time of betting
        wagerAmount: floatArg(),
        currency: stringArg(),
      },
      resolve: async (_, args) => {
        console.log(args);
        return await BetModel.create(args);
      },
    });
  },
});

export const schema = makeSchema({
  types: [Team, Bet, Match, Odds, Mutation, Query],
  plugins: [fieldAuthorizePlugin()],
  outputs: {
    schema: `${__dirname}/generated/schema.graphql`,
    typegen: `${__dirname}/generated/typings.ts`,
  },
});
