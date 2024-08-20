let textArea = document.querySelector (".ingreso-texto");
let mensaje = document.querySelector (".text-area");
let copiar =document.querySelector (".copiar");


document.getElementById("botones").addEventListener("click", function() {
    document.getElementById("botonCopiar").style.display = "block";
});


function btnEncriptar(){
    let textoEncriptado = encriptar (textArea.value);
    mensaje.value = textoEncriptado ;
    textArea.value="";
    mensaje.style.backgroundImage = "none";
   
}


document.getElementById('ingresoTexto').addEventListener('input', function(e) {
    e.target.value = e.target.value.replace(/[^a-z\s]/g, '');
});


function encriptar(stringEncriptar) {
    let matrizCodigo = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]]
    stringEncriptar = stringEncriptar.toLowerCase();
     for(let i = 0; i < matrizCodigo.length; i++) {
        if (stringEncriptar.includes(matrizCodigo[i][0])) {
            stringEncriptar = stringEncriptar.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1])
            }        
    }  
     return stringEncriptar;
}



function btnDesencriptar (){
    let textoEncriptado = desencriptar (textArea.value);
    mensaje.value = textoEncriptado;
    textArea.value = "" ;
}


function desencriptar (stringDesencriptar){
    let matrizCodigo = [["enter", "e"],["imes", "i"],["ai","a"],["ober","o"], ["ufat","u"]]
    stringDesencriptar =stringDesencriptar.toLowerCase();
    for(let i = 0; i < matrizCodigo.length; i++) {
        if (stringDesencriptar.includes(matrizCodigo[i][0])) {
            stringDesencriptar = stringDesencriptar.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1])
            }        
    }  
     return stringDesencriptar
}


function copiarTexto(){
    let textoCopiado = document.getElementById("text-area").value ;
    if (textoCopiado.length !=0){
        navigator.clipboard.writeText(textoCopiado);
        alert("El texto fue copiado con éxito");
    } else { 
        alert ("No hay texto para copiar")
    }
}
