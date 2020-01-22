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
      expect(binaryconverter.input('02')).toEqual('Invalid input, please insert only 0 or 1');
    });

    test('#2', () => {
      expect(binaryconverter.input('334455')).toEqual('Invalid input, please insert only 0 or 1');
    });
  });


  describe('convert binary in decimal', () => {
    test('#1', () => {
      let binary1 = '01010101';
      binaryconverter.convert(binary1)
      expect(binaryconverter.decimal).toEqual(85);
    });

    test('#2', () => {
      let binary2 = '1111'
      binaryconverter.convert(binary2)
      expect(binaryconverter.decimal).toEqual(15);
    })

    test('#3', () => {
      let binary3 = '0001';
      binaryconverter.convert(binary3)
      expect(binaryconverter.decimal).toEqual(1);
    })
  });
})