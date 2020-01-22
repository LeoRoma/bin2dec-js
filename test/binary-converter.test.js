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
      let binary = '01010101';
      expect(binaryconverter.convert(binary)).toEqual(85);
    });

    test('#2', () => {
      let binary2 = '1111;'
      expect(binaryconverter.convert('1111')).toEqual(15);
    })

    test('#3', () => {
      let binary = '0001';
      expect(binaryconverter.convert(binary)).toEqual(1);
    })
  });
})