class User
{
    constructor(name,age)
    {
        this.name = name;
        this.age = age;
    }

    getDetails()
    {
       // var self = this; // u1
      // var _that = this;

        
         var getDetailsTimeout = () => {//closure function //anonymous functions //Debugging becomes easier
           this.details = [10,20,30]; //using closure for saving context
                //_that.details
        }
        setTimeout
        (
            getDetailsTimeout,
            2000
        );
    }
}

var u1 = new User("Mac",30);
u1.getDetails();
console.log(u1);