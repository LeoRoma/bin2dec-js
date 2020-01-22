const BinaryConverter = require('../src/binary-converter.js');

describe('BinaryConverter', () => {
  let binaryconverter;

  beforeEach(() =>{
    binaryconverter = new BinaryConverter;
  });

  // test('Input binary', () => {
  //   binaryconverter.converter('01010101')
  //   expect(binaryconverter.convert('01010101')).toEqual(85);
  // });

  test('Maximum of 8 digits', () => {
    expect(binaryconverter.input('0101010101')).toEqual('Please insert a maximum of 8 digits');
  });

  test('Invalid input only 0 or 1', () => {
    expect(binaryconverter.input('02')).toEqual('Invalid input, please insert only 0 or 1');
  });

  test('convert function', () => {
    expect(binaryconverter.convert('10101010')).toEqual(85)
  });
})