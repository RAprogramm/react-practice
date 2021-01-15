import React, {useState} from 'react'
import ProductTable from './ProductTable'
import TotalPrice from './TotalPrice'
import SearchBar from './SearchBar'
import './styleFPT.css'

function ProductListApp() {
  const [filterText, setFilterText] = useState('')
  const [inStockOnly, setInStockOnly] = useState(false)
  const [prodList, setProdList] = useState([])
  const [inputValues, setInputValues] = useState({
    name: '',
    price: '',
    category: null
  })

  const onHandleInput = (event) => {
    const {name, value} = event.target
    setInputValues(({...inputValues, [name]: value}))
  }

  const onSubmitHandler = (event) => {
    event.preventDefault()
    if (!inputValues.name.length) {
      alert('Please, enter product name')
    } else if (!inputValues.price.length) {
      alert('Please, enter product price')
    } else {
      setProdList([...prodList, {
        id: Date.now().toString(),
        name: inputValues.name,
        price: inputValues.price,
        category: inputValues.category,
      }])
    }
  }
  
  const handleFilterTextChange = (filterText) => {
    setFilterText(filterText)
  }
  
  const handleInStockChange = (inStockOnly) => {
    setInStockOnly(inStockOnly)
  }

  console.log(prodList)
  console.log(inputValues)
  return (
    <div className='prodListApp'>
      <form className='addrow' onSubmit={onSubmitHandler}>
        <input
          type='text'
          placeholder={'name'}
          name='name'
          onChange={onHandleInput}
        />
        <input
          type='number'
          name='price'
          onChange={onHandleInput}
          placeholder={'price'}
        />
        <input
          type='text'
          name='category'
          onChange={onHandleInput}
          placeholder={'category'}
        />
        <button className='btn add' type='submit'>
          Add
        </button>
      </form>
      <SearchBar
        filterText={filterText}
        inStockOnly={inStockOnly}
        onFilterChange={handleFilterTextChange}
        onInStockChange={handleInStockChange}
      />
      <ProductTable
        products={prodList}
        filterText={filterText}
        inStockOnly={inStockOnly}
      />
      <TotalPrice
        products={prodList}
        filterText={filterText}
        inStockOnly={inStockOnly}
      />
    </div>
  )
}
export default ProductListApp
