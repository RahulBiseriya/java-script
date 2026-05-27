const accountId = 12345
let accountEmail = "rahul@google.com"
var accountPass = "12345"
accountCity = "Tijara"
let accountState;

// accountId = 54321 // not allowed 
accountEmail = "rahul@amazon.com"
accountPass = "54321"

// console.log("Id:",accountId)
console.table([ accountId,accountEmail,accountPass,accountCity,accountState])

/*
prefered not to use var
because of issue in block scope and functional scope
*/