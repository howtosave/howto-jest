
const echo = require('./index');

describe("# Index", () => {
  it('Should be defined', async done => {
    expect(echo('hello')).toMatch(/hello from/);
    expect(echo('world')).toMatch(/world from/);
    expect(global._PREFIX).toBeDefined();
    done();
  });
});

/**
 * beforeEach()와 afterEach()는 it() 단위로 호출된다.
 * beforeAll()과 afterAll()은 describe() 단위로 호출된다.
 * 
 * 즉 "desc2>it1"가 호출되는 시점에는
 *  beforeAll > beforeEach > desc2-beforeAll > desc2-beforeEach
 * 가 실행되고, "desc2>it2"가 호출되고 나서는
 *  desc2-afterEach > afterEach > desc2-afterAll > alfterAll
 * 순서로 실행된다.
 */

describe("# Invocation order", () => {
  beforeAll(() => console.log("# beforeAll()"));
  beforeEach(() => console.log("# beforeEach()"));
  afterEach(() => console.log("# afterEach()"));
  afterAll(() => console.log("# afterAll()"));

  it("# it1()", () => console.log("# it1"));
  it("# it2()", () => console.log("# it2"));

  describe("# desc1", () => {
    beforeAll(() => console.log("# desc1-beforeAll()"));
    beforeEach(() => console.log("# desc1-beforeEach()"));
    afterEach(() => console.log("# desc1-afterEach()"));
    afterAll(() => console.log("# desc1-afterAll()"));

    it("## desc1>it1", () => console.log("# desc1-it1"));
    it("## desc1>it2", () => console.log("# desc1-it2"));
  });

  describe("# desc2", () => {
    beforeAll(() => console.log("# desc2-beforeAll()"));
    beforeEach(() => console.log("# desc2-beforeEach()"));
    afterEach(() => console.log("# desc2-afterEach()"));
    afterAll(() => console.log("# desc2-afterAll()"));

    it("## desc2>it1", () => console.log("# desc2-it1"));
    it("## desc2>it2", () => console.log("# desc2-it2"));
  });
});