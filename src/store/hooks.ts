import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import type { RootReducer } from './index'

export const useAppDispatch = () => useDispatch()
export const useAppSelector: TypedUseSelectorHook<RootReducer> = useSelector