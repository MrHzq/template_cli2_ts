'use strict'
let PATH_ENV = '"test"'
if (process.env.PATH_ENV === 'prod') PATH_ENV = '"prod"'
else if (process.env.PATH_ENV === 'pre') PATH_ENV = '"pre"'
console.log(PATH_ENV)
module.exports = {
    PATH_ENV,
    NODE_ENV: '"production"'
}
