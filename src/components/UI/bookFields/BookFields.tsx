import React from 'react';
import "./style.css";
import LittleBookItem from '../littleBookItem/LittleBookItem';
import { useSelector } from "react-redux"
import { selectBook } from "../../../redux/slices/bookSlice"
import Skeleton from '../skeleton/Skeleton';
import { ERROR, LOADING } from "../../../redux/viriabls"
import { ReactComponent as ErrorIcon } from "../../assets/images/error.svg"
import { ReactComponent as NoBookIcon } from "../../assets/images/noBooks.svg"
import {useActions} from "../../../redux/reduxHooks"

const BookFields: React.FC = () => {
  const { status, books, inputData, sortItem } = useSelector(selectBook)
  const { pagination } = useActions()

  // console.log(books)
  return (
    <>
      <div className='BookFields'>
        {
          status === LOADING ?
            <Skelets />
            :
            status === ERROR ?
              <ErrorMessage />
              :
              !status ?
                <div className='BookFields__greeting'> Enter value </div>
                :
                <Books />
        }
      </div>
      {
        books.amount > books.items.length ?
          <div
            className='loadding'
            onClick={() => pagination({ inputData: inputData, sort: sortItem.value, count: String(books.items.length) }) }
            // onClick={() => console.log("aasad asd")}
          >
            load more
          </div> :
          null
      }
    </>

  );
}
export default BookFields;


const Skelets: React.FC = () => {
  const skeletonList = Array(30).fill("")
  return (
    <>
      {
        skeletonList.map((item, index: number) => {
          return <Skeleton key={index} />
        })
      }
    </>
  );
}

const ErrorMessage: React.FC = () => {
  const { error } = useSelector(selectBook)
  return (
    <div className='BookFields__errorMessage'>
      <div className='BookFields__errorMessagImg'>
        <ErrorIcon className='ibg' />
      </div>
      <p>{error}</p>
    </div>
  );
}

const Books: React.FC = () => {
  const { books } = useSelector(selectBook)
  // console.log(filterItem)

  return (
    <>
      {
        books.amount === 0
          ?
          <NoBooks />
          :
          books.items.map((item, index: number) => {
            const title = item.volumeInfo?.title
            const author = item.volumeInfo?.authors
            const categories = item.volumeInfo?.categories
            const img = item.volumeInfo.imageLinks?.thumbnail

            return (
              <LittleBookItem
                item={item}
                img={img}
                authors={author}
                cathegory={categories}
                title={title}
                key={`${img} ${title} ${categories} ${index}`}
              />
            )
          })
      }
    </>
  );
}

const NoBooks: React.FC = () => {
  return (
    <div className='BookFields__errorMessage'>
      <div className='BookFields__errorMessagImg'>
        <NoBookIcon className='ibg' />
      </div>
      <p>unfortunately there is no one matches</p>
    </div>
  );
}

