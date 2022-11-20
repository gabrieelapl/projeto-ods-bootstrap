xmlhttp = new XMLHttpRequest();
xmlhttp.open("GET","xml/conteudo.xml",false);
xmlhttp.send();
xmlDoc = xmlhttp.responseXML;
x = xmlDoc.getElementsByTagName("conteudo");


// O que são os ODS? - início
function titulo1(){
    for(i=0; i<=1; i++){
        document.write(x[i].getElementsByTagName("titulo1")[0].childNodes[0].nodeValue);
    }
}

function texto1(){
    for(i=0; i<=1; i++){
        document.write(x[i].getElementsByTagName("texto1")[0].childNodes[0].nodeValue);
    }
}

function texto01(){
    for(i=0; i<=1; i++){
        document.write(x[i].getElementsByTagName("texto01")[0].childNodes[0].nodeValue);
    }
}
// O que são os ODS? - fim

// Igualdade de Gênero - início
function titulo2(){
    for(i=0; i<=1; i++){
        document.write(x[i].getElementsByTagName("titulo2")[0].childNodes[0].nodeValue);
    }
}

function texto2(){
    for(i=0; i<=1; i++){
        document.write(x[i].getElementsByTagName("texto2")[0].childNodes[0].nodeValue);
    }
}

function texto02(){
    for(i=0; i<=1; i++){
        document.write(x[i].getElementsByTagName("texto02")[0].childNodes[0].nodeValue);
    }
}
// Igualdade de Gênero - fim

// Por que a Igualdade de Gênero é tão importante? - início
function titulo3(){
    for(i=0; i<=1; i++){
        document.write(x[i].getElementsByTagName("titulo3")[0].childNodes[0].nodeValue);
    }
}

function texto3(){
    for(i=0; i<=1; i++){
        document.write(x[i].getElementsByTagName("texto3")[0].childNodes[0].nodeValue);
    }
}

function texto03(){
    for(i=0; i<=1; i++){
        document.write(x[i].getElementsByTagName("texto03")[0].childNodes[0].nodeValue);
    }
}
// Por que a Igualdade de Gênero é tão importante? - fim

// Metas para alcançar a Igualdade de Gênero - início
function titulo4(){
    for(i=0; i<=1; i++){
        document.write(x[i].getElementsByTagName("titulo4")[0].childNodes[0].nodeValue);
    }
}

function texto4(){
    for(i=0; i<=1; i++){
        document.write(x[i].getElementsByTagName("texto4")[0].childNodes[0].nodeValue);
    }
}

function meta1(){
    for(i=0; i<=1; i++){
        document.write(x[i].getElementsByTagName("meta1")[0].childNodes[0].nodeValue);
    }
}

function meta2(){
    for(i=0; i<=1; i++){
        document.write(x[i].getElementsByTagName("meta2")[0].childNodes[0].nodeValue);
    }
}

function meta3(){
    for(i=0; i<=1; i++){
        document.write(x[i].getElementsByTagName("meta3")[0].childNodes[0].nodeValue);
    }
}

function meta4(){
    for(i=0; i<=1; i++){
        document.write(x[i].getElementsByTagName("meta4")[0].childNodes[0].nodeValue);
    }
}
// Metas para alcançar a Igualdade de Gênero - fim