import {
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native'
import { useCallback, useEffect, useState } from 'react'
import { Colors } from '@/constants/Colors'
import { CurrencyType } from '@/constants/enum'
import { useCurrency } from '@/hooks/useCurrency'
import { updateBetAmount } from '@/redux/slices/account.slice'
import { useAppDispatch, useAppSelector } from '@/redux/types'

const amounts = {
  coin: [25, 50, 100],
  cash: [50, 100, 200],
}

export default function BetAmountSelector() {
  const { currency } = useCurrency()
  const dispatch = useAppDispatch()

  const [betAmount, setBetAmount] = useState<number | undefined>(undefined)
  const [isCustom, setIsCustom] = useState<boolean>(false)

  const formatBetAmount = useCallback(
    (amount: number) => (currency === CurrencyType.COIN ? `${amount}K` : `$${amount}`),
    [currency],
  )

  const handleBetSelection = (amount: number) => {
    setIsCustom(false)
    setBetAmount((prev) => (prev === amount ? undefined : amount))
  }

  const handleCustomPress = () => {
    setIsCustom((prev) => !prev)
    setBetAmount(undefined)
  }

  const getSelectedBetStyle = () =>
    currency === CurrencyType.COIN ? styles.coinStyle : styles.cashStyle

  useEffect(() => {
    setBetAmount(undefined)
    setIsCustom(false)
  }, [currency])

  useEffect(() => {
    dispatch(updateBetAmount(betAmount))
  }, [betAmount, dispatch])

  return (
    <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <View style={styles.betButtonsContainer}>
        {amounts[currency].map((amount) => (
          <TouchableOpacity
            key={amount}
            style={[
              styles.betButton,
              betAmount === amount ? getSelectedBetStyle() : null,
            ]}
            onPress={() => handleBetSelection(amount)}
          >
            <Text style={styles.buttonText}>{formatBetAmount(amount)}</Text>
          </TouchableOpacity>
        ))}
        <TouchableOpacity
          style={[styles.betButton, isCustom ? getSelectedBetStyle() : null]}
          onPress={handleCustomPress}
        >
          <Text style={styles.buttonText}>Custom</Text>
        </TouchableOpacity>
      </View>

      {isCustom && (
        <TextInput
          style={styles.input}
          placeholder='Enter amount'
          keyboardType='numeric'
          value={betAmount ? betAmount.toString() : ''}
          onChangeText={(text) => setBetAmount(Number(text) || undefined)}
        />
      )}
    </KeyboardAvoidingView>
  )
}

const styles = StyleSheet.create({
  betButtonsContainer: {
    flexDirection: 'row',
    gap: 8,
  },
  betButton: {
    flex: 1,
    backgroundColor: '#ffffff20',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
    height: 40,
  },
  buttonText: {
    color: 'white',
  },
  coinStyle: {
    backgroundColor: Colors.dark.pink,
  },
  cashStyle: {
    backgroundColor: Colors.dark.green,
  },
  input: {
    marginTop: 10,
    padding: 10,
    borderRadius: 6,
    fontSize: 16,
    color: '#fff',
    backgroundColor: '#ffffff20',
    tintColor: '#ddd',
  },
})
