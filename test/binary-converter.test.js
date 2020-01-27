const BinaryConverter = require('../src/binary-converter.js');

describe('BinaryConverter', () => {
  let binaryconverter;

  beforeEach(() => {
    binaryconverter = new BinaryConverter;
  });

  test('Maximum of 8 digits', () => {
    expect(binaryconverter.input('0101010101')).toEqual('Please insert a maximum of 8 digits');
  });

  describe('Invalid input', () => {
    test('#1', () => {
      let binary1 = '02'
      expect(binaryconverter.input(binary1)).toEqual('Invalid input, please insert only 0 or 1');
    });

    test('#2', () => {
      let binary2 = '334455'
      expect(binaryconverter.input(binary2)).toEqual('Invalid input, please insert only 0 or 1');
    });

    test('#3', () => {
      let binary3 = '01234567'
      expect(binaryconverter.input(binary3)).toEqual('Invalid input, please insert only 0 or 1');
    });
  });


  describe('convert binary in decimal', () => {
    test('#1', () => {
      let binary1 = '1010';
      binaryconverter.input(binary1);
      // binaryconverter.convert(binary1)
      expect(binaryconverter.decimal).toEqual(10);
    });

    test('#2', () => {
      let binary2 = '11111'
      binaryconverter.input(binary2);
      expect(binaryconverter.decimal).toEqual(31);
    })

    test('#3', () => {
      let binary3 = '0000';
      binaryconverter.input(binary3);
      expect(binaryconverter.decimal).toEqual(0);
    })
  });
})