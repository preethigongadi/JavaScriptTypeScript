// var obj = 
// {
//     num : 10
// };
// obj.num; // DOt Notation
// obj[num]; // Array / INdex Notation

// var obj2 = {};
// obj2[Math.random()] = 20;

var data = [10,20,30];

var data2 = data.map
(
    function predicate(item,index)
    {
        var obj = {};
        obj["element_" + index] = item; // Computed Property
        return obj;
    }
);
//console.log(data2);

var data3 = {};
data.forEach
(
    function predicate(item,index)
    {
        data3["element_" + index] = item; // Computed Property
        
    }
);
console.log(data3);