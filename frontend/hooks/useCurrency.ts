import { CurrencyType } from '@/constants/enum'
import { updateAccount } from '@/redux/slices/account.slice'
import { useAppDispatch, useAppSelector } from '@/redux/types'

export function useCurrency() {
  const { currency } = useAppSelector((state) => state.accountSlice)
  const dispatch = useAppDispatch()

  return {
    currency,
    setCurrency: (c: CurrencyType) => dispatch(updateAccount({ currency: c })),
  }
}
