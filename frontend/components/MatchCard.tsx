import { ImageBackground, StyleSheet, TouchableOpacity, View } from 'react-native'
import { useCallback, useMemo } from 'react'
import { Colors } from '@/constants/Colors'
import { BetMarket, SelectionType } from '@/constants/enum'
import { addBet, removeBet } from '@/redux/slices/bets.slice'
import { useAppDispatch, useAppSelector } from '@/redux/types'
import { ThemedText } from './ThemedText'

interface IMatchCard {
  match: any
}

export default function MatchCard({ match }: IMatchCard) {
  const bets = useAppSelector((state) => state.betsSlice)
  const dispatch = useAppDispatch()

  const matchBets = useMemo(() => {
    return bets.filter((bet) => bet.match_id === match.id)
  }, [match, bets])

  const isSelected = useCallback(
    (selection: string, market: BetMarket) => {
      return (
        matchBets.findIndex(
          (bet) => bet.selection === selection && bet.market === market,
        ) >= 0
      )
    },
    [matchBets],
  )

  const handleBetClick = (selection: string, market: BetMarket) => {
    if (isSelected(selection, market)) {
      dispatch(removeBet({ selection, market, match_id: match.id }))
    } else {
      dispatch(addBet({ selection, market, match_id: match.id, match }))
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.contentContainer}>
        <View style={styles.vsContainer}>
          <ThemedText style={styles.vsText}>VS</ThemedText>
        </View>

        {['teamA', 'teamB'].map((team) => {
          const teamData = match[team]
          const odds = team === 'teamA' ? match['oddsA'] : match['oddsB']

          return (
            <View key={team} style={styles.teamRow}>
              <View style={styles.teamContainer}>
                <ImageBackground
                  source={{ uri: teamData.image }}
                  resizeMode='cover'
                  style={styles.teamLogo}
                />
                <ThemedText style={styles.teamName}>{teamData.name}</ThemedText>
              </View>
              <BetButton
                isActive={isSelected(team, BetMarket.MONEYLINE)}
                onPress={() => handleBetClick(team, BetMarket.MONEYLINE)}
              >
                <ThemedText>{odds.moneyline}</ThemedText>
              </BetButton>
              <BetButton
                isActive={isSelected(team, BetMarket.SPREAD)}
                onPress={() => handleBetClick(team, BetMarket.SPREAD)}
              >
                <ThemedText style={styles.secondaryText}>{odds.spreadOdds}</ThemedText>
                <ThemedText style={styles.boldText}>{odds.spread}</ThemedText>
              </BetButton>
              <BetButton
                isActive={isSelected(team, BetMarket.TOTAL)}
                onPress={() => handleBetClick(team, BetMarket.TOTAL)}
              >
                <ThemedText style={styles.secondaryText}>
                  {odds.totalOverOdds
                    ? `O ${odds.totalOverOdds}`
                    : `U ${odds.totalUnderOdds}`}
                </ThemedText>
                <ThemedText style={styles.boldText}>{odds.total}</ThemedText>
              </BetButton>
            </View>
          )
        })}
      </View>
      <ThemedText style={styles.matchTime}>Ends at 9:00 PM EST</ThemedText>
    </View>
  )
}

const BetButton = ({ isActive, onPress, children }: any) => (
  <TouchableOpacity
    style={[styles.betButton, isActive && styles.activeBetButton]}
    onPress={onPress}
  >
    {children}
  </TouchableOpacity>
)

const styles = StyleSheet.create({
  container: {
    paddingTop: 16,
    paddingBottom: 16,
    gap: 12,
  },
  contentContainer: {
    gap: 12,
    position: 'relative',
  },
  vsContainer: {
    position: 'absolute',
    left: 60,
    top: '50%',
    backgroundColor: '#30353D',
    width: 24,
    height: 24,
    marginTop: -12,
    borderRadius: '50%',
    borderColor: '#1b1e23',
    borderWidth: 2,
    zIndex: 3,
    justifyContent: 'center',
    alignItems: 'center',
  },
  vsText: {
    fontSize: 11,
  },
  teamContainer: {
    flex: 1,
    flexDirection: 'row',
    borderRadius: 6,
    backgroundColor: '#30353D',
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
  },
  teamLogo: {
    width: 36,
    height: '100%',
  },
  teamRow: {
    flexDirection: 'row',
    gap: 8,
  },
  teamName: {
    flex: 1,
    textAlign: 'center',
  },
  betButton: {
    width: 69,
    height: 64,
    borderWidth: 1,
    borderColor: '#30353D',
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
  },
  activeBetButton: {
    borderColor: Colors.dark.yellow,
    backgroundColor: '#F9E53B20',
  },
  secondaryText: {
    fontSize: 14,
    opacity: 0.6,
  },
  boldText: {
    fontSize: 14,
    fontWeight: '600',
  },
  matchTime: {
    fontSize: 12,
    opacity: 0.6,
    textAlign: 'right',
  },
})
