class BinaryConverter {
  constructor() {
    this.decimal = 0
  }

  input(binary) {
    let newBinary = binary.split('');

    if (binary.length > 9) {
      return ("Please insert a maximum of 8 digits")
    };
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




  // for(let i = 0; i <num.length; i++) {
  // dec *= 2;
  // dec += +num[i];
}

module.exports = BinaryConverter;