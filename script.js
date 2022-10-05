let add7 = n => {
    let result = n + 7;
    console.log(`add7 Result is ${result}`);
    return result;
};

add7(43);

let multiply = (a, b) => {
    let result = a * b;
    console.log(`multiply result is ${result}`);
    return result;
};

multiply(17, 43);

let capitalize = (theWord) => {
    let changeMe = theWord.charAt(0).toUpperCase() + theWord.slice(1);
    console.log(`This is your word capitalized! ${changeMe}`);
    return changeMe;
}

capitalize("this should be capitalized");

let lastLetter = (theWord) => {
    let changeMe = theWord.charAt(theWord.length -1);
    console.log(`This is your last letter ${changeMe}`);
    return changeMe;
}

lastLetter("this should be capitalized");

let answer = parseInt(prompt("Please enter the number you want to FizzBuzz: "));

for (let i = 1; i <= answer; i++) {
    if(i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz");
    } else if(i % 3 === 0) {
        console.log("Fizz");
    } else if(i % 5 === 0) {
        console.log("Buzz");
    } else {
        console.log(i);
    }

};

