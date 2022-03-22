import Base from './Base'

var productConfig = [];

class Product extends Base
{
    constructor(name,qty)
    {
        super();
        
        this.name = name;
        this.qty = qty;
    }
}

export {Product}; //Named exports