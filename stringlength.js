function stringLength(myString) {
  if (myString.length > 0 && myString.length <= 10) {
    return true;
  }
  return false;
}
module.exports = stringLength;
