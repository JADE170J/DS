// Prompt the user to enter their age
const age = parseInt(prompt("Enter your age:"));

// Determine the price of the movie ticket based on the age
let ticketPrice;

if (age <= 12) {
    ticketPrice = 10;
} else if (age >= 13 && age <= 17) {
    ticketPrice = 15;
} else {
    ticketPrice = 20;
}

// Display the ticket price to the user
console.log("The price of the movie ticket is: $" + ticketPrice);


function isLeapYear(year) {
    // Check if the year is divisible by 4
    if (year % 4 === 0) {
        // Check if the year is divisible by 100 and not divisible by 400
        if (year % 100 === 0 && year % 400 !== 0) {
            return false; // Not a leap year
        } else {
            return true; // Leap year
        }
    } else {
        return false; // Not a leap year
    }
}

const year = 2022;
if (isLeapYear(year)) {
    console.log(year + " is a leap year.");
} else {
    console.log(year + " is not a leap year.");
}



function power(base, exponent) {
    // Base case: If the exponent is 0, return 1
    if (exponent === 0) {
        return 1;
    }
    // Recursive case: Multiply the base by the result of raising the base to the exponent - 1
    return base * power(base, exponent - 1);
}

const base = 2;
const exponent = 8;
const result = power(base, exponent);
console.log(base + " raised to the power of " + exponent + " is: " + result);


