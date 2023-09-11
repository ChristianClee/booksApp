import type{filterT, itemsT, empryBooksStoreT, listItemsT, booksI} from "../../redux/types"
type checkClosestParantT = (event: React.MouseEvent, list: string[], dispatch: (arg: boolean) => void) => void
type getMarginT = (num: number, flag: boolean) => string 
type getDurationT = (num: number, minDuration: number) => string 
type fetchDateT = ( sortItem: filterT, filterItem: filterT, inputData: string,
  fetchFunc: ({inputData, sort, filter }:{inputData: string, sort:string, filter: string} )=> void

) => void
type filterForFetchingT = (
  response: any,
  empryBooksStore: empryBooksStoreT,
  filter: string,
  filterItems: listItemsT) => booksI
  
type filterFuncT = (list: itemsT[], filterItem: string) => itemsT[]

export const checkClosestParant: checkClosestParantT = (event, list, dispatch) => {
  let result = false
  if (list.length > 0) {
    list.forEach(elem => {
      if (
        event.target instanceof HTMLElement
        || event.target instanceof SVGElement // checking for TypeScript
      ) {     
        const answer = event.target.closest(`.${elem}`)
        if (answer) result = true
      }
    })
  }
  dispatch(result)
}

export const getMargin:getMarginT = (num, flag) => {
  let marginTop
  if (flag) {
    marginTop = `calc(-1 * var(--heigh-item-serch) * ${num} )`
  } else {
    marginTop = `0`
  }
  return marginTop
}

export const getDuration:getDurationT = (num, minDuration) => {
    let duration = minDuration * num
    return `${duration}s`
}
  

export const filterFunc: filterFuncT = (list, filterItem) => {
  const answer = list.filter(item => {
    const categories = item.volumeInfo?.categories
    
    if (filterItem === "") return true
    
    if (!categories) return false
    if (categories.length === 0) return false
    const newCategories = categories
      .join(" ")
      .toLocaleLowerCase()
      .split(" ")
    const result = newCategories.filter(elem => filterItem === elem)
    if (result.length > 0) return true
  })
  return answer
}