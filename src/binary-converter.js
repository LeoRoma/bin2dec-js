class BinaryConverter {
  constructor() {
    this.decimal = 0
  }

  input(binary) {
    if (binary.length > 9) {
      return ("Please insert a maximum of 8 digits")
    };
    this.convert(binary);
  }

  convert(binary) {
    let newBinary = binary.split('');
    for (let i = 0; i < binary.length; i++) {
      if (newBinary[i] < 0 || newBinary[i] > 1) {
        return ('Invalid input, please insert only 0 or 1');
      } else {
        this.decimal *= 2;
        this.decimal += +newBinary[i];
      }
    }
    return this.decimal;
  }
}

module.exports = BinaryConverter;