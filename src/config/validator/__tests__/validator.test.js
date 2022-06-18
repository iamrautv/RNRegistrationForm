import { validateEmail } from '../helper';
import registerValidator from '../register';

it('Validator - Is incorrect email added', () => {
  const input = "incorrectemailstring";
  const output = validateEmail(input);
  expect(output).toBeFalsy();
});

it('Validator - Is correct email added', () => {
  const input = "test@test.com";
  const output = validateEmail(input);
  expect(output).toBeTruthy();
});

it('Validator - Register - validation fails if all values are empty', () => {
  const input = {
    username: '',
    fullName: '',
    email: '',
    birthday: '',
    occupation: '',
  };
  const output = registerValidator(input);
  expect(output.isValid).toBe(false);
});

it('Validator - Register - validation is success for correct input', () => {
  const input = {
    username: 'test',
    fullName: 'test test',
    email: 'test@test.com',
    birthday: '12/12/1991',
    occupation: 'test',
  };
  const output = registerValidator(input);
  expect(output.isValid).toBe(true);
});
