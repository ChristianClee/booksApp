import React, { useRef } from 'react';
import "./style.css"
import { ReactComponent as Arrow } from "../../assets/arrow.svg"
import { useSaveClass } from '../../customHooks/customHooks';
const Filter: React.FC<{ children:React.ReactNode, func: ()=> void } > = ({children, func}) => {
  const saveRef = useRef<HTMLHeadingElement>(null)
  useSaveClass(saveRef)
  
  


  return (
    <div className='searchField__container-filter'>
      <div className='searchField__label-filter'>cathegory</div>
      <div
        className='searchField__filtering'
        ref = {saveRef}
        onClick={(e) => {
          func()
        }}
      >
        <div className='searchField__element'>all</div>
        <Arrow className='seasearchField__img' />
        <span className='animation'></span>
      </div>
      
      
      {children}
    </div>
    
  );
}
export default Filter;