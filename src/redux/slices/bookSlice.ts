import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../store'

export interface BookState {
  filterState: boolean
  sortState: boolean
  exceptClassNames: string[]

}

const initialState: BookState = {
  filterState: false,
  sortState: false,
  exceptClassNames: [],
}

export const bookSlice = createSlice({
  name: 'book',
  initialState,
  reducers: {
    getFilterTrue: (state) => {
      state.filterState = true
    },
    getFilterFalse: (state) => {
      state.filterState = false
    },
    getFilterTuggle: (state) => {
      state.filterState = !state.filterState
      console.log("SD")
    },
    getSortTrue: (state) => {
      state.filterState = true
    },
    getSortFalse: (state) => {
      state.sortState = false
    },
    getSortTuggle: (state) => {
      state.sortState = !state.sortState
    },
    saveClassName: (state, active: PayloadAction<string>) => {
      const classNames = state.exceptClassNames
      const str = active.payload
      if (classNames.includes(str)) return
      else state.exceptClassNames = [...state.exceptClassNames, str]
    },
    // closePopUpFilter: (state, active: PayloadAction<EventTarget>) => {
    closePopUpFilter: (state, active) => {
      if (!active.payload) {
        state.filterState = false
        state.sortState = false
        // console.log('state.filterState',state.filterState )
      } 
      // let result
      // if (active.payload instanceof HTMLElement) {
      //   result = active.payload.closest(`.${state.exceptClassNames[0]}`)
      // }
      // console.log(result)
      
    }

  },
})

export const selectBook = (state: RootState) => state.book
export const { actions } = bookSlice
export default bookSlice.reducer