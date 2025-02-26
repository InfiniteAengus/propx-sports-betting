// This file is a fallback for using MaterialIcons on Android and web.
import { OpaqueColorValue, StyleProp, ViewStyle } from 'react-native'
import React from 'react'
import Icons from '@expo/vector-icons/FontAwesome6'
import MaterialIcons from '@expo/vector-icons/MaterialIcons'
import { SymbolWeight } from 'expo-symbols'

export function IconSymbol({
  name,
  size = 24,
  color,
  style,
}: {
  name: string
  size?: number
  color: string | OpaqueColorValue
  style?: StyleProp<ViewStyle>
  weight?: SymbolWeight
}) {
  return <Icons color={color} size={size} name={name} style={style} />
}
