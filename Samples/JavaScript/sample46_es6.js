
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
                    resolve(); // OR
                    //reject();
                },
                2000
            )  
        }
   );
   return promise;
}

function f2()
{
    console.log("F2 Executed Before F1");
    
    var promise = f1();
    f3(promise);
}

function f3(promise)
{
     //some lines of code
     promise.then
     (
         function success()
         {
            console.log("F3:Success");
         },
         function error()
         {
            console.log("F3:Error");
         }
     )
}

f2();