import {CREATE_PRODS, REMOVE_PROD} from './types'

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
