class BinaryConverter {

  input(binary) {
    if (binary.length > 9) {
      return ("Please insert a maximum of 8 digits")
    } else if (binary.includes("0") === false || binary.includes("1") === false) {
      return "Invalid input, please insert only 0 or 1"
    } else {
      convert(binary);
    };
  }

  convert(binary) {
    let reversedBinary = binary.split('').reverse();
    let decimal = 0;

    for (let i = (reversedBinary.length - 1); i >= 0; i--) {
      decimal += Math.pow(reversedBinary[i] * 2, i)
    }
    return decimal;
  }
}


module.exports = BinaryConverter;