import React from 'react'
import ProductTable from './ProductTable'
import SearchBar from './SearchBar'
import { connect } from 'react-redux'
import ProductForm from './ProductAddForm/ProductForm'
import { createPost, showSearchBar } from '../../redux/actions'
import './styleFPT.css'

const ProductListApp = (props) => {
  const products = props.syncProds
  const inputValues = props.inputValue
  const searchBarView = props.searchBar

  const submit = () => {
    const newProduct = {
      id: Date.now().toString(),
      name: inputValues.values.name,
      price: inputValues.values.price,
    }
    props.createPost(newProduct)
    return newProduct
  }

  const changeSearchBar = () => {
    props.showSearchBar()
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
      <h3 className='prodList_title'>Product list application</h3>
      <div className='mainProd1'>
        <div className='mainProd2'>
          <ProductForm
            onSubmit={submit}
            initialValues={getInitialValues()}
          />
          <SearchBar
            initialValues={getInitialValues()}
            filterText={inputValues}
            changeSearchBar={changeSearchBar}
            seachBarView={searchBarView}
          />
        </div>
        <ProductTable products={products} filterText={inputValues} />
      </div>
    </div>
  )
}

const mapDispatchToProps = {
  createPost,
  showSearchBar,
}

const mapStateToProps = (state) => {
  return {
    searchBar: state.productsReducer.searchHidden,
    syncProds: state.productsReducer.productReduxState,
    inputValue: state.form.input,
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ProductListApp)
