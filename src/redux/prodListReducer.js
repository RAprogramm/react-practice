import {CREATE_PRODS, REMOVE_PROD, SEARCH_HIDDEN} from './types'

const initialState = {
  productReduxState: [],
  searchHidden: true,
}

export const prodListReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_PRODS:
      return {...state, productReduxState: state.productReduxState.concat(action.payload)}
    case REMOVE_PROD:
      return {...state, productReduxState: state.productReduxState.filter(id => id !== action.payload)}
    case SEARCH_HIDDEN:
      return {...state, searchHidden: !state.searchHidden}
    default: return state
  }
}