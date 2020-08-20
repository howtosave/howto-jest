import { expect, describe, it } from '@jest/globals';

const hello = require('./index');

describe("# Index", () => {
  it('Should return "world"', async done => {
    expect(hello()).toMatch(/world/);
    done();
  });
});
