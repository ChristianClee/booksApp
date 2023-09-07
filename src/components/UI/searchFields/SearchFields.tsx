import React from 'react';
import "./style.css";
import SearchField from '../searchField/SearchField';
import Filter from '../filter/Filter';
import Result from '../result/Result';
import PopUpFilter from '../popUpFilter/PopUpFilter';
import { useActions } from "../../../redux/reduxHooks"
import { selectBook } from "../../../redux/slices/bookSlice"
import { useSelector } from 'react-redux'



const SearchFields: React.FC = () => {
  const { getFilterTuggle, getSortTuggle } = useActions()
  const { filterState, sortState } = useSelector(selectBook)

  return (
    <div className='searchFields'>
      <SearchField />
      <div className='searchFields__container'>
 
        <Filter func={getFilterTuggle}>
          <PopUpFilter category={["all", "art", "biography", "computers", "history", "medical", "poerty"]} flag={filterState} />
        </Filter>

        <Filter func={getSortTuggle}>
          <PopUpFilter category={["relevance ", "newest"]} flag={sortState} />
        </Filter>
 
        <Result />
      </div>
    </div>
  );
}
export default SearchFields ;