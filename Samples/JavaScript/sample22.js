function Product(name, price)
{
    this.name = name;
    this.price = price;
}

var data = [
    new Product("Mobile",25000),
    new Product("Tablet",45000),
    new Product("Laptop",55000),
    new Product("Desktop",20000),
    new Product("XBox",5000),
    new Product("XBox",5000),
];

var data2 = data; //copy by ref
data2[1].price = 10000;

console.log(data);

//synchrounous operations
data.forEach(
    function predicate(item, index)
    {
        console.log(item + "(" + item.price + ") ");
    }
);

var transormeddata = data.map(
    function predicate(item,index)
    {
        item.tax = item.price * 18/100;
        return item;
    }
)

console.log(transormeddata);

var productNames = data.map(
    function predicate(item,index)
    {
        return item.name;
    }
)

console.log(productNames);
console.log(productNames.join(","));

var filteredData = data.filter(
    function predicate(item,index)
    {
        return item.price > 30000;
    }
)
.map
         (
             function copy(item,index)
             {
                 return new Product(item.name,item.price) //deep copy
                
                 return {
                     name : item.name,
                     price : item.price
                 }
             }   
         );
//console.log(filteredData);
filteredData[0].price = filteredData[0].price * 2;
console.log(data);
console.log(filteredData);


var matchedRecord = data.find(
         function predicate(item,index)
         {
             //return a boolean
             return item.price > 100000;
         }
     );
 console.log(matchedRecord);

if (!matchedRecord)
{
    //proceed ahead
}


var matchedRecordIndex = data.findIndex(
         function predicate(item,index)
         {
            //return a boolean
             return item.price > 300000;
         }
     );
 console.log("matchedRecordIndex",matchedRecordIndex);

 if(matchedRecordIndex > -1)
  {    
  }
 
  var sortedData = data.sort(
      function predicate(current,next)
      {
          //return current.price - next.price; // ascending order
          return next.price - current.price; // descending order
      }
  );
  console.log(sortedData);

  //Skip approach
 var slicedData = data.slice(2);
 console.log("slicedData",slicedData);

 //Take Approach
 var splicedData = data.splice(0,2);
 console.log("splicedData",splicedData);

 var customData = 
  [
      data.map(function(item){ return item }).splice(0,1)[0],
      data.map(function(item){ return item }).splice(2,1)[0]
  ];
  console.log(customData);
 
  var result = data.map(function(item){ return item }).splice(0,2) // splice(startIndex,NumberOfItems)
  .concat
  (
      data.map(function(item){ return item }).splice(4,1) //5
  )
  console.log("result",result);