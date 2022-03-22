function f1(success,error)
{
    //Simulating of Async Function
    setTimeout
    (
        function serverResponse()
        {
            console.log("F1 Executed");
            
            // Conditional Check
            
            success();
            //error();
        },
        2000
    )  
}

function f2()
{
    console.log("F2 Executed Before F1");
    f1
    (
        function success()
        {
            console.log("F2 Proceeds");
        },
        function error()
        {
            console.log("F1 Failed");
        }
    );
   
}