const load1M = require('./index.js');

describe('load1M', () => {
  it('resolves to a Buffer', async () => {
    const result = await load1M();
    expect(result).toBeInstanceOf(Buffer);
  });
});
