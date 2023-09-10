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
  filterItems:listItemsT ) => booksI

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
  
export const fetching:fetchDateT = async( sortItem, filterItem, inputData,fetchFunc  )=> {
  const sort = sortItem.value
  const filter = filterItem.value
    fetchFunc({ inputData, sort, filter })
}

export const filterForFetching:filterForFetchingT = (response, empryBooksStore, filter, filterItems) => {
  if(response.totalItems === 0) {
      return empryBooksStore
    } else if (filter === filterItems[0].value) {
      return { amount: response.totalItems, items: response.items }
    } else {
      let amount = 0
       const filteredBooks = response.items.filter((item: itemsT) => {
        console.log("else")
        if (!item.volumeInfo?.categories) return false
        let list = item.volumeInfo.categories.join(" ").split(" ")
        list = list.map((elem: string) => elem.toLocaleLowerCase())
        const result = list.filter((elem: string) => elem === filter)

        if (result.length > 0) {
          amount += 1
          return true
        }
        return false
      })
      return {amount: amount, items: filteredBooks }
    }

}