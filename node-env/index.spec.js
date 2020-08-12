
const echo = require('./index');

describe("# Index", () => {
  it('Should be defined', async done => {
    const msg = 'hello';
    expect(echo(msg)).toMatch(/hello from/);
    expect(global._PREFIX).toBeDefined();
    done();
  });
});
