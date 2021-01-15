import React from 'react'

function TotalPrice(props) {
  const filterText = props.filterText
  const inStockOnly = props.inStockOnly
  const total = []

  props.products.forEach((product) => {
    if (inStockOnly && !product.stocked) {
      return
    }
    if (product.name.indexOf(filterText) === -1) {
      return
    }
    total.push(parseFloat(product.price))
  })

  const result = total.reduce((sum, current) => sum + current, 0)

  return (
    <div className="total">
      <h4>Total Price: {result}</h4>
    </div>
  )
}

export default TotalPrice
