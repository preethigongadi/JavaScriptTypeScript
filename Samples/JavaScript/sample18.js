function Utils()
{
    //instance function
    this.logger = function(content, type)
    {
        console.log("content, type", content, type);
    }
}


//var u1 = new Utils();
//var u1 = new Utils().logger(12,"");
console.log(u1);
// This will call alll the methods inside the function 

function run(a,b) {
    var result = a + b;

    var obj = {};
    Utils.call(obj);
    var logger = obj.logger;
    logger(result,null);
}

run(10,20);