const {john, peter} = require('./4-names')
/**
 * Incase of Destructured REQUIRE, the variable names on the right side MUST match to the object's member name.
 */
// const names = require('./4-names')

const sayHi = require('./5-utils')

const data = require('./6-alternative-way')


// {john, peter} = names

// console.log(john);
// console.log(peter);
// sayHi(names.john);
// sayHi(names.peter);

sayHi(john);
sayHi(peter);

console.log(data);