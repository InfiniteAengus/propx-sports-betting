import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { CurrencyType } from '@/constants/enum'

type InitialStateProps = {
  currency: CurrencyType
  selectedBetAmount: number | undefined
}

const initialState: InitialStateProps = {
  currency: CurrencyType.COIN,
  selectedBetAmount: undefined,
}

export const accountSlice = createSlice({
  name: 'account',
  initialState,
  reducers: {
    updateAccount(state, action: PayloadAction<any>) {
      state = { ...state, ...action.payload }
      return state
    },
    clearAccount(state) {
      state = initialState
      return state
    },
    updateBetAmount(state, action: PayloadAction<number | undefined>) {
      state = { ...state, selectedBetAmount: action.payload }
      return state
    },
  },
  extraReducers: (builder) => {},
})

export const { updateAccount, clearAccount, updateBetAmount } = accountSlice.actions

export default accountSlice.reducer
