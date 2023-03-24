const names = require("./4-names")
const sayHi = require("./5-utils")
const bernard = names.bernard
const waxzee = names.waxzee

const data = require("./6-alternative-module")
console.log(data.singlePerson.name);

require("./7-mindGrenade")
sayHi("Shanice");
sayHi(bernard);
sayHi(waxzee);