import React, { useEffect, useRef, useState } from 'react';
import "./style.css"
import { ReactComponent as NoPicture } from "../../assets/images/noPhoto.svg"
import { useIsContaiterOver } from '../../customHooks/customHooks';
import { itemsT } from "../../../redux/types"
import {Link} from "react-router-dom"

type LittleBookItemT = {
  item: itemsT
  img: string | undefined
  title: string | undefined
  cathegory: string[] | undefined
  authors: string[] | undefined
}


const LittleBookItem: React.FC<LittleBookItemT> = ({ img, title, cathegory, authors, item }) => {
  const mainRef = useRef<HTMLDivElement>(null)
  const paddingRef = useRef<HTMLAnchorElement>(null)

  const [showMore, setShowMore] = useState(false)

  useIsContaiterOver(mainRef, paddingRef, img, title, setShowMore)


  return (
    <div
      className='littleBookItem'
      ref={mainRef}

    >
      
      <Link to="/book" state={{ from: item }}
        className='littleBookItem__box'
        ref={paddingRef}
     

      >
        <Image img={img} />
        <Title title={title} />
        <Author authors={authors} />
        <Cathegory cathegory={cathegory} />
      </Link>
      <ShowMore showMore={showMore} />
    </div>

  );
}
export default LittleBookItem;




const Image: React.FC<{ img: string | undefined }> = ({ img }) => {
  return (
    <>
      {
        img ?
          <div className='littleBookItem__img'>
            <img src={img} alt="" />
          </div>
          :
          <div className='littleBookItem__noPhoto'>
            <NoPicture className='littleBookItem__fakeFoto' />
            <h3>no photo</h3>
          </div>
      }
    </>
  );
}

const Title: React.FC<{ title: string | undefined }> = ({ title }) => {
  return (
    <>
      {
        title &&
        // <p className='littleBookItem__title'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit dolore numquam explicabo totam animi quos minima excepturi est tempore mollitia autem consequatur cumque, aliquam exercitationem sequi qui debitis eius nulla doloremque facere eos, ipsa, omnis porro! Excepturi consequatur eos omnis quos aspernatur ea ratione, dolorem assumenda molestias earum magni modi! </p>
        <p className='littleBookItem__title'>{title}</p>
      }
    </>
  );
}

const Author: React.FC<{ authors: string[] | undefined }> = ({ authors }) => {
  return (
    <>
      {
        authors ?
          <p className='littleBookItem__auittleBookItem_thors'>{authors[0]}</p>
          :
          <p className='littleBookItem__noInfoText'>author no info</p>
      }
    </>
  );
}

const Cathegory: React.FC<{ cathegory: string[] | undefined }> = ({ cathegory }) => {
  return (
    <>
      {
        cathegory ?
          <p className='littleBookItem__cathegory'>{cathegory}</p>
          :
          <p className='littleBookItem__noInfoText'> cathegory no info </p>
      }
    </>
  );
}




const ShowMore: React.FC<{ showMore: boolean }> = ({ showMore }) => {
  return (
    <>
      {
        showMore &&
        <div
          className='littleBookItem__addition'
        >
          ...read more...
        </div>
      }
    </>
  );
}


