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
    rows.push(
      <ProductRow
        product={product}
        key={product.id}
      />
    )
    total.push(parseFloat(product.price))
  })
  
  const result = total.reduce((sum, current) => sum + current, 0)
  
  return (
    <div className="productTable">
      <h3>Product table</h3>
      <table className="table">
        <thead>
          <tr>
            <th>ProductName</th>
            <th>ProductPrice</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>
      <div className="total">
        <h4>Total Price: {result}</h4>
      </div>
    </div>
  )
}

export default ProductTable