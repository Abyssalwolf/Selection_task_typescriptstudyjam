//Interface allows for extend and inherit
// function getRole(){
//     return 'Admin'
// }

interface User {
    readonly _id: string
    name: string
    email: string
}

interface Admin extends User {
    adminKey: string,
    role() : string
}

const user: Admin = {
    _id:'123',
    name:'Alwin',
    email:'rxr@gm.com',
    adminKey: '123ef345',
    role: () => {
        return 'Admin'                             //with arrow function
    }
}

console.log(user.role())

export {}