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

// console.log(`Running in *${process.env.NODE_ENV}* mode`);

//
// modules
//
const host = `${process.env.HOST}:${process.env.PORT}`;

module.exports = (msg: string): string => (
  `${msg} from ${hello()}.${world()}@${host}`
);
