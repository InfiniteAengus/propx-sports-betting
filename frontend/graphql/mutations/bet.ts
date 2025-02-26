import { graphql } from 'react-relay'

export const placeBetMutation = graphql`
  mutation betMutation(
    $userId: String!
    $matchId: String!
    $teamId: String!
    $betType: String!
    $odds: Float!
    $wagerAmount: Float!
    $currency: String!
    $spreadValue: Float
    $totalType: String
  ) {
    placeBet(
      userId: $userId
      matchId: $matchId
      teamId: $teamId
      betType: $betType
      odds: $odds
      wagerAmount: $wagerAmount
      currency: $currency
      spreadValue: $spreadValue
      totalType: $totalType
    ) {
      id
      betType
      odds
      wagerAmount
    }
  }
`
