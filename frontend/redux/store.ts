import AsyncStorage from '@react-native-async-storage/async-storage'
import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { persistReducer, persistStore } from 'redux-persist'
import accountSlice from './slices/account.slice'
import betsSlice from './slices/bets.slice'

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
}

const reducer = combineReducers({
  accountSlice,
  betsSlice,
})

export const makeStore = () => {
  const persistedReducer = persistReducer(persistConfig, reducer)
  const store = configureStore({
    reducer: persistedReducer,
  })
  return store
}

export const store = makeStore()
export const persistor = persistStore(store)

// Infer the `RootState` and `AppDispatch` types from the store itself
export type AppStore = ReturnType<typeof makeStore>
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']
