type userData = {
    name : string
    email : string
    rollNo: number
}

const data : userData = {
    name:"Sebin",
    email:"Seabean@gmail.com",
    rollNo: 12
}

function printData(data:userData){
    console.log(data)
}

printData({name:"Hi", email:"jimjam@gmail.com" , rollNo: 41})
printData(data)

export {}