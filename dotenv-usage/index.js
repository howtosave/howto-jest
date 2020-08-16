process.env.NODE_ENV = process.env.NODE_ENV || 'development';
require('dotenv').config({
  path: require('fs').existsSync(`.env.${process.env.NODE_ENV}.local`) ? `.env.${process.env.NODE_ENV}.local` : `.env.${process.env.NODE_ENV}`,
});

//require('dotenv').config({path: `.env.${process.env.NODE_ENV}`});
//require('dotenv/config'); 
//require('dotenv').config({path: process.env.DOTENV_CONFIG_PATH});

console.log(`${process.env.NODE_ENV}`);
//console.log(`${process.env.DOTENV_CONFIG_PATH}`);
console.log(`${process.env.HOST}:${process.env.PORT}`);
