import { StyleSheet, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { LinearGradient } from 'expo-linear-gradient'
import { Tabs } from 'expo-router'
import { IconSymbol } from '@/components/ui/IconSymbol'

const CustomTabBarIcon = ({ name, focused }: { name: string; focused: boolean }) => (
  <View style={styles.iconContainer}>
    <IconSymbol name={name as any} size={18} color={focused ? '#fff' : '#666'} />
  </View>
)

export default function TabLayout() {
  return (
    <Tabs
      initialRouteName='sports'
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ focused }) => {
          const icon: Record<string, string> = {
            sports: 'football',
            featured: 'medal',
            mybets: 'list-check',
            social: 'globe',
            reward: 'diamond',
          }
          return <CustomTabBarIcon name={icon[route.name]} focused={focused} />
        },
        tabBarButton: ({ accessibilityState, ...props }) => {
          const focused = accessibilityState?.selected

          return (
            <View style={styles.tabItemContainer}>
              {focused && (
                <View style={styles.activeTabItemContainer}>
                  <View style={styles.activeTabItem} />
                  <LinearGradient
                    colors={['#F02E95', '#F02E9500']}
                    style={styles.glowEffect}
                  />
                  <LinearGradient
                    colors={['#F02E95', '#F02E9500']}
                    style={[styles.glowEffect, styles.glowEffectHeight]}
                  />
                  <LinearGradient
                    colors={['#F02E95', '#F02E9500']}
                    style={[styles.glowEffect, styles.glowEffectHeightSmall]}
                  />
                </View>
              )}
              <TouchableOpacity {...(props as any)} style={styles.tabButton} />
            </View>
          )
        },
        tabBarStyle: styles.tabBar,
        tabBarLabelStyle: styles.tabBarLabel,
        tabBarItemStyle: styles.tabBarItem,
        tabBarActiveTintColor: '#fff',
        tabBarInactiveTintColor: '#6B6B77',
      })}
    >
      <Tabs.Screen name='sports' options={{ title: 'Sports' }} />
      <Tabs.Screen name='featured' options={{ title: 'Featured' }} />
      <Tabs.Screen name='mybets' options={{ title: 'My bets' }} />
      <Tabs.Screen name='social' options={{ title: 'Social' }} />
      <Tabs.Screen name='reward' options={{ title: 'Reward' }} />
      <Tabs.Screen name='index' options={{ href: null }} />
    </Tabs>
  )
}

const styles = StyleSheet.create({
  iconContainer: {
    alignItems: 'center',
  },
  activeTabItemContainer: {
    position: 'relative',
    width: '100%',
  },
  activeTabItem: {
    position: 'absolute',
    width: '100%',
    borderTopColor: '#F02E95',
    borderTopWidth: 3,
    top: -2,
  },
  glowEffect: {
    position: 'absolute',
    width: '100%',
    height: 40,
    opacity: 0.2,
    filter: 'blur(5px)',
  },
  glowEffectHeight: {
    height: 25,
  },
  glowEffectHeightSmall: {
    height: 15,
  },
  tabBar: {
    backgroundColor: '#101216',
    borderTopWidth: 2,
    height: 64,
    padding: 0,
    borderTopColor: '#F3F3F3',
  },
  tabBarItem: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    height: '100%',
    width: '100%',
    position: 'relative',
  },
  tabBarLabel: {
    fontSize: 13,
    fontWeight: '600',
  },
  tabItemContainer: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  tabButton: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
