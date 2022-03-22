function Utils()
{
}

 //is it has only one copy of logger? is it static or it share multiple instances
 //Utils.prototype.logger = function(content, type) //instance member shared among all instances
 //{
 //    console.log("content, type", content, type);
 //}

 //static function

 Utils.logger = function()
 {
     console.log("content, type", content, type);
 }


//var u1 = new Utils();
//var u1 = new Utils().logger(12,"");
console.log(u1);
// This will call alll the methods inside the function 

function run(a,b) {


    Utils.logger(result,"");
}

run(10,20);