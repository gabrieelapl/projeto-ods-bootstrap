xmlhttp = new XMLHttpRequest();
xmlhttp.open("GET","xml/conteudo.xml",false);
xmlhttp.send();
xmlDoc = xmlhttp.responseXML;
x = xmlDoc.getElementsByTagName("conteudo");
y = xmlDoc.getElementsByTagName("noticia");


// O que são os ODS? - início
function titulo1(){
    for(i= x.length - 1; i >= 0; i--){
        document.write(x[i].getElementsByTagName("titulo1")[0].childNodes[0].nodeValue);
    }
}

function texto1(){
    for(i= x.length - 1; i >= 0; i--){
        document.write(x[i].getElementsByTagName("texto1")[0].childNodes[0].nodeValue);
    }
}

function texto01(){
    for(i= x.length - 1; i >= 0; i--){
        document.write(x[i].getElementsByTagName("texto01")[0].childNodes[0].nodeValue);
    }
}
// O que são os ODS? - fim

// Igualdade de Gênero - início
function titulo2(){
    for(i= x.length - 1; i >= 0; i--){
        document.write(x[i].getElementsByTagName("titulo2")[0].childNodes[0].nodeValue);
    }
}

function texto2(){
    for(i= x.length - 1; i >= 0; i--){
        document.write(x[i].getElementsByTagName("texto2")[0].childNodes[0].nodeValue);
    }
}

function texto02(){
    for(i= x.length - 1; i >= 0; i--){
        document.write(x[i].getElementsByTagName("texto02")[0].childNodes[0].nodeValue);
    }
}
// Igualdade de Gênero - fim

// Por que a Igualdade de Gênero é tão importante? - início
function titulo3(){
    for(i= x.length - 1; i >= 0; i--){
        document.write(x[i].getElementsByTagName("titulo3")[0].childNodes[0].nodeValue);
    }
}

function texto3(){
    for(i= x.length - 1; i >= 0; i--){
        document.write(x[i].getElementsByTagName("texto3")[0].childNodes[0].nodeValue);
    }
}

function texto03(){
    for(i= x.length - 1; i >= 0; i--){
        document.write(x[i].getElementsByTagName("texto03")[0].childNodes[0].nodeValue);
    }
}
// Por que a Igualdade de Gênero é tão importante? - fim

// Metas para alcançar a Igualdade de Gênero - início
function titulo4(){
    for(i= x.length - 1; i >= 0; i--){
        document.write(x[i].getElementsByTagName("titulo4")[0].childNodes[0].nodeValue);
    }
}

function texto4(){
    for(i= x.length - 1; i >= 0; i--){
        document.write(x[i].getElementsByTagName("texto4")[0].childNodes[0].nodeValue);
    }
}

function meta1(){
    for(i= x.length - 1; i >= 0; i--){
        document.write(x[i].getElementsByTagName("meta1")[0].childNodes[0].nodeValue);
    }
}

function meta2(){
    for(i= x.length - 1; i >= 0; i--){
        document.write(x[i].getElementsByTagName("meta2")[0].childNodes[0].nodeValue);
    }
}

function meta3(){
    for(i= x.length - 1; i >= 0; i--){
        document.write(x[i].getElementsByTagName("meta3")[0].childNodes[0].nodeValue);
    }
}

function meta4(){
    for(i= x.length - 1; i >= 0; i--){
        document.write(x[i].getElementsByTagName("meta4")[0].childNodes[0].nodeValue);
    }
}
// Metas para alcançar a Igualdade de Gênero - fim




//blog


function funcaoNoticia() {
    for(i= y.length - 1; i >= 0; i--){
        document.write("<h1 class='display-4 fst-italic' style='width: 100%;'>" +
        y[i].getElementsByTagName("titulo_noticia")[0].childNodes[0].nodeValue + "</h1>" + 
        "<div class='mb-1 text-muted'>" +
        y[i].getElementsByTagName("data_noticia")[0].childNodes[0].nodeValue + "</div>" +
        "<p class='lead my-3'>" + 
        y[i].getElementsByTagName("corpo_noticia")[0].childNodes[0].nodeValue.substr(0,200) + "...</p>" +
        "<p class='lead mb-0'>" +
        "<a href='noticia.html?codigo_noticia=" + i + "' class='text-white fw-bold'>Leia mais.</a></p>");
    }
}

function tituloNoticia(){
    url = new URL(window.location.href)
    parametro = url.searchParams;
    i = parametro.get("codigo_noticia");

    document.write(y[i].getElementsByTagName("titulo_noticia")[0].childNodes[0].nodeValue)
}    

function subtituloNoticia(){
    url = new URL(window.location.href);
    parametro = url.searchParams;
    i = parametro.get("codigo_noticia");

    document.write(y[i].getElementsByTagName("subtitulo_noticia")[0].childNodes[0].nodeValue);
}

function corpoNoticia(){
    url = new URL(window.location.href);
    parametro = url.searchParams;
    i = parametro.get("codigo_noticia");

    document.write(y[i].getElementsByTagName("corpo_noticia")[0].childNodes[0].nodeValue);
}   

