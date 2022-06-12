const prompt = require('prompt-sync')({sigint: true});

let yourArray = JSON.parse(prompt("Enter an array of at least 3 items: "));

console.log(yourArray);

console.log("The last item in your array is: " + yourArray[yourArray.length-1]);