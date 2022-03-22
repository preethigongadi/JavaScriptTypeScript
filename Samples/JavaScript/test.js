class Test{
    constructor()
    {
        this.resposeCall = function(cb)
        {
            cb("test");
        }
    }
}

var a1 = new Test();
a1.resposeCall(
    function display(some) {
        console.log(some);
    }
);