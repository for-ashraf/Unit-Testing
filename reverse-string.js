/* eslint-disable no-plusplus */
function reverseString(string) {
  let newString = string.split('');
  const reversedString = [];
  for (let i = newString.length - 1; i >= 0; i--) {
    reversedString.push(newString[i]);
  }
  newString = reversedString.join('');
  return newString;
}
module.exports = reverseString;