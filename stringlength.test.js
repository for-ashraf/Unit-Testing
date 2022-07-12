const stringLength = require('./stringlength');

test('Invalid String Length.', () => {
  expect(stringLength("This is a sample string")).toBe(true);
});