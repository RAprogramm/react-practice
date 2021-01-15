import React from 'react'
import ProductCategoryRow from './ProductCategoryRow'
import ProductRow from './ProductRow'

function ProductTable(props) {
  const filterText = props.filterText
  const inStockOnly = props.inStockOnly
  const products = props.products

  const rows = []
  let lastCategory = null

  products.forEach((product) => {
    if (product.name.indexOf(filterText) === -1) {
      return
    }
    if (inStockOnly && !product.stocked) {
      return
    }
    if (product.category !== lastCategory) {
      rows.push(
        <ProductCategoryRow
          category={product.category}
          key={product.category}
        />,
      )
    }
    rows.push(<ProductRow product={product} key={product.id} />)
    lastCategory = product.category
  })

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>ProductName</th>
            <th>ProductPrice</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>
    </div>
  )
}

export default ProductTable
