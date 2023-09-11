import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../store'
// import {filterForFetching} from "../../components/utilits/utilits"
import { type BookState, itemsT} from "../types"
import {
  LOADING,
  SUCCESS,
  ERROR,
  key,
  filterItems,
  sortItems,
  empryBooksStore,
  maxElements
} from "../viriabls"





export const fetchUserById = createAsyncThunk(
  'book/fetchByIdStatus',
  async (params: { inputData: string, sort: string }) => {
    let { inputData, sort } = params
    inputData = inputData.trim()
    let get: string
    
    if (inputData === "") return empryBooksStore
 
    
    get = `https://www.googleapis.com/books/v1/volumes?q=${inputData}&orderBy=${sort}&maxResults=${maxElements}&key=${key}`
    
    


    const response = await fetch(get).then(res => res.json())
    // console.log(response)
    // if(filter === "") filterForFetching()
    if(response.totalItems === 0) return empryBooksStore
    const result = { amount: response.totalItems, items: response.items }
    return result

  }
)

export const pagination = createAsyncThunk(
  'book/pagination',
  async (params:{inputData: string, sort:string, count:string }) => {
    let { sort, inputData, count } = params
    inputData = inputData.trim()
    count = String(count)

     
    const get = `https://www.googleapis.com/books/v1/volumes?q=${inputData}&orderBy=${sort}&startIndex=${count}&maxResults=${maxElements}&key=${key}`
    
    const response = await fetch(get).then(res => res.json())
    const result: itemsT[] = response.items
    console.log(response)
    if(response.totalItems === 0) return []
    return result
  }
)









const initialState: BookState = {
  filterState: false,
  sortState: false,
  filterItem: filterItems[0],
  sortItem: sortItems[0],
  exceptClassNames: [],
  inputData: "",
  books: empryBooksStore,
  error: "",
  status: "",
}

export const bookSlice = createSlice({
  name: 'book',
  initialState,
  reducers: {
    //=========================sort and filter actions=========================================
    getFilterTrue: (state) => {
      state.filterState = true
    },
    getFilterFalse: (state) => {
      state.filterState = false
    },
    getFilterTuggle: (state) => {
      state.filterState = !state.filterState
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
    closePopUpFilter: (state, active: PayloadAction<boolean>) => {
      if (!active.payload) {
        state.filterState = false
        state.sortState = false
      } 
    },
    changeFilterItem: (state, active: PayloadAction<{name: string, value: string}>) => {
      state.filterItem = active.payload
    },
    changeSortItem: (state, active: PayloadAction<{name: string, value: string}>) => {
      state.sortItem = active.payload
    },
    
    //=========================sort and filter actions==========================================




    //=========================input actions====================================================
    changeInputData: (state, action: PayloadAction<string>) => {
      state.inputData = action.payload
    },
    //=========================input actions====================================================
  },


  extraReducers: (builder) => {
    //========================= fetching ====================================================
    builder
      .addCase(fetchUserById.pending, (state, action) => {
        state.error = null
        state.books = empryBooksStore
        state.status = LOADING
      })
      .addCase(fetchUserById.fulfilled, (state, action) => {
        state.status = SUCCESS
        state.books = action.payload
      })
      .addCase(fetchUserById.rejected, (state, action) => {
        state.status = ERROR
        state.books = empryBooksStore
        if (action.error.message) {
          state.error = action.error.message
        }
      })
    //========================= fetching ====================================================
      
      
    //========================= pagination ====================================================
    .addCase(pagination.pending, (state, action) => {
      state.error = null
      state.status = LOADING
    })
    .addCase(pagination.fulfilled, (state, action) => {
      state.status = SUCCESS
      const newData = action.payload
      if (newData) {
        state.books =  { amount: state.books.amount, items: [...state.books.items, ...newData] }
      } else {
        state.books =  { amount: state.books.items.length , items: state.books.items }
      }
      
      

    })
    .addCase(pagination.rejected, (state, action) => {
        state.status = ERROR
        state.books = empryBooksStore
        if (action.error.message) {
          state.error = action.error.message
        }
    })
    //========================= pagination ====================================================
    }
})

export const selectBook = (state: RootState) => state.book
export const { actions } = bookSlice

export default bookSlice.reducer