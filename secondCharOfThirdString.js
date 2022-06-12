const prompt = require('prompt-sync')({sigint: true});

let yourArray = JSON.parse(prompt("Create an Array: "));

if (typeof yourArray[2][0] === "string"){
    console.log("The 2nd character in the 3rd item in your array, " + yourArray[2][0] + ", is a string!")
} else if (typeof yourArray[2][0] !== "string"){
    console.log("Error, " + yourArray[2][0] + ", is not a string!")
}


