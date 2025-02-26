import { StyleSheet, Text, View } from 'react-native'
import { useLazyLoadQuery } from 'react-relay'
import { Colors } from '@/constants/Colors'
import { matchesQuery as MatchesQueryType } from '../graphql/__generated__/matchesQuery.graphql'
import { MatchesQuery } from '../graphql/queries/matches'
import MatchCard from './MatchCard'
import { ThemedText } from './ThemedText'

const MatchSection = () => {
  const data = useLazyLoadQuery<MatchesQueryType>(MatchesQuery, {})

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <ThemedText>NBA</ThemedText>
        <View style={styles.popularBadge}>
          <Text style={styles.popularText}>POPULAR</Text>
        </View>
      </View>

      <View>
        {(data?.getMatches || [])?.map((match, ind) => (
          <MatchCard key={`match-${ind}`} match={match} />
        ))}
      </View>
    </View>
  )
}

export default MatchSection

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#1B1E23',
    padding: 16,
    paddingBottom: 0,
    borderRadius: 8,
    marginBottom: 80,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  popularBadge: {
    backgroundColor: Colors.dark.yellow,
    padding: 8,
    borderRadius: 8,
    boxShadow: '0px 0px 4px #ffe10080',
  },
  popularText: {
    fontWeight: '400',
    fontFamily: 'Joyride',
    fontSize: 12,
  },
})
