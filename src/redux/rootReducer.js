import { combineReducers } from 'redux'
import { prodListReducer } from './prodListReducer'
import { reducer as formReducer } from 'redux-form'

export const rootReducer = combineReducers({
  productsReducer: prodListReducer,
  form: formReducer
})