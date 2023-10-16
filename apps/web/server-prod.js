require('dotenv').config(); // require dotenv
const cli = require('next/dist/cli/next-start');

cli.nextDev(['-p', process.env.WEB_PORT]);
