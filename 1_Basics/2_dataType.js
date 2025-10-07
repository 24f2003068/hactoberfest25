// "use strict"; //treat all JS code as newer version also strict mode by default
// //alert(3+3); // inspect or browser pr chalta hai, node pr nhi

// // console.log(3+30);
// // console.log(6+60);

// // console.log(3+30)
// // console.log(6+60) // semicolon nhi bhi lgaoge to bhi chalega, bus code readable hona chahiye


// let name = "ADAM AMITH";
// let age = 25;
// let isOk = true;     // let can be used for string, number, boolean, null, undefined
// let salary = null; 
// let state;    

// /* number
// bigint
// string => "" or  '' 
// null => stand alone value, also object type
// undefined 
// symbol => unique value

// object
// array */

// console.log(typeof null);   //object
// console.log(typeof salary);  //object
// console.log(typeof isOk);  // boolean
// console.log(typeof state); //undefined



/***************Conversions ************/
// let score = null;     
// console.log(typeof score); //object
// console.log(Number(score)); // 0


let score = "bn "    // " " is taken as 0 
let now = Number(score); // string is convert to number,,, 
console.log(now); // NaN = Not a number
// console.log(typeof now); // number

/* is score type      cnrtto  now_value  type 
   33 number           number  33 number
   "33" string        number  33 number
   "acha" string     number  NaN number
   null   object     number  0 number 
   1    number      boolean  true boolean
    0    number      boolean  false boolean
    "" string    boolean  false boolean
    " " string   boolean  true boolean
    "0 / false / null / undefined/ NaN / kuch bhi" string    boolean  true boolean
   
   */


    /**************************OPERATIONS****************************************/

    // console.log(3 + 3); // 6
    // console.log(3 - 3); // 0        
    // console.log(3 * 3); // 9
    // console.log(32 / 3); // 10.666666666666666
    // console.log(5 % 3); // 0
    // console.log(3 ** 3); // 27


    // let str1 = "Anushka"
    // let str2 = "Verma"
    // console.log(str1 + str2); // AnushkaVerma
    // console.log(str1 + " " + str2); // Anushka Verma    


// console.log(true); // true
// console.log(+true); // 1
// console.log(-true); // -1
// console.log(!true); // false
// console.log(!!true); // true
// console.log(!!0); // false
// console.log(!!""); // false
// console.log(!!" "); // true
// console.log(+"mj"); // NaN
// console.log(+" "); // 0

// console.log(+true); // 1
// //console.log(++0); // ye galat hai
// console.log(-""); // -0
//  console.log(+0);   // 0
//  console.log(+2);   // 2
//  console.log(-2);  // -2
//  console.log(--2);   // error


    // console.log("3" + 3); // 33
    // console.log("3" - 3); // 0  
    // console.log("3" * 3); // 9
    // console.log("3" / 3); // 1
    // console.log("3" % 3); // 0
    // console.log("3" ** 3); // 27

    // console.log("3" + "3"); // 33   str
    // console.log("3" - "3"); // 0
    // console.log("3" * "3"); // 9
    // console.log("3" / "3"); // 1
    // console.log("3" % "3"); // 0
    // console.log("3" ** "3"); // 27

    // console.log("1" + 2); // 12   str
    // console.log(1 + "2");   // 12   str
    // console.log("1" + "2"); // 12   str
    // console.log("1" + 2 + 2); // 122   str
    // console.log(1 + 2 + "2"); // 32   str

