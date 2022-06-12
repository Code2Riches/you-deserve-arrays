const prompt = require('prompt-sync')({sigint: true});

let yourArray = JSON.parse(prompt("Create an Array: "));

if (typeof yourArray[0] === "number") {
    console.log("The 1st item in your array, " + yourArray[0] + ", is a number!")
}

if (typeof yourArray[0] !== "number") {
    console.log("The 1st item in your array, " + yourArray[0] + ", is not a number!")
}

