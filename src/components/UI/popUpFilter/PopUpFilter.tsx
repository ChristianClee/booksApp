import React from 'react';
import { getMargin, getDuration } from "../../utilits/utilits"
import "./style.css"
import type {listItemsT , itemT} from "../../../redux/types"

type PopUpFilterT = {
  category: listItemsT;
  flag: boolean;
  item: itemT;
  func: (arg: { name: string, value: string }) => void
}

const PopUpFilter: React.FC<PopUpFilterT> = ({ category, flag, item, func }) => {
  
  const sortCathegory = category.filter(elem => elem.name !== item.name)

  return (
    <>
      {
        sortCathegory.map((elem, index: number) => {
          index += 1
          return (
            <div
              className='popUpFilter'
              key={index}
              style={{
                bottom: getMargin(index, flag),
                transitionDuration: getDuration(index, .07),
                zIndex: `${index}`
              }}
              onClick={(e) => {
                func(elem)
              }}
            >
              {elem.name}
            </div>
          )
        })
      }
    </>
  );
}
export default PopUpFilter;