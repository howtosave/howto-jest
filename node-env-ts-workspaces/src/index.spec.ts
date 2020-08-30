import { expect, describe, it } from '@jest/globals';

// rewire does *not* work on typescript
//const rewire = require('rewire');
//const app = rewire('./index');
//const _helloWorld = app.__get__('_helloWorld'); 

const echo = require('./index');


describe("# Index", () => {
  it('Should be defined', async done => {
    /// @ts-ignore
    expect(global._PREFIX).toBeDefined();
    expect(process.env.HOST).toBeDefined();
    done();
  });

  it('Should return greetings', () => {
    expect(echo('hi')).toMatch(/hi from/);
    expect(echo('hi')).toMatch(/hello.world/);
  });

//  it('Should get internal function', () => {
//    expect(_helloWorld('hi')).toMatch(/hi from/);
//    expect(_helloWorld('hi')).toMatch(/hello.world/);
//  });

});
