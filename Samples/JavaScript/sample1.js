var a = 10; //number
var b = "hello"//string
var c= true; //bolean

function f1(arg1) {
    arg1 = arg1 + 10;
    console.log("arg1",arg1)
}

console.log(a); //10
f1(a);

console.log(a);

//reference types
//using object literal notation
var obj = {
    a : 10,
   };

function f2(arg1) {
    arg1.a = arg1.a + 10;
}

console.log("obj.a",obj.a);
f2(obj);
console.log("obj.a",obj.a);


var obj1 = {
    a : 10,
    b : 
    {
        name : "John"
    },
    c : [1,2,3]
};


function f3(arg1)
{
    var arg1Clone = {};

    for(var prop in arg1)
    {
        console.log("pop",prop);
        arg1Clone[prop] = arg1[prop];
        console.log("pop",prop.length);
    }

    arg1Clone.a = arg1Clone.a + 1;
    arg1Clone.c.push(4);
    console.log("arg1Clone",arg1Clone);
    
    //var temp = arg1;
    //temp.a = temp.a + 10;
}

f3(obj1);// pointer to obj
console.log("obj",obj);

