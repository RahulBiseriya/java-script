//primetive

//7 types:string,number,boolean,null,undefined,symbol,BigInt,

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null

let userEmail ; // undefined

// symbol 
const id = Symbol("123")
const newId = Symbol("123")
// console.log(id == newId)

//BigInt
const bigNumber = 1234567782243n


//refrences type (non primitive) : Array ,Objects , Functions 

//array
const array = ["bheem","shaktiman","mightyraju"]

//object
let myObj = {
    name: 'rahul',
    age: 17
}
// console.table([myObj])// try to print it is very amazing !!

// function

const myFunction = function(){
    console.log("Hello World !")
}

// myFunction()