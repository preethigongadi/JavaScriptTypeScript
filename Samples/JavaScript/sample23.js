
 var obj = 
 {
     name : "Max",
     age : 30,
     address : 
    {
         city : "Mumbai",
         country : "India" 
     },
     getInfo : function()
     {
         // some code here
     }
 };

//Serialization
 var objJson = JSON.stringify(obj);
 console.log(objJson);

 //De-Serialization
 try
 {
     var obj2 = JSON.parse(objJson);
     console.log(obj2);
 }
 catch(ex)
 {
     console.log(ex);
 }

// ----- //

function Product(name,price)
{
    this.name = name;
    this.price = price;
}
Product.prototype.type = "Base Products";

var p1 = new Product("Mobile",25000); // p1 is Product Object
console.log("p1",p1);

var p1JSON = JSON.stringify(p1);
console.log("p1JSON",p1JSON);

var p1Copy = JSON.parse(p1JSON); // p1Copy will be Object
console.log("p1Copy",p1Copy);
