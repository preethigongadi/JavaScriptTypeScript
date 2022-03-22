class Product
{
    constructor(name = "" , price = 0)
    {
        this.name = name;
        this.price = price;
        this.getId = function()
        {
            // p1.getId
        }
    }

    getInfo()
    {
        //Product.prototype.getInfo
    }
}

var p1 = new Product("Mobiles",35000);
var p2 = new Product("Laptops",75000);
console.log(p1);

delete p1.name;
console.log(p1);
console.log(p2);