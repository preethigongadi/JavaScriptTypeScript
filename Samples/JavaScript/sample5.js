// Custom Types
function Product(name,brand)
{
    this.name = name; // "this" is context
    this.brand = brand;
}
var p1 = new Product("Iphones","Apple");
var p2 = new Product("Tablets","Samsung");


delete p1.brand;

if(!Object.isSealed(p1))
{
}

if("brand" in p2)
{

}

 //Object.preventExtensions(p1); // NO Add
 Object.seal(p1);  // NO ADD, NO DEL

 p1.city = "Mumbai";

// Object.freeze(p1); // No ADD, NO DEL, NO Update 

console.log(p1);
