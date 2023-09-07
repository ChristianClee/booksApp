import React, { useState } from 'react';
// import { useSelector } from "react-redux";
// import { selectPopUp } from "../../../redux/slices/bookSlice"
import "./style.css"

const PopUpFilter: React.FC<{ category: string[], flag: boolean }> = ({ category, flag}) => {


  function getMargin(num: number): string {
    let marginTop
    if (flag) {
      marginTop = `calc(-1 * var(--heigh-item-serch) * ${num} )`
    } else {
      marginTop = `0`
    }
    return marginTop
  }

  function getDuration(num: number, minDuration: number): string {
    let duration = minDuration * num
    return `${duration}s`
  }

  

  return (
    <>
      {
        category.map((item, index: number) => {
          index += 1
          return (
            <div
              className='popUpFilter'
              key={index}
              style={{
                bottom: getMargin(index),
                transitionDuration: getDuration(index, .07),
                zIndex: `${index}`
              }}
            >
              {item}
            </div>
          )
        })
      }
    </>
  );
}
export default PopUpFilter;