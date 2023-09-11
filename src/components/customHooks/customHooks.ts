import { useLayoutEffect, useEffect, useCallback } from "react"
import { useActions } from "../../redux/reduxHooks"
import { useSelector } from 'react-redux';
import { selectBook } from "../../redux/slices/bookSlice"

type saveClassT = (elem: React.RefObject<HTMLHeadingElement>)=> void
type IsContaiterOverT = (
  mainRef: React.RefObject<HTMLDivElement>,
  paddingRef: React.RefObject<HTMLAnchorElement>,
  img: string | undefined,
  title: string | undefined,
  setShowMore: (arg: boolean)=>void
) => void




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

export const useIsContaiterOver: IsContaiterOverT = (mainRef, paddingRef, img, title, setShowMore) => {
    useEffect( () => {  
    let heightMain:number = 0
    let heightPadding: number = 0
    const heightMessage = 32

    if (mainRef.current) {
      heightMain = mainRef.current.getBoundingClientRect().height
      heightMain = Math.round(heightMain)
    }
    if (paddingRef.current) {
      heightPadding = paddingRef.current.getBoundingClientRect().height
      heightPadding = Math.round(heightPadding)
    }
    if (heightMain < heightPadding + heightMessage ) {
      setShowMore(true)
    } else {
      setShowMore(false)
    }
      
  }, [img, title])

}

// export const useFetching: fetchDateT = async () => {
//   const { fetchUserById } = useActions()
//   const { sortItem, filterItem, inputData, makeFetch, status } = useSelector(selectBook)

//   const func: fetchDateT = () => {
//     const sort = sortItem.value
//     const filter = filterItem.value
//     fetchUserById({ inputData, sort, filter })
//     fetchUserById({ inputData, sort, filter })
//   }

//   useEffect(() => { 

//       func()
  
//       return () => func()
    
//   },[makeFetch])
  
 
// }
