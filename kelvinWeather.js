//This Kelvin Variable that contain its value
const kelvin = 293;
//convert kelvin into celsius
const celsius = kelvin - 273;
//calculate value of fahrenheit
let fahrenheit = celsius * (9 / 5) + 32;
// we use floor() method to round down decimal number
fahrenheit = Math.floor(fahrenheit);
console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`);