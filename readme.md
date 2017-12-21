## Prototype Trace

This module produces a function that takes a first argument of any type except undefined or null. It returns an array containing each object in the first argument's prototype chain. Primitives (except undefined and null which throw a TypeError) are converted to Object equivalents. The optional second argument is a boolean determining whether or not to include the target item in the returned array, and defaults to true.

## Install
```
npm install prototype-trace
```

## Usage

```javascript
const trace = require("prototype-trace");

let x = {a: 1};
let y = Object.create(x);
let protoArray = trace(y);

console.log(protoArray[0] === Object.prototype); // true
console.log(protoArray[1] === x); // true
console.log(protoArray[2] === y); // true

let A = function () {
    this.x = 1;
};
A.prototype = {y: 2};
let b = new A();
let protoArray2 = trace(b, false);

console.log(protoArray2[0] === Object.prototype); // true
console.log(protoArray2[1] === A.prototype); // true
console.log(protoArray2[2] === b); // false, because second arg to trace does not place target object in array

let protoArray3 = trace(17);
console.log(protoArray3[0] === Object.prototype); // true
console.log(protoArray3[1] === Number.prototype); // true
console.log(protoArray3[2] === 17); // false, because non-objects are coerced into objects
console.log(protoArray3[2].valueOf() === 17) // true

```