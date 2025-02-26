import { Image, StyleSheet, View } from 'react-native'
import { useMemo } from 'react'
import { LinearGradient } from 'expo-linear-gradient'
import { CurrencyType } from '@/constants/enum'
import { useCurrency } from '@/hooks/useCurrency'
import Switch from './Switch'
import { ThemedText } from './ThemedText'

const currencies = {
  coin: {
    image: require('@/assets/images/currency/coin.png'),
  },
  cash: {
    image: require('@/assets/images/currency/cash.png'),
  },
}

export default function CurrencySelectorBar() {
  const { currency, setCurrency } = useCurrency()

  const gradientColors = useMemo(() => {
    if (currency === CurrencyType.COIN) {
      return ['#F02E9531', '#F02E9500']
    }
    return ['#15C54A31', '#15C54A00']
  }, [currency])

  return (
    <View style={styles.container}>
      <View style={styles.gradientContainer}>
        <LinearGradient
          colors={gradientColors as any}
          style={{ flex: 1 }}
          start={[0, 1]}
          end={[1, 0]}
        />
      </View>
      <View style={styles.currencyContainer}>
        <Image source={currencies[currency].image} style={styles.currencyImage} />
        <ThemedText style={{ fontFamily: 'Joyride' }}>12,000,000</ThemedText>
      </View>
      <Switch
        value={currency === CurrencyType.CASH}
        onValueChange={(state) =>
          setCurrency(state ? CurrencyType.CASH : CurrencyType.COIN)
        }
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 12,
    marginLeft: -16,
    marginRight: -16,
  },
  gradientContainer: {
    position: 'absolute',
    inset: 0,
  },
  currencyContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  currencyImage: {
    width: 24,
    height: 24,
  },
})
