'use strict';

//
// load .env
//
process.env.NODE_ENV = process.env.NODE_ENV || 'development';
require('dotenv').config({
  path: require('fs').existsSync(`.env.${process.env.NODE_ENV}.local`)
    ? `.env.${process.env.NODE_ENV}.local` : `.env.${process.env.NODE_ENV}`,
});
console.log(`Running in *${process.env.NODE_ENV}* mode`);

//
// modules
//
const host = `${process.env.HOST}:${process.env.PORT}`;

const echo = msg => (`${msg} from ${host}`);

module.exports = echo;
