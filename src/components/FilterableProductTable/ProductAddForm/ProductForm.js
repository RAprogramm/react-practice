import React from 'react'
import {Field, reduxForm} from 'redux-form';
import { formValidatorHelper } from "./formValidatorHelper";
import {input} from './inputControl'

function ProductForm(props) {
  return (
    <form className='addRow' onSubmit={props.handleSubmit}>
      <h3>Product form</h3>
      <Field
        component={input}
        type='text'
        placeholder={'Name...'}
        name='name'
        id="name"
      />
      <Field
        component={input}
        type='number'
        name='price'
        id="price"
        placeholder={'Price...'}
      />
      <button
        className='btn add'
        type='submit'
        disabled={!props.valid || props.pristine || props.submitting}
      >
        Add
      </button>
      <button
        className="btn reset"
        type="button"
        onClick={props.reset}
      >
        Reset
      </button>
    </form>
  )
}

export default reduxForm ({
  form: 'input',
  validate: formValidatorHelper
}) (ProductForm);
