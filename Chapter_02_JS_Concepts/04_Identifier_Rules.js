// JavaScript Identifier Rules with Examples

console.log("Rule 1: Must start with a letter, underscore (_), or dollar sign ($)");
let name = "Alice";
let _count = 10;
let $price = 99;
console.log(name, _count, $price);
// Invalid examples:
// let 1name = "Bob";
// let -user = "Tom";

console.log("\nRule 2: After first character, letters, digits, _, $ are allowed");
let user1 = "User One";
let _temp2 = "Temp";
let $item99 = "Item";
console.log(user1, _temp2, $item99);
// Invalid examples:
// let user-name = "Invalid";
// let item#1 = "Invalid";

console.log("\nRule 3: Cannot contain spaces");
let firstName = "John";
let first_name = "Doe";
console.log(firstName, first_name);
// Invalid example:
// let first name = "Invalid";

console.log("\nRule 4: Cannot use reserved keywords");
let letValue = 1;
let className = "JS";
let returnData = true;
console.log(letValue, className, returnData);
// Invalid examples:
// let let = 1;
// let class = "A";
// let return = true;

console.log("\nRule 5: Identifiers are case-sensitive");
let user = "lower";
let User = "capital";
let USER = "upper";
console.log(user, User, USER);

console.log("\nRule 6: Unicode letters are allowed");
let café = "coffee";
let नाम = "HindiName";
let πValue = 3.14;
console.log(café, नाम, πValue);

console.log("\nRule 7: Special symbols are not allowed except _ and $");
let user_name = "valid";
let $total = 500;
console.log(user_name, $total);
// Invalid examples:
// let user-name = "Invalid";
// let price@home = "Invalid";
// let a+b = 10;

console.log("\nRule 8: In strict mode, eval and arguments cannot be used as identifiers");
function strictModeExample() {
    "use strict";
    let safeValue = 10;
    console.log(safeValue);
    // Invalid in strict mode:
    // let eval = 5;
    // let arguments = 10;
}
strictModeExample();
