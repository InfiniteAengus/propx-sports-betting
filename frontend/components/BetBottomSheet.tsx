import { ActivityIndicator, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { BottomSheetScrollView } from '@gorhom/bottom-sheet'
import { Colors } from '@/constants/Colors'
import { BetStatus, CurrencyType } from '@/constants/enum'
import { useCurrency } from '@/hooks/useCurrency'
import { useAppSelector } from '@/redux/types'
import BetAmountSelector from './BetAmountSelect'
import BetSlipItem from './BetSlipItem'
import CurrencySelectorBar from './CurrencySelectorBar'
import { ThemedText } from './ThemedText'
import { IconSymbol } from './ui/IconSymbol'

type Props = {
  currentStatus: BetStatus
  isDisabled: boolean
  onConfirmBet: () => void
  onCloseBet: () => void
  onContinueBet: () => void
}

const BetBottomSheet: React.FC<Props> = ({
  currentStatus,
  isDisabled,
  onConfirmBet,
  onCloseBet,
  onContinueBet,
}) => {
  const bets = useAppSelector((state) => state.betsSlice)
  const { currency } = useCurrency()

  return (
    <BottomSheetScrollView style={styles.scrollView}>
      <ThemedText style={styles.titleText}>BETSLIP ({bets.length})</ThemedText>

      <View
        style={[
          styles.betContainer,
          currentStatus !== BetStatus.UNSET ? styles.disabledBet : null,
        ]}
      >
        <CurrencySelectorBar />

        {bets.map((bet) => (
          <BetSlipItem key={`${bet.match_id}-${bet.market}-${bet.selection}`} bet={bet} />
        ))}

        <BetAmountSelector />

        <View style={styles.spacer}></View>

        <View style={styles.totalBetContainer}>
          <View style={styles.totalBetRow}>
            <Text style={styles.whiteText}>Total bet</Text>
            <Text style={styles.whiteText}>100,000</Text>
          </View>
          <View style={styles.totalBetRow}>
            <Text style={styles.whiteText}>Total bet</Text>
            <Text style={styles.whiteText}>100,000</Text>
          </View>
        </View>
      </View>

      <TouchableOpacity
        style={[styles.submitBetButton, isDisabled ? styles.disabledButton : null]}
        onPress={onConfirmBet}
        disabled={isDisabled}
      >
        {currentStatus === BetStatus.UNSET && (
          <Text style={styles.submitBetText}>CONFIRM BET</Text>
        )}
        {currentStatus === BetStatus.CONFIRMING && (
          <>
            <ActivityIndicator color='#000' />
            <Text style={styles.submitBetText}>CONFIRMING...</Text>
          </>
        )}
        {currentStatus === BetStatus.CONFIRMED && (
          <>
            <IconSymbol name='check' color={'#000'} />
            <Text style={styles.submitBetText}>CONFIRMED</Text>
          </>
        )}
      </TouchableOpacity>

      <ThemedText style={styles.maxBetText}>Max bet amount: 1,000,000</ThemedText>

      {currentStatus === BetStatus.CONFIRMED && (
        <>
          <ThemedText style={styles.copyBetText}>
            Would you like to copy this bet for{' '}
            <Text
              style={[currency === CurrencyType.COIN ? styles.coinText : styles.cashText]}
            >
              {currency === CurrencyType.COIN ? 'Cash?' : 'Coin?'}
            </Text>
          </ThemedText>

          <View style={styles.confirmationButtonsContainer}>
            <TouchableOpacity style={styles.noButton} onPress={onCloseBet}>
              <ThemedText style={styles.confirmationText}>NO</ThemedText>
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                styles.yesButton,
                currency === 'coin' ? styles.coinButton : styles.cashButton,
              ]}
              onPress={onContinueBet}
            >
              <ThemedText style={styles.confirmationText}>YES</ThemedText>
            </TouchableOpacity>
          </View>
        </>
      )}

      <View style={styles.bottomSpacer}></View>
    </BottomSheetScrollView>
  )
}

export default BetBottomSheet

const styles = StyleSheet.create({
  scrollView: {
    padding: 16,
    flex: 1,
  },
  titleText: {
    textAlign: 'center',
    paddingBottom: 20,
    fontFamily: 'Joyride',
  },
  betContainer: {
    flex: 1,
    gap: 12,
  },
  disabledBet: {
    opacity: 0.5,
    pointerEvents: 'none',
  },
  spacer: {
    flex: 1,
    height: 'auto',
  },
  totalBetContainer: {
    gap: 8,
    marginTop: 8,
    marginBottom: 8,
  },
  totalBetRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  whiteText: {
    color: '#fff',
  },
  submitBetButton: {
    backgroundColor: Colors.dark.yellow,
    borderRadius: 4,
    height: 48,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    gap: 4,
  },
  disabledButton: {
    backgroundColor: '#5C5A20', // Gray color for disabled state
  },
  submitBetText: {
    fontFamily: 'Joyride',
  },
  maxBetText: {
    textAlign: 'center',
    fontSize: 14,
    marginTop: 4,
    opacity: 0.4,
  },
  copyBetText: {
    marginTop: 4,
  },
  coinText: {
    color: Colors.dark.green,
  },
  cashText: {
    color: Colors.dark.pink,
  },
  confirmationButtonsContainer: {
    flexDirection: 'row',
    gap: 16,
    marginTop: 8,
    marginBottom: 12,
  },
  noButton: {
    flex: 1,
    backgroundColor: '#282A2E',
    padding: 8,
    borderRadius: 4,
  },
  yesButton: {
    flex: 1,
    padding: 8,
    borderRadius: 4,
  },
  coinButton: {
    backgroundColor: Colors.dark.green,
  },
  cashButton: {
    backgroundColor: Colors.dark.pink,
  },
  confirmationText: {
    textAlign: 'center',
    fontFamily: 'Joyride',
    fontSize: 14,
  },
  bottomSpacer: {
    marginBottom: 20,
  },
})
