import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { BetType } from '@/@types/global'
import { removeBet } from '@/redux/slices/bets.slice'
import { useAppDispatch, useAppSelector } from '@/redux/types'
import { ThemedText } from './ThemedText'
import { IconSymbol } from './ui/IconSymbol'

interface IBetSlipItem {
  bet: BetType
}

export default function BetSlipItem({ bet }: IBetSlipItem) {
  const { match } = bet
  const { selectedBetAmount } = useAppSelector((state) => state.accountSlice)
  const dispatch = useAppDispatch()

  const handleRemoveBet = () =>
    dispatch(
      removeBet({ match_id: bet.match_id, selection: bet.selection, market: bet.market }),
    )

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.leftContainer} onPress={handleRemoveBet}>
        <IconSymbol name='trash-can' color='#fff' size={16} />
      </TouchableOpacity>
      <View style={styles.rightContainer}>
        <View style={styles.betInformationWrapper}>
          <Text style={styles.matchInfoText}>
            {match?.teamA?.name} vs {match?.teamB?.name}
          </Text>
          <Text style={styles.endTimeText}>Ends at: 8:00 PM EST</Text>
        </View>

        <View style={styles.teamInfoContainer}>
          <Image
            source={{ uri: match?.[bet.selection]?.image }}
            style={styles.teamImage}
          />
          <Text style={styles.teamNameText}>{match?.[bet.selection]?.name}</Text>
        </View>

        <View style={styles.oddsContainer}>
          <Text style={styles.oddsText}>
            {bet.market === 'moneyline'
              ? match[bet.selection.replace('team', 'odds')].moneyline
              : bet.market === 'spread'
                ? match[bet.selection.replace('team', 'odds')].spread
                : 'Total'}
          </Text>
          <Text style={styles.oddsText}>Bet Amount: {selectedBetAmount}</Text>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 8,
    backgroundColor: '#ffffff20',
    flexDirection: 'row',
    overflow: 'hidden',
  },
  leftContainer: {
    backgroundColor: '#ffffff20',
    justifyContent: 'center',
    alignItems: 'center',
    width: 36,
  },
  rightContainer: {
    padding: 12,
    gap: 12,
    flex: 1,
  },
  betInformationWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  matchInfoText: {
    color: 'white',
    fontSize: 16,
  },
  endTimeText: {
    marginLeft: 'auto',
    textAlign: 'right',
    fontSize: 12,
    color: '#ffffffa0',
  },
  teamInfoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  teamImage: {
    width: 24,
    height: 24,
  },
  teamNameText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '700',
  },
  oddsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  oddsText: {
    color: 'white',
    fontSize: 16,
  },
})
