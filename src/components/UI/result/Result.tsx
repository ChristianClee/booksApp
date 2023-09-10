import React from 'react';
import "./style.css";
import { selectBook } from "../../../redux/slices/bookSlice";
import { useSelector } from 'react-redux';

const Result: React.FC = () => {
  const { books } = useSelector(selectBook)
  return (
    <div
      className='searchField__text'
    >
      <span>found</span>
      <span className='searchField__info-result'>{books.amount}</span>
      <span>books</span>
    </div>
  );
}
export default Result;