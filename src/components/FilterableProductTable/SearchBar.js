import React from 'react'
import {Field, reduxForm} from 'redux-form'

function SearchBar() {
  return (
    <form className='searchBar'>
      <h3 className="searchBar_title">Search bar</h3>
      <Field
        className="searchBar_input"
        component='input'
        type='text'
        placeholder={'Filter...'}
        name='filter'
      />
    </form>
  )
}

export default reduxForm ({form: 'input'}) (SearchBar)
