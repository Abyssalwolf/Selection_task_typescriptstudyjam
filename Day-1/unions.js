"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function changeCase(data) {
    if (typeof data === 'string') {
        var newData = data.toLowerCase();
        console.log(newData);
    }
}
var userData = {
    _id: '123',
    name: 'John',
    email: 'john@gmail.com',
    adminKey: 'rty2345',
    modKey: 'sdfdsd',
};
var arrData = ['1'];
var arrData2 = ['3', '45', 45, 65, true];
var role;
role = 'editor';
