import React from 'react'
import ProductListApp from './components/FilterableProductTable/ProductListApp'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import './App.css'
import Navbar from './components/Navbar/Navbar'

export default function App() {
  return (
    <Router className='App'>
      <Navbar />
      <Switch>
        <Route path='/' exact component={ProductListApp} />
      </Switch>
    </Router>
  )
}
