// const score = 33;
// console.log(score.toString().length);
// console.log(score.toFixed(2));

// const balance = new Number(43.3966);
// console.log(balance.toString().length);
// console.log(balance.toFixed(1)); // round off to 1 decimal place

// const num = 1223.456789;
// console.log(num.toPrecision(2)); // round off to 2 significant figures

// const hund = 1260059630
// console.log(hund.toExponential(3)); // convert to exponential form
// console.log(hund.toLocaleString()); // convert to local string format
// console.log(hund.toLocaleString("en-IN")); // convert to local string format in Indian format


//*****************************MATHS************************************
// console.log(Math);
// console.log(Math.abs(-41));
// console.log(Math.round(4.623));
// console.log(Math.ceil(4.2));
// console.log(Math.floor(4.9));
console.log(Math.min(4, 0, -6, 5, 8));
// console.log(Math.max( 2, 6, 29));

// console.log(Math.random()); // random number between 0 and 1
// console.log(Math.random() * 10); // random number between 0 and 9
// console.log((Math.random() * 10)+1); // random number between 1 and 10
// console.log(Math.floor(Math.random() * 10)+1); // random number between 1 and 10


const min = 11
const max = 16

console.log(Math.floor(Math.random() * (max - min + 1)) + min)