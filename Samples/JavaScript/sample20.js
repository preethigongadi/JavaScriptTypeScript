//IOC with all variations closure and bind

function f1(cb) // async function
{
    setTimeout
    (
        function somework()
        {
            // flow has to goto f2 - Line19
            console.log("somework in f1");
            cb(100);
        },
        1000 
    );
} 

function postF1(dataPoints,param1) // Its not a closure function.
{
    console.log("some more processing in f2",dataPoints,param1);
}

function f2()
{
    var dataPoints = [40,10,20];

    console.log("some processing in f2", dataPoints);    
    
    f1(postF1.bind(this,dataPoints)); // Event Driven
}

f2();

//till we unbind it wil be in memory