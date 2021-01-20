import React from 'react'
import { render } from 'react-dom'
import {Provider} from 'react-redux'
import {compose, createStore} from 'redux'
import reportWebVitals from './reportWebVitals'
import {rootReducer} from './redux/rootReducer'
import App from './App'
import './index.css'

const store = createStore(rootReducer, compose(
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
))

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)

reportWebVitals()
