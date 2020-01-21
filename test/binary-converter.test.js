const BinaryConverter = require('../src/binary-converter.js');

describe('BinaryConverter', () => {
  let binaryconverter;

  beforeEach(() =>{
    binaryconverter = new BinaryConverter;
  });

  test('Input binary', () => {
    expect(binaryconverter.converter('01010101')).toEqual(85);
  });

  test('Maximum of 8 digits', () => {
    expect(binaryconverter.converter('0101010101')).toEqual('Please insert a maximum of 8 digits');
  });
})