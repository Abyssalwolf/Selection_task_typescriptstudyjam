"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//Interface allows for extend and inherit
function getRole() {
    return 'Admin';
}
var user = {
    _id: '123',
    name: 'Alwin',
    email: 'rxr@gm.com',
    adminKey: '123ef345',
    role: getRole
};
console.log(user.role());
