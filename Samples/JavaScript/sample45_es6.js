function f1(cb)
{
    //Simulating of Async Function
    setTimeout
    (
        function serverResponse()
        {
            console.log("F1 Executed");
            
            // Conditional Check
            
            cb(true);
        },
        2000
    )  
}

function f2()
{
    console.log("F2 Executed Before F1");
    f1
    (
        function cb(isSuccess)
        {
            if(isSuccess)
            {
                console.log("F2 Proceeds");
            }
            else
            {
                console.log("F1 Failed");
            }
        }
       
    );
   
}

f2();