function checkAge(birthYear : number) : boolean {
    if ((2023 - birthYear)>=18)
        return true
    else
        return false
}

function registerUser(name : string, birthYear : number){
    if(checkAge(birthYear))
        console.log(name +" has been registered successfully!")
    else
        console.log("User registration failed!")
}

registerUser('Sebin',2003)

export{}