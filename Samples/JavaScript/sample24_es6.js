// Global Scope
var num = 10;
console.log(num); //10

//Function Scope
function f1()
{
    var num = 20;
    console.log(num); //20

    // Block Scope
    for(var num = 0; num < 100; num++)
    {
        // Some code here
    }

    console.log(num); //100
}

f1();

console.log(num); //10

// Global Scope
var num = 10;
console.log(num); //10

//Function Scope
function f1()
{
   // var num = 20;
    console.log(num); //10

    // Block Scope
    for(num = 0; num < 100; num++)
    {
        // Some code here
    }

    console.log(num); //100
}

f1();

console.log(num); //100


// Global Scope
var num = 10;
console.log(num); //10

//Function Scope
function f1()
{
    var num = 20;
    console.log(num); //20

    // Block Scope // scope of variable is within block
    for(let num = 0; num < 100; num++)
    {
        // Some code here
    }

    console.log(num); //100
}

f1();

console.log(num); //10