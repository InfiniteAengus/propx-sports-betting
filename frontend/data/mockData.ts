import { MatchType } from '@/@types/global'
import { MatchStatus } from '@/constants/enum'

export const matches: MatchType[] = [
  {
    id: 'match_123456',
    match_time: '',
    status: MatchStatus.LIVE,
    teams: {
      home: { name: 'Warriors', image: 'https://i.postimg.cc/MGwDbkpY/warriors.png' },
      away: { name: 'Bucks', image: 'https://i.postimg.cc/dt74JmfG/bucks.png' },
    },
    odds: {
      moneyline: { home: -110, away: 140 },
      spread: {
        home: {
          points: -3.5,
          odds: -110,
        },
        away: {
          points: +3.5,
          odds: -110,
        },
      },
      total: {
        o: {
          points: 234.5,
          odds: -110,
        },
        u: {
          points: 234.5,
          odds: -110,
        },
      },
    },
  },
  {
    id: 'match_12345678',
    match_time: '',
    status: MatchStatus.LIVE,
    teams: {
      home: { name: 'Warriors', image: 'https://i.postimg.cc/MGwDbkpY/warriors.png' },
      away: { name: 'Bucks', image: 'https://i.postimg.cc/dt74JmfG/bucks.png' },
    },
    odds: {
      moneyline: { home: -110, away: 140 },
      spread: {
        home: {
          points: -3.5,
          odds: -110,
        },
        away: {
          points: +3.5,
          odds: -110,
        },
      },
      total: {
        o: {
          points: 234.5,
          odds: -110,
        },
        u: {
          points: 234.5,
          odds: -110,
        },
      },
    },
  },
]
