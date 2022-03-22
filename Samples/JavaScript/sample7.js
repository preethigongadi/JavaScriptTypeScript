function f1(arg1,arg2)
{
 // Some Operation Here
 var result = arg1 + arg2;
 //return result;
}

var r = f1(10,20);
console.log(r); // undefined

//
// function run(arg1)
// {
//     console.log("First");
// }

function run(arg1,arg2)
{
    if(arguments.length == 0)
    {
        console.log("First");
    }
    else if(arguments.length == 1)
    {
        if(typeof arguments[1] == "string")
        {
            
        }
        console.log("Second");
    }
    else if(arguments.length == 2)
    {
        console.log("Third");
    }
    else
    {
        console.log("Invalid Arguments Passed");
    }
}

run();
run(10);
run(10,20);