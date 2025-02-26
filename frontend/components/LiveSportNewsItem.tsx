import { Image, StyleSheet, View } from 'react-native'
import { ThemedText } from './ThemedText'
import { ThemedView } from './ThemedView'

export default function LiveSportNewsItem() {
  return (
    <ThemedView style={styles.container}>
      <Image source={require('@/assets/images/nba.png')} style={styles.image} />
      <View style={styles.textContainer}>
        <ThemedText type='defaultSemiBold' style={styles.title}>
          League or Tournament name
        </ThemedText>
        <ThemedText style={styles.subtitle}>Aldenaire vs Wardiere</ThemedText>
      </View>
    </ThemedView>
  )
}

const styles = StyleSheet.create({
  container: {
    marginRight: 16,
    borderRadius: 8,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
  },
  textContainer: {
    padding: 16,
    backgroundColor: '#1B1E23',
  },
  title: {
    fontSize: 16, // You can adjust the font size to match the design
  },
  subtitle: {
    fontSize: 12,
  },
})
