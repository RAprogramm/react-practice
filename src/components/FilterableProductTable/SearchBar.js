import React from 'react'
import {Field, reduxForm} from 'redux-form'

function SearchBar() {
  return (
    <form className='search'>
      <h3>Search bar</h3>
      <Field
        className="searchInput"
        component='input'
        type='text'
        placeholder={'Filter...'}
        name='filter'
      />
    </form>
  )
}

export default reduxForm ({form: 'input'}) (SearchBar)
