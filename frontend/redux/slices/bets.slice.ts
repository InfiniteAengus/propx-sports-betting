import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { BetType } from '@/@types/global'

type InitialStateProps = BetType[]

const initialState: InitialStateProps = []

export const betsSlice = createSlice({
  name: 'bets',
  initialState,
  reducers: {
    addBet(state, action: PayloadAction<any>) {
      state = [...state, action.payload]
      return state
    },
    removeBet(state, action: PayloadAction<any>) {
      const { market, selection, match_id } = action.payload
      state = state.filter(
        (bet) =>
          !(
            bet.market === market &&
            bet.selection === selection &&
            bet.match_id === match_id
          ),
      )
      return state
    },
  },
  extraReducers: (builder) => {},
})

export const { addBet, removeBet } = betsSlice.actions

export default betsSlice.reducer
