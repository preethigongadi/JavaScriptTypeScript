
function log()
{
    console.log("log");
}

function trace()
{
    console.log("trace");
}



function run(arg1,arg2,cb)
{
    var localVar = 10;

    function someFn()
    {
        
    }

    var obj1 = { val1 : 1};

    // Async Operation
    setTimeout
    (
        function() // Closure Function
        {
           console.log("obj1.val1",obj1.val1);
            var sum = arg1 + arg2 + obj1.val1; //
           var fn = someFn;
           cb(sum) // 
        },
        0//3000 // 3s
    );

    obj1.val1 = 2;
}

run(10,20,log);
run(10,20,trace);