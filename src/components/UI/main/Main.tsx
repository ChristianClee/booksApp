import React from 'react';
import SearchFields from "../searchFields/SearchFields"
import BookFields from '../bookFields/BookFields';
import { checkClosestParant } from "../../../components/utilits/utilits"
import { useActions } from "../../../redux/reduxHooks"
import { useSelector } from 'react-redux';
import { selectBook } from "../../../redux/slices/bookSlice"

const Main: React.FC = () => {
  const { closePopUpFilter: dispatch } = useActions()
  const { exceptClassNames: list } = useSelector(selectBook)


  return (
    <div
      onClick={(event) => {
        checkClosestParant(event, list, dispatch)
      }}>
      <div className='App__fixedPositionField'>
        <SearchFields />
      </div>
      <BookFields />
    </div>
  );
}
export default Main;