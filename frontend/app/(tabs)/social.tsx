import { Image, View } from 'react-native'
import ParallaxScrollView from '@/components/ParallaxScrollView'

export default function TabTwoScreen() {
  return (
    <ParallaxScrollView allSafeAreaEdges>
      <View
        style={{
          flex: 1,
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: 200,
        }}
      >
        <Image
          source={require('@/assets/images/coming-soon.png')}
          style={{ width: 180, height: 180 }}
        />
      </View>
    </ParallaxScrollView>
  )
}
