function Product(name ,price ) // Default Params
{
    this.name = name;
    this.price = price;
}

var p1 = new Product("Phones");
console.log(p1);


//ES5
function Product(name ,price ) // Default Params
{
    this.name = name;
    this.price = price || 0;
}

var p1 = new Product("Phones");
console.log(p1);

//Es6
function Product(name = "",price = 0) // Default Params
{
    this.name = name;
    this.price = price;
}

var p1 = new Product("Phones");
console.log(p1);