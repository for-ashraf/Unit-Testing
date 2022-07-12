/* eslint-disable no-mixed-operators */
/* eslint-disable class-methods-use-this */
class Calculator {
  add(a, b) {
    return a + b;
  }

  subtract(a, b) {
    return a - b;
  }

  divide(a, b) {
    return Math.round(a / b * 100, -1) / 100;
  }

  multiply(a, b) {
    return a * b;
  }
}

module.exports = Calculator;