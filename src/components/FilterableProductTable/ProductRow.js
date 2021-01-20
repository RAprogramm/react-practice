import React from 'react'
import {removeProd} from '../../redux/actions'
import {connect} from 'react-redux'

function ProductRow(props) {
  const product = props.product
  
  const handleRemove = () => {
    props.removeProd(product)
  }
  
  return (
    <tr>
      <td>{product.name}</td>
      <td>{product.price}</td>
      <td>
        <button
          className="btn delete"
          onClick={handleRemove}
        >Delete</button>
      </td>
    </tr>
  )
}

const mapDispatchToProps = {removeProd}

export default connect(null, mapDispatchToProps) (ProductRow)