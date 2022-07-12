const capitalize = require('./capitalize.js');

const strings = ['Jaguar', 'Pakistan', 'Al-Azhar', '', '2'];

describe.each(strings)('Capitalizaed String Test', (string) => {
  test('First letter capital test', () => {
    expect(capitalize(string)[0]).toBe(string[0].toUpperCase());
  });
});