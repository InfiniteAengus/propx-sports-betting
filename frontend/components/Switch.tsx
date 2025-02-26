import { StyleSheet } from 'react-native'
import SplicerSwitch, { SwitchProps } from '@splicer97/react-native-switch'

export default function Switch(props: SwitchProps) {
  return (
    <SplicerSwitch
      {...props}
      circleStyle={styles.circle}
      activeColor='#15C54A'
      inactiveColor='#F02E95'
      containerStyle={styles.container}
    />
  )
}

const styles = StyleSheet.create({
  circle: {
    backgroundColor: 'white',
    width: 20,
    height: 20,
  },
  container: {
    height: 24,
    width: 48,
  },
})
