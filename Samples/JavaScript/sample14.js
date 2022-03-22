function f1(cb) // async function
{
    setTimeout
    (
        function somework()
        {
            // flow has to goto f2 - Line19
            console.log("somework in f1");
            cb();
        },
        1000 
    );
} 


function f2()
{
    var dataPoints = [40,10,20];

    console.log("some processing in f2", dataPoints);

    function postF1() // Function
    {
        console.log("some more processing in f2",dataPoints);
    }
    
    f1(postF1); // Event Driven
}

f2();