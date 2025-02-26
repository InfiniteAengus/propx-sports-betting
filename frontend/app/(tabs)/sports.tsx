import { useSharedValue } from 'react-native-reanimated'
import Carousel from 'react-native-reanimated-carousel'
import { useCallback, useEffect, useRef, useState } from 'react'
import { useMutation } from 'react-relay'
import BottomSheet, { BottomSheetBackdrop } from '@gorhom/bottom-sheet'
import BetBottomSheet from '@/components/BetBottomSheet'
import BetSlipButton from '@/components/BetSlipButton'
import CurrencySelectorBar from '@/components/CurrencySelectorBar'
import LiveSportNewsItem from '@/components/LiveSportNewsItem'
import MatchSection from '@/components/MatchSection'
import ParallaxScrollView from '@/components/ParallaxScrollView'
import { BetStatus, CurrencyType } from '@/constants/enum'
import { placeBetMutation } from '@/graphql/mutations/bet'
import { useCurrency } from '@/hooks/useCurrency'
import { updateBetAmount } from '@/redux/slices/account.slice'
import { useAppDispatch, useAppSelector } from '@/redux/types'

const defaultDataWith6Colors = [
  '#B0604D',
  '#899F9C',
  '#B3C680',
  '#5C6265',
  '#F5D399',
  '#F1F1F1',
]

export default function HomeScreen() {
  const [visible, setVisible] = useState<boolean>(false)
  const [currentStatus, setCurrentStatus] = useState<BetStatus>(BetStatus.UNSET)
  const { currency, setCurrency } = useCurrency()
  const { selectedBetAmount } = useAppSelector((state) => state.accountSlice)
  const bets = useAppSelector((state) => state.betsSlice)
  const dispatch = useAppDispatch()
  const translateY = useSharedValue(20) // Initially hidden
  const bottomSheetRef = useRef<BottomSheet>(null) // Reference to Bottom Sheet

  const openBottomSheet = useCallback(() => bottomSheetRef.current?.expand(), [])

  const closeBottomSheet = useCallback(() => bottomSheetRef.current?.close(), [])

  const [commit, isInFlight] = useMutation(placeBetMutation)

  const handleConfirmBet = () => {
    setCurrentStatus(BetStatus.CONFIRMING)

    for (let bet of bets) {
      commit({
        variables: {
          userId: '1',
          matchId: bet.match_id,
          teamId: bet.match[bet.selection]?.id,
          betType: bet.market,
          wagerAmount: selectedBetAmount,
          currency: currency,
          odds: 20, // we can implement more detailed logic
        },
        onCompleted: (response) => {
          setCurrentStatus(BetStatus.CONFIRMED)
        },
        onError: (error) => {
          setCurrentStatus(BetStatus.UNSET)
          console.log(error)
        },
      })
    }

    // setCurrentStatus(BetStatus.CONFIRMING)

    // setTimeout(() => {
    //   setCurrentStatus(BetStatus.CONFIRMED)
    // }, 5000)
  }

  const handleContinueBet = () => {
    dispatch(updateBetAmount(undefined))
    setCurrentStatus(BetStatus.UNSET)
    setCurrency(currency === CurrencyType.CASH ? CurrencyType.COIN : CurrencyType.CASH)
  }

  const handleCloseBet = () => {
    closeBottomSheet()
    setCurrentStatus(BetStatus.UNSET)
  }

  useEffect(() => {
    if (bets.length > 0 && !visible) {
      setVisible(true)
      translateY.value = -20
    } else if (bets.length <= 0) {
      setVisible(false)
      translateY.value = 20

      bottomSheetRef.current?.close()
    }
  }, [bets])

  return (
    <>
      <ParallaxScrollView allSafeAreaEdges>
        <CurrencySelectorBar />
        <Carousel
          width={324}
          height={181}
          snapEnabled={true}
          pagingEnabled={false}
          autoPlayInterval={2000}
          data={defaultDataWith6Colors}
          style={{ width: '100%' }}
          renderItem={() => <LiveSportNewsItem />}
        />
        <MatchSection />
      </ParallaxScrollView>

      <BetSlipButton
        bets={bets}
        translateY={translateY}
        visible={visible}
        openBottomSheet={openBottomSheet}
      />

      <BottomSheet
        ref={bottomSheetRef}
        index={-1} // Initially closed
        snapPoints={['75%']} // Drawer height options
        enablePanDownToClose={true} // Allow swipe down to close
        enableDynamicSizing={false}
        onClose={closeBottomSheet}
        backdropComponent={(props) => (
          <BottomSheetBackdrop {...props} appearsOnIndex={0} disappearsOnIndex={-1} />
        )}
        backgroundStyle={{ backgroundColor: '#1b1e23' }}
      >
        <BetBottomSheet
          currentStatus={currentStatus}
          isDisabled={!selectedBetAmount}
          onConfirmBet={handleConfirmBet}
          onCloseBet={handleCloseBet}
          onContinueBet={handleContinueBet}
        />
      </BottomSheet>
    </>
  )
}
