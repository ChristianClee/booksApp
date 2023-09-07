import React, { useLayoutEffect, useEffect } from 'react';
import './normolize.css'
import './App.css';
import SearchFields from "./components/UI/searchFields/SearchFields"
import BookFields from './components/UI/bookFields/BookFields';
import {useActions} from "./redux/reduxHooks"
import { useSelector } from 'react-redux';
import { selectBook } from "./redux/slices/bookSlice"
import { checkClosestParant } from "./components/utilits/utilits"
import { useClosePopUpByScroll } from "./components/customHooks/customHooks"


const App: React.FC = () => {
  const { closePopUpFilter: dispatch} = useActions()
  const { exceptClassNames: list } = useSelector(selectBook)

  useClosePopUpByScroll()

  return (
    <div
      className="App"
      onClick={(event) => {
        checkClosestParant(event, list, dispatch)
      }}

    >
      <div className='App__fixedPositionField'>
        <SearchFields />
      </div>
      <BookFields/>
    </div>
  );
}

export default App;
