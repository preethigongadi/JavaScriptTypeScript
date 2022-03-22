//spread object
var obj = 
{
    name : "Max",
    age : 50,
    country : "India",
    address : 
    {
        city : "Mumbai",
        state : "MH"
    }
}

var obj2 = 
{
    category : "RetailUser",
    ...obj //shallow copy
};
console.log(obj2);



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
    category : "WebUser",
}

var obj2 = 
{
    category : "RetailUser",
    ...obj //shallow copy
};
console.log(obj2); // webuser will be present if swap then retail user will be present


//can we preserve both?
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
    category : "WebUser",
}

var obj2 = 
{
    obj:
    {
        ...obj
    },
    category : "RetailUser",
   
};
console.log(obj2);
