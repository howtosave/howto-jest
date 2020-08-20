
const NodeEnvironment = require('jest-environment-node');

class CustomEnvironment extends NodeEnvironment {
  constructor(config, context) {
    super(config, context);
    //this.testPath = context.testPath;
    //this.docblockPragmas = context.docblockPragmas;
  }

  async setup() {
    //console.log('>>> CustomEnvironment.setup()');
    await super.setup();

    // Set global variables
    this.global._PREFIX = 'test';
  }

  async teardown() {
    // do your teardown

    await super.teardown();
  }

  runScript(script) {
    return super.runScript(script);
  }
}

module.exports = CustomEnvironment;
