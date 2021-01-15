import {combineReducers} from 'redux'
import {prodListReducer} from './prodListReducer'

export const rootReducer = combineReducers({
  prodListState: prodListReducer
})