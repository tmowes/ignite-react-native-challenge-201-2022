/* eslint-disable react/style-prop-object */
import { StatusBar } from 'expo-status-bar'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import { ThemeProvider } from 'styled-components/native'
import {
  useFonts,
  NunitoSans_400Regular,
  NunitoSans_700Bold,
} from '@expo-google-fonts/nunito-sans'

import { theme } from '@styles/theme'
import { Loading } from '@components/Loading'

import { Routes } from './routes'

export function AppSrc() {
  const [fontsLoaded] = useFonts({
    NunitoSans_400Regular,
    NunitoSans_700Bold,
  })

  return (
    <GestureHandlerRootView style={{ flex: 1, backgroundColor: '#121214' }}>
      <ThemeProvider theme={theme}>
        {fontsLoaded ? <Routes /> : <Loading />}
        <StatusBar style="dark" backgroundColor="transparent" translucent />
      </ThemeProvider>
    </GestureHandlerRootView>
  )
}
