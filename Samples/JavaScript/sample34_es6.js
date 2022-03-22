class Base
{
    constructor()
    {
        this.type = "Base User"

    }
}

//function borrowing

class User extends Base
{
    constructor(name,age)
    {
        super(); //Base construtor
        this.name = name;
        this.age = age;
    }
}

var u1 = new User("Mac",50);
console.log(u1);
//-------------------------------------------------------
class Base
{
    static info = "Users from Base Channel";

    constructor()
    {
        this.type = "Base User"

    }
  //  toString() //Base.prototype.toString
   // {
   //     return "This is a Base Type";
   // }
   toString() //Base.prototype.toString
   {
       return this.name + "," + this.age + "," + this.type;
   }
}

//function borrowing

class User extends Base
{
    static info = "Users from Web Channel";

    constructor(name,age)
    {
        super(); //Base construtor
        this.name = name;
        this.age = age;
        this.type="Ecomerce User"
    }
}

var u1 = new User("Mac",50);
console.log(u1);
console.log(u1.toString());
console.log(User.info);