
const echo = require('./index');

describe("# Index", () => {
  it('Should be defined', async done => {
    expect(echo('hello')).toMatch(/hello from/);
    expect(echo('world')).toMatch(/world from/);
    expect(global._PREFIX).toBeDefined();
    done();
  });
});
