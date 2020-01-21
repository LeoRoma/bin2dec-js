const BinaryConverter = require('../src/binary-converter.js');

describe('BinaryConverter', () => {
  let binaryconverter;

  beforeEach(() =>{
    binaryconverter = new BinaryConverter;
  });

  test('Input binary', () => {
    expect(binaryconverter.converter('01010101')).toEqual('01010101');
  })
})