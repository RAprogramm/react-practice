import React from 'react'
import ProductTable from './ProductTable'
import SearchBar from './SearchBar'
import {connect} from 'react-redux'
import ProductForm from './ProductAddForm/ProductForm'
import {createPost} from '../../redux/actions'
import './styleFPT.css'

const ProductListApp = props => {
  const products = props.syncProds
  const inputValues = props.inputValue
  
  const submit = () => {
    const newProduct = {
      id: Date.now().toString(),
      name: inputValues.values.name,
      price: inputValues.values.price,
    }
    props.createPost(newProduct)
    return newProduct
  }
  
  const getInitialValues = () => {
    return {
      id: Date.now().toString(),
      name: '',
      price: '',
      filter: '',
    }
  }
  
  return (
    <div className='prodList'>
      <h3 className="prodList_title">Product list application</h3>
      <ProductForm
        onSubmit={submit}
        initialValues={getInitialValues()}
      />
      <SearchBar
        initialValues={getInitialValues()}
        filterText={inputValues}
      />
      <ProductTable
        products={products}
        filterText={inputValues}
      />
    </div>
  )
}

const mapDispatchToProps = {
  createPost,
}

const mapStateToProps = state => {
  return {
    syncProds: state.productsReducer.productReduxState,
    inputValue: state.form.input
  }
}

export default connect(mapStateToProps, mapDispatchToProps) (ProductListApp)
