import * as helper from './helper';

const registerValidator = (inpuObj) => {
  let output = {
    isValid: true,
    errors: []
  };

  if (!inpuObj.username) {
    output = { isValid: false, errors: [...output.errors, '> User Name is required'] };
  }
  if (!inpuObj.fullName) {
    output = { isValid: false, errors: [...output.errors, '> Full Name is required'] };
  }
  if (!inpuObj.email) {
    output = { isValid: false, errors: [...output.errors, '> Email is required'] };
  } else if (!helper.validateEmail(inpuObj.email)) {
    output = { isValid: false, errors: [...output.errors, '> Please enter valid email'] };
  }
  if (!inpuObj.birthday) {
    output = { isValid: false, errors: [...output.errors, '> Birthdate is required'] };
  }
  if (!inpuObj.occupation) {
    output = { isValid: false, errors: [...output.errors, '> Occupation is required'] };
  }

  return output;
};

export default registerValidator;
