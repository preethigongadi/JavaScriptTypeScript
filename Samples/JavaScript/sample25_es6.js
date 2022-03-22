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
};

// var userAge = obj.age;
// var userCity = obj.city;

// Object Destructuring
var { age , country , address } = obj;
console.log(age);
console.log(country);
console.log(address);

var {age : userAge , country : userCountry } = obj;
console.log(userAge);
console.log(userCountry)
