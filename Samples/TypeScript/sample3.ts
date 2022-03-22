import Base from "./base";

class Product extends Base
{
    //Type Declarations
    name: string;
    qty: number;
    constructor(name : string ,qty : number)
    {
        super();

        this.name = name;
        this.qty = qty;
    }

    getInfo() : string[]
    {
        var info = ["Electronics","Mad in India"];
        return info;
    }

    static getType()
    {
        console.log("getType called");
    }
}

var p1 = new Product("Mobile",20000);
console.log(p1);
console.log(p1.getInfo());
Product.getType();

console.log(p1.serialize());
console.log(p1.clone());