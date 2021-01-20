import React from 'react'
import {Field, reduxForm} from 'redux-form';
import { formValidatorHelper } from "./formValidatorHelper";
import {input} from './inputControl'

function ProductForm(props) {
  return (
    <form className='productForm' onSubmit={props.handleSubmit}>
      <h3 className="productForm_title">Product form</h3>
      <Field
        className="productForm_field"
        component={input}
        type='text'
        placeholder={'Name...'}
        name='name'
        id="name"
      />
      <Field
        className="productForm_field"
        component={input}
        type='number'
        name='price'
        id="price"
        placeholder={'Price...'}
      />
      <div className="buttons">
        <button
          className='btn productForm_add'
          type='submit'
          disabled={!props.valid || props.pristine || props.submitting}
        >
          Add
        </button>
        <button
          className="btn productForm_reset"
          type="button"
          onClick={props.reset}
        >
          Reset
        </button>
      </div>
    </form>
  )
}

export default reduxForm ({
  form: 'input',
  validate: formValidatorHelper
}) (ProductForm);
