const stringLength = require('./stringlength.js');

test('Invalid String Length.', () => {
  expect(stringLength('This is a sample string')).toBe(true);
});