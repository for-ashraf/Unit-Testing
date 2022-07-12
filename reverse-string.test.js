const reverseString = require('./reverse-string.js');

test('Testing String Reverse', () => {
  expect(reverseString('Name'))
    .toBe('eman');
});
test('Testing String Reverse', () => {
  expect(reverseString('Paki'))
    .toBe('ikap');
});
test('Testing String Reverse', () => {
  expect(reverseString('Jhon'))
    .toBe('nohJ');
});
test('Testing String Reverse', () => {
  expect(reverseString(''))
    .toBe('');
});
