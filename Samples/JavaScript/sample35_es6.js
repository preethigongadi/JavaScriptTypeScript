// -------------------------------------------- //

/*Inheritance*/

class Car
{
  
    constructor(name, brand) 
    {
        this.name = name;
        this.brand = brand;
    }   
    
    GetSpecs()
    {
        console.log("Object of type Car");
    }
}

class LuxuryCar extends Car
{
    constructor(name, brand, transmission) 
    {
        super(name, brand);
        this.transmission = transmission; 
    }
    
    GetFeatures()
    {
        console.log("Sound System, Leather Seats etc");
    }
}

var bmw = new LuxuryCar("5 Series" , "BMW" , "Auto");
var merc = new LuxuryCar("S Class" , "Mercedes" , "Manual");

console.dir(bmw);
console.dir(merc);

// -------------------------------------------- //