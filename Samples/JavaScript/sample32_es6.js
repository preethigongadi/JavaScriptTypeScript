var data1 = [10,20,50,30,300];
var data2 = [100,600,300];

var data3 = 
[
    ...data1, //sperad
    ...data2
];//new memory allocation immutables

console.log(data3);

var vals = [10,20,50,30];
//vals.push(100);

//console.log(vals);

function pushToFirst(vals,newValue)
{
    var data = 
    [
        newValue,
        ...vals
    ];

    return data;
}

var vals = pushToFirst(vals,100);
console.log(vals);
//[100, 10, 20, 50, 30]