function capitalizeString(string) {
  if (string[0] === string[0].toLowerCase()) {
    string = string.split('');
    string[0] = string[0].toUpperCase();
    string = string.join('');
  }
  return string;
}
module.exports = capitalizeString;