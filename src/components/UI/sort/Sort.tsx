import React from 'react';
import "./style.css";
import {ReactComponent as Arrow} from "../../assets/arrow.svg"

const Sort:React.FC = () => {
  return (
    <div className='searchField__filtering'>
      <div className='searchField__element'>sort</div>
      <Arrow className='seasearchField__img' />
      <span className='animation'></span>
    </div>
  );
}
export default Sort;