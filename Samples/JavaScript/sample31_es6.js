var date = new Date();
//var text = "The time is " + date.toLocaleTimeString() + ".";

var result = 
[
    "This time is ",
    date.toLocaleTimeString(),
    "."
].join("");
console.log(result);

// var text = `This time is ${date.toLocaleTimeString()}.`; // Template String
// console.log(text);