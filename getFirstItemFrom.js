const prompt = require('prompt-sync')({sigint: true});

let yourArray = JSON.parse(prompt("Enter an array of at least 3 items: "));

console.log(yourArray);

console.log("The first item in your array is a: " + yourArray[0]);
