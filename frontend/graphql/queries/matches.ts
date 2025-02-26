import { graphql } from "react-relay";

export const MatchesQuery = graphql`
  query matchesQuery {
    getMatches {
      id
      date
      teamA {
        id
        name
        image
      }
      teamB {
        id
        name
        image
      }
      oddsA {
        id
        moneyline
        spread
        spreadOdds
        total
        totalOverOdds
        totalUnderOdds
      }
      oddsB {
        id
        moneyline
        spread
        spreadOdds
        total
        totalOverOdds
        totalUnderOdds
      }
    }
  }
`;
