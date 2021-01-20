import {CREATE_PRODS, REMOVE_PROD} from './types'

const initialState = {
  productReduxState: [],
}

export const prodListReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_PRODS:
      return {...state, productReduxState: state.productReduxState.concat(action.payload)}
    case REMOVE_PROD:
      return {...state, productReduxState: state.productReduxState.filter(id => id !== action.payload)}
    default: return state
  }
}