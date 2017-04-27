/* fonction pour integrer l'API*/
function fonctionRequeteApi(url,elementID)
{
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var myObj = this.responseText;
            var jsonPretty = JSON.stringify(JSON.parse(myObj),null,2);
             document.getElementById(elementID).innerHTML = jsonPretty;
            
            output(jsonPretty,elementID);
            output(syntaxHighlight(jsonPretty),elementID);
        }
    };
xmlhttp.open("GET", url, true);
xmlhttp.send();

}

/* fonction quon appel pour charger les API*/
function homePageLoading() {
  
    fonctionRequeteApi("https://api.blockcypher.com/v1/btc/main", "info");
    fonctionRequeteApi("https://bitcoin.mubiz.com/peerinfo","peerinfo");
    fonctionRequeteApi("https://bitcoin.mubiz.com/mininginfo", "mininginfo");
    fonctionRequeteApi("https://bitcoin.mubiz.com/blockchaininfo", "blockchaininfo");   
}

/*Fonction pour recuperer et afficher les valeurs saisie par le formulaire*/

function SendData()
{
    /*name */
    var api=document.getElementById("select_api").value;
    var adresse = "https://bitcoin.mubiz.com/"
    var url= adresse.concat(api);
    fonctionRequeteApi(url,"resultat");
    
    /*hash*/
    var hash =document.getElementById("select_hash").value;
    var adresse_hash = "https://api.blockcypher.com/v1/btc/main/blocks/"
    var url_hash= adresse_hash.concat(hash);
    fonctionRequeteApi(url_hash,"resultathash");
    
    
    /*index*/
    var index =document.getElementById("select_index").value;
    var get_index = "/block_index/"
    var tmp = get_index.concat(index);
    var url_index = adresse.concat(tmp);
    url_index = url_index.concat("/");
    fonctionRequeteApi(url_index,"resultatindex")
}
function output(inp, elementID) {
    //document.body.appendChild(document.createElement('pre')).innerHTML = inp;
     document.getElementById(elementID).innerHTML = inp;
}

function syntaxHighlight(json) {
    json = json.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
    return json.replace(/("(\\u[a-zA-Z0-9]{4}|\\[^u]|[^\\"])*"(\s*:)?|\b(true|false|null)\b|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)/g, function (match) {
        var cls = 'number';
        if (/^"/.test(match)) {
            if (/:$/.test(match)) {
                cls = 'key';
            } else {
                cls = 'string';
            }
        } else if (/true|false/.test(match)) {
            cls = 'boolean';
        } else if (/null/.test(match)) {
            cls = 'null';
        }
        return '<span class="' + cls + '">' + match + '</span>';
    });
}




