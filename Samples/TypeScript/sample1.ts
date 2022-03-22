var num : number = 10;

//num = "ten"; //error

var abc : string = "ten";

abc = "TypeScript";

var isAccessible : boolean;
isAccessible = true;

var xyz : number | string; //union types
xyz = 10;
xyz = "10";

var lmn : any; //no type safety
lmn = "10";
lmn = null;

var var1 = null;
var1 = 10;