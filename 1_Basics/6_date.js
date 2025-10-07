let myDate = new Date();
// console.log(myDate); // Current date and time
// console.log(myDate.getFullYear()); // Current year
// console.log(myDate.getMonth()); // Current month (0-11) months start from 0
// console.log(myDate.getDay()); // Current day (0-6) days start from 0
// console.log(myDate.getDate()); // Current date (1-31)

// console.log(myDate.getHours()); // Current hours (0-23)
// console.log(myDate.getMinutes()); // Current minutes (0-59)
// console.log(myDate.getSeconds()); // Current seconds (0-59)
// console.log(myDate.getMilliseconds()); // Current milliseconds (0-999)

// console.log(myDate.getTime()); // Current time in milliseconds since 1970
// console.log(myDate.getTimezoneOffset()); // Current timezone offset in min
// console.log(myDate.getUTCDate()); // Current UTC date (1-31)

// console.log(myDate.toString()); // Current date and time in string format
// console.log(myDate.toDateString()); // Current date in string format
// console.log(myDate.toTimeString()); // Current time in string format

// console.log(myDate.toISOString()); // Current date and time in ISO format
// console.log(myDate.toUTCString()); // Current date and time in UTC format
// console.log(myDate.toLocaleString()); // Current date and time in local format
// console.log(myDate.toLocaleDateString()); // Current date in local format

// let newDate = new Date("2023-10-01"); // Date in YYYY-MM-DD format , months 1-12
// console.log(newDate); 

// let newDate = new Date(2020, 0, 1) //****must start the month from 1****//
// console.log(newDate); 
// console.log(newDate.getTime()); // Current time in milliseconds since 1970

// let newDate1 = new Date(2020, 1, 1)
// console.log(newDate1); 

// let newDate = new Date(2020, 2, 1, 22, 30, 2) 
// console.log(newDate.toLocaleString()); // Current date and time in local format

// let timestamp = Date.now(); // Current timestamp in milliseconds since 1970 // returns a number
// console.log(timestamp)
//console.log(timestamp.getTime()); // #error Date.now() returns a number, not a date object
// console.log(Math.floor(Date.now()/1000));

let newDate = new Date(); // 0 is the timestamp in milliseconds since 1970
newDate.toLocaleString('default', {
    timeZone: 'Asia/Kolkata', // Set the timezone to Asia/Kolkata
    hour12: true, // Use 12-hour format
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    weekday: 'long' // Include the day of the week
}); // Current date and time in local format
console.log(newDate); // Current date and time in local format