const Calculator = require('./calculator.js');

const calculator = new Calculator();

describe('add', () => {
  test('sum of numbers', () => {
    expect(calculator.add(4, 3)).toBe(7);
    expect(calculator.add(0, 5)).toBe(5);
    expect(calculator.add(44, -20)).toBe(24);
  });
});

describe('subtract', () => {
  test('subtraction between two numbers', () => {
    expect(calculator.subtract(4, 1)).toBe(3);
    expect(calculator.subtract(55, 5)).toBe(50);
    expect(calculator.subtract(44, 49)).toBe(-5);
  });
});

describe('divide', () => {
  test('division between two numbers', () => {
    expect(calculator.divide(50, 5)).toBe(10);
    expect(calculator.divide(33, 11)).toBe(3);
    expect(calculator.divide(330, 5)).toBe(66);
  });
});

describe('multiply', () => {
  test('multipling two numbers', () => {
    expect(calculator.multiply(0, 984379832740329479230)).toBe(0);
    expect(calculator.multiply(33, 100)).toBe(3300);
    expect(calculator.multiply(25, 5)).toBe(125);
    expect(calculator.multiply(-50, -2)).toBe(100);
  });
});