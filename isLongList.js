const prompt = require('prompt-sync')({sigint: true});

let yourArray = JSON.parse(prompt("Create an Array: "));

if (yourArray < [10]){
    console.log("Your Array has less than 10 items: ");
    } else console.log("Alright, your list has 10 or more items!: ")


