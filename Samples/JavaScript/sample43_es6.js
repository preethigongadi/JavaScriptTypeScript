function f1(cb)
{
    setTimeout
    (
         function serverRespose()
         {
            console.log("F1 executed");
            cb();
         }
    )
}

function f2()
{
    console.log("F2 Executed before F1");
    f1(
        function cb()
        {
            console.log("F2 executed after f1");
        }
    );
    console.log("F2 Executed After F1");
}
f2();