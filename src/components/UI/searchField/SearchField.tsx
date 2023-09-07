import React from 'react';
import "./style.css"

const SearchField:React.FC = () => {
  return (
    <div className='searchField__searchField'>
      <input className='searchField__input' type="text" required />
      <label>search</label>
      <button
        className='searchField__button'
      >
        start
      </button>
      <span className='searchField__animation'></span>
    </div>
  );
}
export default SearchField;