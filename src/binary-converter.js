class BinaryConverter {
  constructor() {
    this.decimal = 0
  }

  input(binary) {
    let reversedBinary = binary.split('').reverse();

    if (binary.length > 9) {
      return ("Please insert a maximum of 8 digits")
    };
    for (let i = (reversedBinary.length - 1); i >= 0; i--) {

      if (reversedBinary[i] < 0 || reversedBinary[i] > 1) {
        return ('Invalid input, please insert only 0 or 1');
      } else {
        this.decimal += ((reversedBinary[i] * 2) ** i);
        // console.log(this.decimal)
      }
    }
    return this.decimal;
  }
}

module.exports = BinaryConverter;