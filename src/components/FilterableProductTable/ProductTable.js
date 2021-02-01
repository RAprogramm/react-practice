import React from 'react'
import ProductRow from './ProductRow'

function ProductTable(props) {
  const filterText = props.filterText
  const products = props.products
  const rows = []
  const total = []

  products.forEach((product) => {
    if (product.name.indexOf(filterText.values.filter) === -1) {
      return
    }
    rows.push(<ProductRow product={product} key={product.id} />)
    total.push(parseFloat(product.price))
  })

  const result = total.reduce((sum, current) => sum + current, 0)

  const TotalPrice = () => {
    if (result === 0) return null
    return <h4 id='total'>Total Price: {result}</h4>
  }

  const TableView = () => {
    if (!rows.length)
      return <div className='noProducts'>You have no product yet...</div>
    return (
      <div className='productTable'>
        <h3 className='productTable_title'>Product table</h3>
        <table className='productTable_table'>
          <thead>
            <tr>
              <th>Product</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>{rows}</tbody>
        </table>
        <div className='productTable_total'>
          <TotalPrice />
        </div>
      </div>
    )
  }

  return <TableView />
}

export default ProductTable
