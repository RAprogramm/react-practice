import React from "react"
import './inputControl.css'

export const input = ({
  input,
  type,
  placeholder,
  id,
  meta: { touched, error },
  ...rest
}) => {
  return (
    <div>
      <input {...input} type={type} placeholder={placeholder} id={id} />
      {touched && error && (
        <span className="errors">{error}</span>
      )}
    </div>
  )
}