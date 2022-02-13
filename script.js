
/* Reglas de encriptación: 
"e" es convertido para "enter" 
"i" es convertido para "imes"
"a" es convertido para "ai"
"o" es convertido para "ober"
"u" es convertido para "ufat"
Solo letras minusculas
No se permite acentuación de palabras 
*/

/* Reglas de desencriptación: 
"enter" es convertido para "e" 
"imes" es convertido para "i"
"ai" es convertido para "a"
"ober" es convertido para "o"
"ufat" es convertido para "u"
Solo letras minusculas
No se permite acentuación de palabras   
*/

// Esta es la funcion del encriptador, primero se pasa la cadena a un arrey, despues se usa un for
// para recorrerlo y despues un if para encontrar los caracteres, en la resolucion del if
// va la cadena por la que es reemplazado el caracter

function encriptador() {
    var encriptar = document.getElementById("input-texto").value;
    var encriptado = [...encriptar]
    
    for (let index = 0; index < encriptado.length; index++) {
    if (encriptado[index]=="e") {
        encriptado[index] = "enter"        
    }else if (encriptado[index]=="i") {
        encriptado[index] = "imes" 
    }else if (encriptado[index]=="a") {
        encriptado[index] = "ai" 
    }else if (encriptado[index]=="o") {
        encriptado[index] = "ober" 
    }else if (encriptado[index]=="u") {
        encriptado[index] = "ufat" 
    }
        
}//este join sirve para unir todo el array, sino saldrian todas las letras separadas por comas
    encriptado = encriptado.join("")
    document.getElementById("msg").value = encriptado
}

// este es el boton de resetear, te reemplaza ambas cajitas por un string vacio

function resetear() {
    document.getElementById ("input-texto").value = "";
    document.getElementById("msg").value = "";
}


// este es el desencriptador, se usa la función "replace", poniendo punto y seguido se pueden poner mas replace.
// primero se pone lo que hay que reemplazar entre barras, despues viene "gi", para que busque en todo el texto y no pare
// despues de encontrar la primer coincidencia, y despues se escribe con que lo reemplazas
function desencriptador() {
    var adesencriptar = document.getElementById("input-texto").value;
    adesencriptar = adesencriptar.replace(/ai/gi, 'a').replace(/enter/gi, 'e').replace(/imes/gi, 'i').replace(/ober/gi, 'o').replace(/ufat/gi, 'u');
    
        document.getElementById("msg").value = adesencriptar;
    
}

// este corresponde al desafio adicional de usar un boton para copiar al portapapeles el "execcommand" sale tachado porque esta "depreciado"
// o sea que algun día va a ser obsoleto, pero por ahora no hay otra forma "simple" de hacerlo
function copiarPorta (){
    var textoaCopiar = document.getElementById("msg");
    textoaCopiar.select();
    document.execCommand("Copy");

}
// el boton de copiar/pegar/desencriptar es mas facil de hacer que el de copiar al portapapeles. Se reemplaza la entrada por la salida.

function copiarpegardes() {
    document.getElementById ("input-texto").value = document.getElementById("msg").value;
    desencriptador();
}
// Este mensaje estaba en el trello al final, era como una recompensa, por eso queda fijo.

function msgSecreto() {
    document.getElementById ("input-texto").value = "fenterlimescimesdaidenters poberr enternfrenterntair enterstenter dentersaifimesober y haibenterrlober cobernclufatimesdober cobern enterximestober!"
    desencriptador();
}