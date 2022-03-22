class User
{
    constructor(name,age)
    {
        this.name = name;
        this.age = age;
    }

    getDetails()
    {
        var self = this; // u1

        setTimeout
        (
            function() {
                self.details = [10,20,30];
            },
            2000
        );
    }
}

var u1 = new User("Mac",30);
u1.getDetails();
console.log(u1);