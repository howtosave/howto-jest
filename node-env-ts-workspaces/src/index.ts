'use strict';

//
// load .env
//
process.env.NODE_ENV = process.env.NODE_ENV || 'development';
require('dotenv').config({
  path: require('fs').existsSync(`.env.${process.env.NODE_ENV}.local`)
    ? `.env.${process.env.NODE_ENV}.local` : `.env.${process.env.NODE_ENV}`,
});

const hello = require('my-hello');
const world = require('my-world');

function _helloWorld(msg: string): string {
  return `${msg} from ${hello()}.${world()}@${process.env.HOST}`;
}

//
// modules
//

module.exports = (msg: string): string => (
  _helloWorld(msg)
);
