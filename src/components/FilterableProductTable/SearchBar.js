import React from 'react'

function SearchBar(props) {
  const filterText = props.filterText
  const inStockOnly = props.inStockOnly
  
  const handleFilterChange = (event) => {
    props.onFilterChange(event.target.value)
  }
  
  const handleInStockChange = (event) => {
    props.onInStockChange(event.target.checked)
  }
  return (
    <div className='search'>
      <input
        className='searchinput'
        type='text'
        placeholder='Search...'
        value={filterText}
        onChange={handleFilterChange}
      />
      <p>
        <input
          type='checkbox'
          checked={inStockOnly}
          onChange={handleInStockChange}
        />
        {''}
        Only show products in stock
      </p>
    </div>
  )
}

export default SearchBar
