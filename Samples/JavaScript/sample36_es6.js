class ArrayList extends Array
{
    constructor()
    {
        super();

        var arrayListId = Math.random();
        this.getArrayListId = function()
        {
            return arrayListId;
        }
        this.info = function()
        {
            var temp = arrayListId;
        }
        var listeners = [];//private

        this.subscribe = function(cb) 
        {
            listeners.push[cb];
        }

        this.notify = function(newValue)
        {
            listeners.forEach
            {
                function iterator(cb)
                {
                    cb(newValue);
                }
            };
        }


    }

    push(value) //method hidden
    {
        if(value) //not undefined //not null
        {
            super.push(value);
            this.notify(value);
        }
        else
        {
            throw new Error("Invalid arguments passed");
        }
    }
}

var a1 = new ArrayList();
//Listener is writing some part of the code
a1.subscribe
(
    function onChange(newValue)
    {
        console.log("new values added to arraylist" + newValue);
    }
);
a1.push(10);
a1.push(20);
a1.push(30);
console.log(a1);
//a1.push();
//console.log(a1.getArrayListId());
//a1.arrayListId = "tempered value";
//console.log(a1.getArrayListId());