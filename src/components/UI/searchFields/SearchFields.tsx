import React from 'react';
import "./style.css";
import SearchField from '../searchField/SearchField';
import Filter from '../filter/Filter';
import Result from '../result/Result';
import PopUpFilter from '../popUpFilter/PopUpFilter';
import { useActions } from "../../../redux/reduxHooks"
import { selectBook } from "../../../redux/slices/bookSlice"
import { useSelector } from 'react-redux'
import { filterItems, sortItems } from "../../../redux/viriabls"



const SearchFields: React.FC = () => {
  const { getFilterTuggle, getSortTuggle, changeFilterItem, changeSortItem } = useActions()
  const { filterState, sortState, filterItem, sortItem, status } = useSelector(selectBook)

  return (
    <div className='searchFields'>
      <SearchField />                                {/* инпут с кнопкой*/}
      <div className='searchFields__container'>     {/* сортировка фильтр и колличество найденных элементов*/}
 
        <Filter func={getFilterTuggle} flag={filterState} label={"cathegory"} item={filterItem}>
          <PopUpFilter category={filterItems} flag={filterState} item={filterItem} func={changeFilterItem} />
        </Filter>

        <Filter func={getSortTuggle} flag={sortState} label={"sort"} item={sortItem}>
          <PopUpFilter category={sortItems} flag={sortState} item={sortItem} func={changeSortItem} />
        </Filter>

        {
          status && <Result />
        }
        
      </div>
    </div>
  );
}
export default SearchFields ;