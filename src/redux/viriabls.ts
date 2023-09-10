import type { listItemsT, empryBooksStoreT } from "./types"

export const LOADING: string = "loading"
export const SUCCESS:string = "success"
export const ERROR: string = "error"
export const key = `AIzaSyD9uSvBC8eFC3YaTWCeljL7Xbog9g2hO0I`


export const filterItems: listItemsT = [
  {name: "all", value: "" },
  {name: "art", value: "art" },
  {name: "biography", value: "biography" },
  {name: "computers", value: "computers" },
  {name: "history", value: "history" },
  {name: "medical", value: "medical" },
  {name: "poerty", value: "poerty" },
]

export const sortItems: listItemsT = [
  {name: "relevance", value: "relevance" },
  {name: "newest", value: "newest" },
]

export const maxElements = 30

export const empryBooksStore: empryBooksStoreT = { amount: 0, items: []}