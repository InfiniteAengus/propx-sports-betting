import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import Animated, {
  SharedValue,
  useAnimatedStyle,
  withSpring,
} from 'react-native-reanimated'
import React from 'react'
import { BetType } from '@/@types/global'
import { Colors } from '@/constants/Colors'

type Props = {
  bets: BetType[]
  translateY: SharedValue<number>
  visible: boolean
  openBottomSheet: () => void
}

const BetSlipButton: React.FC<Props> = ({
  bets,
  translateY,
  visible,
  openBottomSheet,
}) => {
  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ translateY: withSpring(translateY.value, { damping: 8 }) }],
    opacity: visible ? 1 : 0,
  }))

  return (
    <Animated.View style={animatedStyle}>
      <TouchableOpacity style={styles.button} onPress={openBottomSheet}>
        <Text style={styles.buttonText}>OPEN BET SLIP ({bets.length})</Text>
      </TouchableOpacity>
    </Animated.View>
  )
}

export default BetSlipButton

const styles = StyleSheet.create({
  button: {
    position: 'sticky',
    bottom: 0,
    backgroundColor: Colors.dark.yellow,
    boxShadow: '0px 0px 4px 1px #ffe10080',
    borderRadius: 8,
    height: 48,
    marginLeft: 16,
    marginRight: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontFamily: 'Joyride',
  },
})
