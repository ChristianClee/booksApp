import React, { useEffect, useRef } from 'react';
import "./style.css"
import { ReactComponent as Arrow } from "../../assets/images/arrow.svg"
import { useSaveClass } from '../../customHooks/customHooks';
import type{ itemT } from "../../../redux/types"


type FilterT = {
  children: React.ReactNode
  flag: boolean
  func: () => void
  label: string
  item: itemT
}

const Filter: React.FC<FilterT> = ({ children, func, flag, label, item }) => {
  const saveRef = useRef<HTMLHeadingElement>(null)
  useSaveClass(saveRef)



  return (
    <div className='searchField__container-filter'>
      <div className='searchField__label-filter'>{label}</div>
      <div
        className='searchField__filtering'
        ref={saveRef}
        onClick={(e) => {
          func()
        }}
      >
        <div className='searchField__element'>{item.name}</div>
        <ArrowImage flag={flag} />
        <span className='animation'></span>
      </div>
      {children}
    </div>
    
  );
}
export default Filter;



const ArrowImage: React.FC<{ flag: boolean }> = ({ flag }) => {

  return (
    <div className={flag ? "seasearchField__img active" : "seasearchField__img" } >
      <Arrow className='ibg' />
    </div>
  );
}
