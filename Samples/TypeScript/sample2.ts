class Product
{
    //Type Declarations
    name: string;
    qty: number;
    constructor(name : string ,qty : number)
    {
        this.name = name;
        this.qty = qty;
    }

    getInfo(productBrand? : string) : string[] //optional parameter
    {
        var info = ["Electronics","Mad in India"];

        console.log(productBrand);

        return info;
    }

    static getType()
    {
        console.log("getType called");
    }
}

var p1 = new Product("Mobile",20000);
console.log(p1);
console.log(p1.getInfo("Apple"));
//console.log(p1.getInfo("Apple",50000));