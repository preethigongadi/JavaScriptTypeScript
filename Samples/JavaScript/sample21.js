var originallog = console.log;

console.log = function customLog(input) 
{
    var dt = new Date().toLocaleTimeString();
    originallog(dt + ":" + input);
}

//Monkey patching
//Quantum Matrix (Proactive issue resolution)
