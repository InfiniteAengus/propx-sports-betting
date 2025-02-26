import {
  KeyboardAvoidingViewProps,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native'
import Animated, {
  interpolate,
  useAnimatedRef,
  useAnimatedStyle,
  useScrollViewOffset,
} from 'react-native-reanimated'
import { Edge, useSafeAreaInsets } from 'react-native-safe-area-context'
import { PropsWithChildren, ReactElement, useRef } from 'react'
import { LinearGradient } from 'expo-linear-gradient'
import { ThemedView } from '@/components/ThemedView'
import { useBottomTabOverflow } from '@/components/ui/TabBarBackground'
import { ThemedText } from './ThemedText'
import { IconSymbol } from './ui/IconSymbol'

const HEADER_HEIGHT = 68

type Props = PropsWithChildren<{
  noSafeArea?: boolean
  allSafeAreaEdges?: boolean
  safeAreaEdges?: Edge[]
  keyboardAvoiding?: boolean
  keyboardAvoidingBehavior?: KeyboardAvoidingViewProps['behavior']
  keyboardVerticalOffset?: KeyboardAvoidingViewProps['keyboardVerticalOffset']
}>

export default function ParallaxScrollView(props: Props) {
  const {
    children,
    noSafeArea = false,
    allSafeAreaEdges = false,
    safeAreaEdges = ['bottom', 'left', 'right'],
    keyboardAvoiding = false,
    keyboardAvoidingBehavior,
    keyboardVerticalOffset,
  } = props

  const resolvedKeyboardVerticalOffset = keyboardVerticalOffset || 0
  const insets = useSafeAreaInsets()

  const resolvedSafeAreaEdges = noSafeArea
    ? []
    : allSafeAreaEdges
      ? ['top', 'bottom', 'left', 'right']
      : safeAreaEdges

  const scrollRef = useAnimatedRef<Animated.ScrollView>()
  const scrollOffset = useScrollViewOffset(scrollRef)
  const bottom = useBottomTabOverflow()

  const headerAnimatedGradientStyle = useAnimatedStyle(() => {
    return {
      opacity: interpolate(
        scrollOffset.value,
        [-HEADER_HEIGHT, 0, HEADER_HEIGHT],
        [1, 0, 1],
      ),
    }
  })

  return (
    <ThemedView
      style={[
        styles.container,
        {
          paddingTop: resolvedSafeAreaEdges.includes('top') ? insets.top : undefined,
          paddingBottom: resolvedSafeAreaEdges.includes('bottom')
            ? insets.bottom
            : undefined,
          paddingLeft: resolvedSafeAreaEdges.includes('left') ? insets.left : undefined,
          paddingRight: resolvedSafeAreaEdges.includes('right')
            ? insets.right
            : undefined,
        },
      ]}
    >
      <SafeAreaView>
        <View style={styles.header}>
          <ThemedText type='title' style={styles.headerTitle}>
            SPORTS
          </ThemedText>

          <View style={styles.headerButtons}>
            <TouchableOpacity style={styles.headerButton}>
              <IconSymbol name='bell' color='#fff' size={20} />
            </TouchableOpacity>

            <TouchableOpacity style={styles.headerButton}>
              <IconSymbol name='wallet' color='#fff' size={20} />
            </TouchableOpacity>

            <TouchableOpacity style={styles.headerButton}>
              <IconSymbol name='user-circle' color='#fff' size={20} />
            </TouchableOpacity>
          </View>
        </View>

        <View>
          <Animated.View style={[styles.gradientOverlay, headerAnimatedGradientStyle]}>
            <LinearGradient colors={['#101216', '#10121600']} style={styles.gradient} />
          </Animated.View>

          <Animated.ScrollView
            ref={scrollRef}
            scrollEventThrottle={16}
            scrollIndicatorInsets={{ bottom }}
            contentContainerStyle={{ paddingBottom: bottom }}
          >
            <ThemedView style={styles.content}>{children}</ThemedView>
          </Animated.ScrollView>
        </View>
      </SafeAreaView>
    </ThemedView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
  },
  header: {
    paddingLeft: 16,
    paddingRight: 16,
    height: HEADER_HEIGHT,
    overflow: 'hidden',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  headerTitle: {
    fontFamily: 'Joyride',
    fontWeight: '600',
    fontSize: 26,
  },
  headerButtons: {
    flexDirection: 'row',
    gap: 8,
  },
  headerButton: {
    backgroundColor: '#ffffff20',
    padding: 10,
    borderRadius: 8,
  },
  content: {
    flex: 1,
    padding: 16,
    gap: 16,
  },
  gradientOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: 56,
    zIndex: 9,
  },
  gradient: {
    flex: 1,
  },
})
