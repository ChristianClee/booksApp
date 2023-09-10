import React from 'react';
import "./style.css"
import { useSelector } from "react-redux"
import { useActions } from "../../../redux/reduxHooks"
import { selectBook } from "../../../redux/slices/bookSlice"
import { fetching } from "../../utilits/utilits"


const SearchField: React.FC = () => {
  const { changeInputData, fetchUserById } = useActions()
  const { inputData, filterItem, sortItem } = useSelector(selectBook)



  return (
    <div className='searchField__searchField' >
      <input
        className='searchField__input'
        type="text" required
        onKeyDownCapture={(e) => {
          if (e.nativeEvent.key === "Enter") fetching(sortItem, filterItem, inputData,fetchUserById)
        }}
        value={inputData}
        onChange={(event) => { changeInputData(event.target.value) }}
      />
      <label>search</label>
      <button
        className='searchField__button'
        onClick={() => fetching(sortItem, filterItem, inputData, fetchUserById)}
      >
        start
      </button>
      <span className='searchField__animation'></span>
    </div>
  );
}
export default SearchField;