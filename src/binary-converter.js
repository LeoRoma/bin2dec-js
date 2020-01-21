class BinaryConverter {
  constructor() {
    this.binaries = ""
  }

  converter(binary) {
    var digit = parseInt(binary, 2);
    if (binary.length > 9) {
      return ("Please insert a maximum of 8 digits")
    } else if (binary.match(0) === false || !!binary.match(1) === false){
      return ("Please insert only 0 or 1")
    }else {
      return digit;
      console.log(digit)
    }

  }
}

module.exports = BinaryConverter;