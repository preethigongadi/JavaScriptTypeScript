function f1()
{
   var promise = new Promise // ES6 Promises
   (
        function onThen(resolve,reject)
        {
            setTimeout
            (
                function serverResponse()
                {
                    console.log("F1 Executed");
                    
                    // Conditional Check
                    //resolve(); // OR
                    reject();
                },
                2000
            )  
        }
   );
   return promise;
}

async function f2()
{
    console.log("F2 Executed Before F1");
    
    try
    {
        await f1();
        console.log("F1 Success");
        f3();
    }
    catch(ex)
    {
        console.log("F1 Failed");
    }
}

function f3()
{
    console.log("F3 Called");
}

f2();