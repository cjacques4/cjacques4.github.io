/* fonction quon appel pour charger les API*/
function homePageLoading() {
  
    fonctionRequeteApi("https://api.blockcypher.com/v1/btc/main", "info");
    fonctionRequeteApi("http://bitcoin.mubiz.com/peerinfo","peerinfo");
    fonctionRequeteApi("http://bitcoin.mubiz.com/mininginfo", "mininginfo");
    fonctionRequeteApi("http://bitcoin.mubiz.com/blockchaininfo", "blockchaininfo");   
}

/* fonction pour integrer l'API*/
function fonctionRequeteApi(url,elementID)
{
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var myObj = this.responseText;
            var jsonPretty = JSON.stringify(JSON.parse(myObj),null,2);
            document.getElementById(elementID).innerHTML = jsonPretty;
        }
    };
xmlhttp.open("GET", url, true);
xmlhttp.send();
}
/*
var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function() {
if (this.readyState == 4 && this.status == 200) {
var myObj = this.responseText;
var jsonPretty = JSON.stringify(JSON.parse(myObj),null,2);
document.getElementById("demo").innerHTML = jsonPretty;
}
};
xmlhttp.open("GET", "https://api.blockcypher.com/v1/btc/main", true);
xmlhttp.send(); 

var xmlhttp1 = new XMLHttpRequest();
xmlhttp1.onreadystatechange = function() {
if (this.readyState == 4 && this.status == 200) {
var myObj = this.responseText;
var jsonPretty = JSON.stringify(JSON.parse(myObj),null,2);
document.getElementById("demo1").innerHTML = jsonPretty;
}
};
xmlhttp1.open("GET", "http://bitcoin.mubiz.com/info", true);
xmlhttp1.send();

var xmlhttp2 = new XMLHttpRequest();
xmlhttp2.onreadystatechange = function() {
if (this.readyState == 4 && this.status == 200) {
var myObj = this.responseText;
var jsonPretty = JSON.stringify(JSON.parse(myObj),null,2);
document.getElementById("demo2").innerHTML = jsonPretty;
}
};
xmlhttp2.open("GET", "http://bitcoin.mubiz.com/blockchaininfo", true);
xmlhttp2.send();

var xmlhttp3 = new XMLHttpRequest();
xmlhttp3.onreadystatechange = function() {
if (this.readyState == 4 && this.status == 200) {
var myObj = this.responseText;
var jsonPretty = JSON.stringify(JSON.parse(myObj),null,2);
document.getElementById("demo3").innerHTML = jsonPretty;
}
};
xmlhttp3.open("GET", "http://bitcoin.mubiz.com/mininginfo", true);
xmlhttp3.send();

var xmlhttp4 = new XMLHttpRequest();
xmlhttp4.onreadystatechange = function() {
if (this.readyState == 4 && this.status == 200) {
var myObj = this.responseText;
var jsonPretty = JSON.stringify(JSON.parse(myObj),null,2);
document.getElementById("demo4").innerHTML = jsonPretty;
}
};
xmlhttp4.open("GET", "http://bitcoin.mubiz.com/peerinfo", true);
xmlhttp4.send(); */