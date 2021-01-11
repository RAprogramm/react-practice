import FilterableProductTable from './components/FilterableProductTable/FilterableProductTable'
import PRODUCTS from './list'

import './App.css'

function App() {
  return (
    <div className='App'>
      <FilterableProductTable products={PRODUCTS} />
    </div>
  )
}

export default App
