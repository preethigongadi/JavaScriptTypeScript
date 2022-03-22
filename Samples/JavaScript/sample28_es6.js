var obj = 
{
    name : "Max",
    age : 50,
    country : "India",
    address : 
    {
        city : "Mumbai",
        state : "MH"
    },
    category : "WebUser"
}

var obj2 = 
{
    obj : 
    {
        ...obj, // Spread
    },
    category : "RetailUser"
};
console.log(obj2);

obj2.obj.address.city = "Delhi"
console.log(obj.address.city);
console.log(obj2.obj.address.city);

//--------//
function f1(arg) // Library (alien code)
{
    var newArg = 
    {
        ...arg
    };
    
    //newArg.type = "HMV";
    newArg.specs.engine = "1600cc";

    return newArg;
}

var vehicle = 
{
    number : "AB-12-1234-AS",
    type : "LMH",
    specs : 
    {
        engine : "1400cc"
    }
};

//Make a Deep Copy of vehicle
var returnParam = f1(vehicle);
if(vehicle != returnParam) // Immutables 
{   
    console.log("changed")
    //Changed
}
// confirm if f1 changed any properties of vehicle obj?
// compare vehicleCopy vs vehicle (Dirty Checking)