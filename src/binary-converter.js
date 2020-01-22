class BinaryConverter {
  constructor() {
    this.binaries = ""
  }

  converter(binary) {
    let reversedBinary = binary.split('').reverse();
    let decimal = 0;

    if (reversedBinary.includes("0") === false || reversedBinary.includes("1") === false) {
      return "Invalid input, please insert only 0 or 1"
    }
    if (binary.length > 9) {
      return ("Please insert a maximum of 8 digits")
    } else {
      for (let i = (reversedBinary.length - 1); i >= 0; i--) {
        // console.log(Math.pow(reversedBinary[i] * 2, i))
        decimal += Math.pow(reversedBinary[i] * 2, i)
        // if (reversedBinary[i] !== 0 || reversedBinary[i] !== 1) {
        //   return "Invalid input, please insert only 0 or 1"
        // } else {

      }
      // console.log(Math.pow(4, 3))
      return decimal;
    };
  }
}


module.exports = BinaryConverter;