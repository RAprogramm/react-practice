import React from 'react'

class SearchBar extends React.Component {
  constructor(props) {
    super(props)

    this.handleFilterTextChange = this.handleFilterTextChange.bind(this)
    this.handleInStockChange = this.handleInStockChange.bind(this)
  }

  handleFilterTextChange(event) {
    this.props.onFilterTextChange(event.target.value)
  }

  handleInStockChange(event) {
    this.props.onInStockChange(event.target.checked)
  }

  render() {
    const filterText = this.props.filterText
    const inStockOnly = this.props.inStockOnly

    return (
      <div className='search'>
        <input
          className='searchinput'
          type='text'
          placeholder='Search...'
          value={filterText}
          onChange={this.handleFilterTextChange}
        />
        <p>
          <input
            type='checkbox'
            checked={inStockOnly}
            onChange={this.handleInStockChange}
          />
          {''}
          Only show products in stock
        </p>
      </div>
    )
  }
}

export default SearchBar
