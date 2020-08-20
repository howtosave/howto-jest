import { expect, describe, it } from '@jest/globals';

const echo = require('./index');

describe("# Index", () => {
  it('Should be defined', async done => {
    /// @ts-ignore
    expect(global._PREFIX).toBeDefined();
    expect(process.env.HOST).toBeDefined();
    done();
  });

  it('Should be defined', async done => {
    expect(echo('hi')).toMatch(/hi from/);
    expect(echo('hi')).toMatch(/hello.world/);
    done();
  });
});
