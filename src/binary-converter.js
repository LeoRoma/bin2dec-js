class BinaryConverter {
  constructor() {
    this.binaries = ""
  }

  converter(binary) {
    var digit = parseInt(binary, 2);
    if (binary.length > 9) {
      return ("Please insert a maximum of 8 digits")
    } else {
      return digit;
      console.log(digit)
    }

  }
}

module.exports = BinaryConverter;