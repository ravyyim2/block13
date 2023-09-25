

if("I am a string") {
    console.log("true")
} else {
    console.log("false")
};

if(false) {
    console.log("true")
} else {
    console.log("The boolean value false is falsy")
};


if(null) {
    console.log("true")
} else {
    console.log("The null value is falsy")
};


if(undefined) {
    console.log("true")
} else {
    console.log("Undefined is falsy")
};


if(0) {
    console.log("true")
} else {
    console.log("The number 0 is falsy (the only falsy number)")
};

if("") {
    console.log("true")
} else {
    console.log("The empty string is falsy (the only falsy string)")
};


let num1 = 50;
let num2 = 51;
let sum = num1 + num2;

if (sum < -1000) {
    console.log(sum + " is less than -1000");
} else if (sum < 0) {
    console.log(sum + " is a negative number");
} else if (sum === 0) {
    console.log(sum + " is equal to 0");
} else if (sum > 0 && sum <= 100) {
    console.log(sum + " is larger than 0");
} else {
    console.log(sum + " is greater than 100");
}


let num1 = 5
let num2 = 5


if (num1 >= 5 && num2 >=5) {
    console.log(`true`)
} else {
    console.log(`false`)
};

let param1A = "cat";
let param1B = "cat";

// Define the second set of values
let param2A = 6;
let param2B = "6";

// Check if at least one of the pairs is truthy
if (param1A || param1B || param2A || param2B) {
  console.log("true");
}
