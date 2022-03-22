
//HTTP  Browser - hTTP CALL 
//HTTP/HTTPS
//WS/WSS

// HTTP Call from Browser

function callApi()
{
    var xhr = new XMLHttpRequest();
    var apiEndpoint = "";

    xhr.open
    (
        "GET", // HTTP GET
        apiEndpoint,
        true // async
    )

    var obj = 
    {
        name : "Max",
        age : 25
    };

    var objJson = JSON.stringify(obj);

    xhr.onload = function() // success
    {
        var data = xhr.response;
        console.log(data);
    }

    xhr.onerror = function() // error
    {

    }

    xhr.send(objJson);
}