function Product(name,brand)
{
    this.name = name;
    this.brand = brand;

    this.getInfo = function()
    {     
        var dateTime = new Date().toLocaleTimeString();
        
        function getInfoFromServer(param1,param2)
        {
            this.p1.data = [10,20,30]; // p1.data
            console.log("param1",param1);
            console.log("this.info",this.info);
        }

    
        // Async - Stimulation of a Server Call
        setTimeout
        (
            getInfoFromServer.bind(this),
            3000 // assuming 3 secs API Delay
        );
    }
}

var p1 = new Product("Iphone","Apple");
p1.getInfo();
//Wait for 3s
console.log(p1);