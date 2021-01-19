export const formValidatorHelper = values => {
  const errors = {}
  
  if (!values.name) {
    errors.name = "Name is required...";
  } else if (values.name.length < 3) {
    errors.name = "Name it is too short..."
  }
  
  if (!values.price) {
    errors.price = "Price is required..."
  }
  
  return errors
}