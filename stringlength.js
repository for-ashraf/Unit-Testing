function stringLength(myString) {
  if (myString.length > 0 && myString.length <= 10) {
    return true;
  }
  else {
    return false;
  }
}
module.exports = stringLength;