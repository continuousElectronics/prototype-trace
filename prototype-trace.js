"use strict";

module.exports = function (o, includeTarget) {
    if (o === undefined || o === null) {
        throw new TypeError("Cannot convert undefined or null to object");
    }
    o = Object(o);
    const arr = (includeTarget === false) ? [] : [o];
    while (Object.getPrototypeOf(o) !== null) {
        o = Object.getPrototypeOf(o);
        arr.push(o);
    }
    return arr.reverse();
};