const assertEquals = (val1, val2) => {return val1 === val2};
const assertNull = (val) => {return val === null};

module.exports = {
    assertEquals,
    assertNull,
};

// ==   same value
// === same value and same type
// usually favour ===
// 2 == `2`;   // true
// 2 === `2`;  // false