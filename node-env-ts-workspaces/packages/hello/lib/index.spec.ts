import { expect, describe, it } from '@jest/globals';

const hello = require('./index');

describe("# Index", () => {
  it('Should return "hello"', async done => {
    expect(hello()).toMatch(/hello/);
    done();
  });
});
