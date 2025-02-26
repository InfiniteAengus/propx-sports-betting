import { BetMarket, MatchStatus, SelectionType } from '@/constants/enum'

type TeamType = {
  name: string
  image: string
}

type MatchType = {
  id?: string
  match_time: string
  status: MatchStatus
  teams: {
    home: TeamType
    away: TeamType
  }
  odds: {
    moneyline: {
      home: number
      away: number
    }
    spread: {
      home: {
        points: number
        odds: number
      }
      away: {
        points: number
        odds: number
      }
    }
    total: {
      o: {
        points: number
        odds: number
      }
      u: {
        points: number
        odds: number
      }
    }
  }
}

type BetType = {
  match_id: string
  market: BetMarket
  selection: string
  match: any
}
