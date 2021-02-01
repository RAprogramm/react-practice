import React from 'react'
import { Field, reduxForm } from 'redux-form'

function SearchBar(props) {
  const bar = props.seachBarView
  const showSearchBar = props.changeSearchBar

  if (bar)
    return (
      <div className='searchBar_Hide'>
        <h3 className='searchBar_title' onClick={showSearchBar}>
          Search bar <i className='fas fa-chevron-circle-down'></i>
        </h3>
      </div>
    )
  return (
    <div className='searchBar_Show'>
      <form className='searchBar'>
        <h3 className='searchBar_title' onClick={showSearchBar}>
          Search bar <i className='fas fa-chevron-circle-up'></i>
        </h3>
        <Field
          className='searchBar_input'
          component='input'
          type='text'
          placeholder={'Filter...'}
          name='filter'
        />
      </form>
    </div>
  )
}

export default reduxForm({ form: 'input' })(SearchBar)
