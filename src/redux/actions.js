import {CREATE_PRODS, REMOVE_PROD, SEARCH_HIDDEN} from './types'

export function createPost(product) {
  return {
    type: CREATE_PRODS,
    payload: product
  }
}

export function removeProd(id) {
  return {
    type: REMOVE_PROD,
    payload: id
  }
}

export function showSearchBar(hiddenBar) {
  return {
    type: SEARCH_HIDDEN,
    hiddenBar
  }
}
