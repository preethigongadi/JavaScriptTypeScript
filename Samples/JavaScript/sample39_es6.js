class User
{
    constructor(name,age)
    {
        this.name = name;
        this.age = age;
    }

    getDetailsTimeout = () => // Arrow Function
    {
        this.details = [10,20,30]; // Using Closure for saving context
    }

    getDetails()
    {
        //var self = this; // u1

        // var getDetailsTimeout = () => // Arrow Function
        // {
        //     this.details = [10,20,30]; // Using Closure for saving context
        // }
        
        //Simulating Async Server Call 
        setTimeout
        (
            getDetailsTimeout.bind(this),
            2000
        );
    }
}

var u1 = new User("Mac",30);
u1.getDetails();
console.log(u1);