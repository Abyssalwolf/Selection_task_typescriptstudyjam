"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function checkAge(birthYear) {
    if ((2023 - birthYear) >= 18)
        return true;
    else
        return false;
}
function registerUser(name, birthYear) {
    if (checkAge(birthYear))
        console.log(name + " has been registered successfully!");
    else
        console.log("User registration failed!");
}
registerUser('Sebin', 2003);
