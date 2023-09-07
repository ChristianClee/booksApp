import { useLayoutEffect, useEffect } from "react"
import { useActions } from "../../redux/reduxHooks"
import { useSelector } from 'react-redux';
import { selectBook } from "../../redux/slices/bookSlice"

type saveClassT = (elem: React.RefObject<HTMLHeadingElement>)=> void



export const useSaveClass: saveClassT  = (elem)=> {
  const { saveClassName } = useActions()
  useLayoutEffect(() => {
    if(!elem.current) return 
    const clName = elem.current.classList[0]
    saveClassName(clName)
  },[])
}

export const useClosePopUpByScroll = () => {
  const { filterState, sortState } = useSelector(selectBook)
  const { getFilterFalse , getSortFalse} = useActions()
    useEffect(() => {
    function scroll() {
      if (filterState || sortState) {
        getFilterFalse()
        getSortFalse()
      }
    }
    window.addEventListener("scroll", scroll)
    return () => {
      window.removeEventListener("scroll", scroll)
    }
  }, [filterState, sortState])
}