import  React from 'react';
import "./style.css"
import date from "../../assets/book.json"

const LittleBookItem:React.FC = () => {
  return (
    <div className='littleBookItem'>
      <div className='littleBookItem__img'>
        <img src={date.imageLinks.smallThumbnail} alt="" />
      </div>
      <p className='littleBookItem__cathegory'>{date.categories }</p>
      <p className='littleBookItem__title'>{date.title}</p>
      <p className='littleBookItem__auittleBookItem_thors'>{date.authors[0]}</p>
    </div>
  );
}
export default LittleBookItem;