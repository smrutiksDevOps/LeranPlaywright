// JavaScript Identifier Naming Conventions

console.log("1) camelCase: variables, functions, object properties");
let firstName = "Asha";
let totalPrice = 1250;
function calculateFinalPrice(basePrice, taxAmount) {
    return basePrice + taxAmount;
}
console.log(firstName, totalPrice, calculateFinalPrice(100, 18));

console.log("\n2) PascalCase: classes, constructor functions");
class StudentProfile {
    constructor(fullName, gradeLevel) {
        this.fullName = fullName;
        this.gradeLevel = gradeLevel;
    }
}
const studentOne = new StudentProfile("Rahul Verma", 10);
console.log(studentOne.fullName, studentOne.gradeLevel);

console.log("\n3) snake_case: sometimes used in constants or external data mapping");
let user_name = "playwright_learner";
let api_response_time = 320;
console.log(user_name, api_response_time);

console.log("\n4) UPPER_SNAKE_CASE: constants");
const MAX_LOGIN_ATTEMPTS = 5;
const API_BASE_URL = "https://example.com/api";
console.log(MAX_LOGIN_ATTEMPTS, API_BASE_URL);

console.log("\n5) Prefix conventions for booleans");
let isLoggedIn = true;
let hasPermission = false;
let canEditProfile = true;
console.log(isLoggedIn, hasPermission, canEditProfile);

console.log("\n6) Kebab-case is not valid for JS identifiers");
// Invalid identifier example:
// let user-name = "Invalid";
// Use camelCase instead:
let userName = "Valid";
console.log(userName);

console.log("\n7) Meaningful names instead of short unclear names");
let x = 60; // unclear name
let loadingTimeoutInSeconds = 60; // clear and descriptive name
console.log(x, loadingTimeoutInSeconds);

console.log("\n8) Avoid starting identifiers with _ unless intentionally private/internal");
let _cacheValue = "internal use";
let cacheValue = "public use";
console.log(_cacheValue, cacheValue);
