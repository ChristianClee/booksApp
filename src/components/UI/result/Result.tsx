import React from 'react';
import "./style.css";

const Result:React.FC = () => {
  return (
    <div className='searchField__text'>
      <span>found</span>
      <span className='searchField__info-result'>446 </span>
      <span>results</span>
    </div>
  );
}
export default Result;