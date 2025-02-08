//Declare variable that store my age
const myAge = 20;
//Declare variable early year
let earlyYears = 2;
earlyYears *= 10.5;
//Accounted for the first two years
let laterYears = myAge - 2;
//Multiply by 4 with later year
laterYears *= 4;
console.log(earlyYears);
console.log(laterYears);
//Add my Age and  in Dog
let myAgeInDogYears = earlyYears + laterYears;
//Declare my name
const myName = 'Felicien'.toLowerCase();
//Display my name and my age and thier dog
console.log(`My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years.`);