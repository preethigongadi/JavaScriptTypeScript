
function log(sum)
{
    console.log("log" + sum);
}

function trace()
{
    console.log("trace");
}

function run(arg1,arg2,cb)
{
    var sum = arg1 + arg2;
    //log(sum);
    //trace(sum);
    cb(sum);
}

run(10,20,log);
run(10,20,trace);
