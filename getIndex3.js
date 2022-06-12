const prompt = require('prompt-sync')({sigint: true});

let yourArray = JSON.parse(prompt("Enter an array of at least 3 items: "));

console.log(yourArray);

console.log("The 3rd item in your array is: " + yourArray[2]);