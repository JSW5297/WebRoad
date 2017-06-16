/**
 * Created by Svend on 16-9-11.
 */
var serverData, statusDiv;
var SERVER_URL = "index.php";

window.onload = function () {
    serverData = document.getElementById("serverData");
    statusDiv = document.getElementById("statusDiv");

    startListenServer();
};

function startListenServer(){
    statusDiv.innerHTML = "start Connect Server...";
    var es = new EventSource(SERVER_URL);
    es.addEventListener("newDate",newDateHandler);
    es.onopen =openHandler;
    es.onerror = errorHandler;
    es.onmessage = messageHandler;
}

function openHandler(e){
    statusDiv.innerHTML="Server open";
}

function errorHandler(e){
    statusDiv.innerHTML="Error";
}

function messageHandler(e){
    serverData.innerHTML = e.data;
}

function newDateHandler(e){
    serverData.innerHTML = e.data;
}