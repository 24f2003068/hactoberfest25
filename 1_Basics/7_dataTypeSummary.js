// string, number, boolean, BigInt, sumbol, null, undefined => primitive data types , create copy
 
const name = "Anushka"
const age = 22
const isStudent = true
const score = null
const id = undefined
let state 
const bigInt = BigInt(123456789012345678901267890) 
const score1 = 1111111n // BigInt

const sy1 = Symbol("123") // unique identifier
const sy2 = Symbol("123") 
console.log(sy1 === sy2) // false, unique identifier


//***********************************************************************//
// objects - arrays, functions, dates, regex, etc => non primitive data types, create reference
const person = {
    name: "kanika",
    age: 22,
    isStudent: true,
}

const fun = function(){
    console.log("hello")
}
const arr = ["one", 'two', 3 , 4]
console.log(arr) // one