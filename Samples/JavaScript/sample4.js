function Product(name,brand)
{
    this.name = name; // "this" is context
    this.brand = brand;

   // this.serialNumber = Math.random();
    var serialNumber = Math.random();
    this.getSerialNumber = function()
    {
        return serialNumber;
    }
}

Product.prototype.getInfo = function()
{
    return this.name + " - " + this.brand;
}

var p1 = new Product("Iphones","Apple");
var p2 = new Product("Tablets","Samsung");
//p1.serialNumber = 100;
console.log(p1.getSerialNumber());
console.log(p1.getSerialNumber());

console.log(p1.getInfo());
console.log(p2.getInfo());

console.log(p1);