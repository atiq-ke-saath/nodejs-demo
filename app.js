const la = require('lodash');

const items = [1,[2,[3,[4,[5]]]]];
const newItems = la.flattenDeep(items);
console.log(newItems);
console.log("Hello Nodemon");