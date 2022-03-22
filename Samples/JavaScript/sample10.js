function Product(name,brand)
{
    this.name = name;
    this.brand = brand;

    this.getInfo = function()
    {
        var self = this; // p1 (Safeguarding the Context)

        //this.data = [10,20,30];
        
        // Async - Stimulation of a Server Call
        setTimeout
        (
            function getInfoFromServer()
            {
                self.data = [10,20,30]; // p1.data (Making it available within a Closure Function)
            },
            3000 // assuming 3 secs API Delay
        );
    }
}

var p1 = new Product("Iphone","Apple");
p1.getInfo();
//Wait for 3s
console.log(p1);