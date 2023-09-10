export type itemT = { name: string, value: string }
export type listItemsT = itemT[]
export type empryBooksStoreT = { amount:number ; items: []}
export type filterT = {name: string, value: string}
export type itemsT =
  {
    accessInfo: any
    etag: string
    id: string
    kind: string
    saleInfo: any
    searchInfo: any
    selfLink: string
    volumeInfo: volumeInfoI
  }
interface volumeInfoI{
  allowAnonLogging: boolean
  authors: string[]
  canonicalVolumeLink: string
  categories: string[]
  contentVersion: string
  description: string
  imageLinks: {
    smallThumbnail: string
    thumbnail: string
  }
  industryIdentifiers: { identifier: string, type: string }[]
  infoLink: string
  language: string
  maturityRating: string
  pageCount: number
  panelizationSummary: { [key: string]: boolean }
  previewLink: string
  printType: string
  publishedDate: string
  publisher: string
  readingModes: { image: boolean, text: boolean }
  subtitle: string
  title: string
}
export interface booksI {
  amount: number
  items: itemsT[]
}
export interface pesponseI {
  items: itemsT[];
  kind: string;
  totalItems: number;
}
export interface BookState {
  filterState: boolean
  sortState: boolean
  filterItem: filterT
  sortItem: filterT
  exceptClassNames: string[]
  inputData: string
  books: empryBooksStoreT | booksI
  error: string | null
  status: string
}

