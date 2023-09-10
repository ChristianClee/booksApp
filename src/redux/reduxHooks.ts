import {useMemo} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import type { AppDispatch, RootState } from './store'
import { bindActionCreators } from '@reduxjs/toolkit'
import {actions as bookActions, fetchUserById, pagination} from './slices/bookSlice'      // data
export const useAppDispatch: () => AppDispatch = useDispatch
  const rootActions = {
  ...bookActions, fetchUserById, pagination                                         // data
}


export const useActions = () => {
  const dispatch = useAppDispatch()
  return useMemo(() => 
    bindActionCreators(rootActions, dispatch )
  ,[dispatch])
}
