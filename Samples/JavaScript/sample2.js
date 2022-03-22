var tool = this;

function getInfo()
{
    console.log("its not prototype"); //The JavaScript prototype property allows you to add new properties to object constructors
}

function Product(name,brand)
{
    this.name = name; // "this" is context
    this.brand = brand;
    this.get = getInfo;  
    console.log(this.get);
}

Product.prototype.getInfo = function()
{
    console.log(this.name + " - " + this.brand);
    return this.name + " - " + this.brand;
}


tool.p1 = new Product("Iphones","Apple");
tool.p2 = new Product("Tablets","Samsung");
console.log(tool.p1.getInfo());
