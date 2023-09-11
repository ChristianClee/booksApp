import React from 'react';
import { useLocation, Link } from "react-router-dom"
import { itemsT } from "../../../redux/types"
import { ReactComponent as NoPicture } from "../../assets/images/noPhoto.svg"
import { ReactComponent as Back } from "../../assets/images/back.svg"
import "./style.css"

type strT = string | undefined
type listT = string[] | undefined

const ItemPage: React.FC = () => {
  const location = useLocation()
  const { from }: { from: itemsT } = location.state

  const image: strT = from.volumeInfo?.imageLinks?.thumbnail
  const title: strT = from.volumeInfo?.title
  const authors: listT = from.volumeInfo?.authors
  const categories: listT = from.volumeInfo?.categories
  const descriptions: strT = from.volumeInfo?.description



  return (
    <div className='itemPage'>
      <h2> info about book </h2>
      <div className='itemPage__box'>
        <div className='itemPage__cont'>
          <Image image={image} />
        </div>
        <div className='itemPage__cont '>
          <Title title={title} />
          <Authors authors={authors} />
          <Cathegory categories={categories} />
          <Description descriptions={descriptions} />
        </div>
      </div>
      <Link to="/" className='itemPage__back'>
        <Back className='ibg' />
      </Link>
    </div>
  );
}
export default ItemPage;


const Image: React.FC<{ image: strT }> = ({ image }) => {
  return (
    <>
      {
        image
          ?
          <div className='itemPage__ing'>
            < img className='ibg' src={image} alt="" />
          </div >
          :
          <div className='itemPage__ing'>
            <NoPicture className='ibg' />
            <h3>no photo</h3>
          </div>
      }
    </>
  );
}
const Title: React.FC<{ title: strT }> = ({ title }) => {
  return (
    <div className='itemPage__title'>{title}</div>
  );
}
const Authors: React.FC<{ authors: listT }> = ({ authors }) => {
  return (
    <>
      {
        authors ?
          <div className='itemPage__authors'>{authors}</div>
          :
          <p className='itemPage__noInfo'>author no info</p>
      }
    </>

  );
}
const Cathegory: React.FC<{ categories: listT }> = ({ categories }) => {
  return (
    <>
      {
        categories ?
          <div className='itemPage__category'>{categories}</div>
          :
          <p className='itemPage__noInfo'> cathegory no info </p>
      }
    </>



  );
}
const Description: React.FC<{ descriptions: strT }> = ({ descriptions }) => {
  return (
    <>
      {
        descriptions ?
          <div className='itemPage__descriptions'>{descriptions}</div>
          :
          <p className='itemPage__noInfo'> descriptions no info </p>

      }
    </>

  );
}
