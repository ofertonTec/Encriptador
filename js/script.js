
/*
const posts=[{
	id:1,
	title:'Mi primer post',
	tags: ['javaScript','webDevelopment'],
},
{
	id:2,
	title:'Mi segundo post',
	tags: ['javaScript','webDevelopment'],
},
{
	id:3,
	title:'Mi tercer post',
	tags: ['javaScript','webDevelopment','react'],
}]

var resultado= posts.reduce((todasEtiquetas, post) => {

	return Array.from(new Set([...todasEtiquetas, ...post.tags]))
}, [])

console.log(resultado);
console.log(posts.filter(post => post.tags.includes('react')));
console.log(posts.map(post => post.tags='javaScript'));
*/

function compararReglasEncriptar(letra){

	switch(letra){
		case "e": 
			return "enter";
		break;
		case "i": 
			return "imes";
		break;
		case "a": 
			return "ai";
		break;
		case "o": 
			return "ober";
		break;
		case "u": 
			return "ufat";
		break;
		 default: 
		 	return letra;

	}
}
function leerTexto(texto){

	var arrayCompleto=[];

	for(var i =0; i<=texto.length;i++){
      	var letra = texto.charAt(i);
      	var letraSustituida= compararReglasEncriptar(letra);
      	arrayCompleto.push(letraSustituida);

      }
      
      return arrayCompleto;

}
    
    function encriptarTexto(){

      
      var texto= document.getElementById("inputtexto");
      if(validarTextoInformado(texto.value)){
        var palabraEncriptada =leerTexto(texto.value);
        document.getElementById("mensaje").value=palabraEncriptada.join("");
      }else{
        alert("Ingrese solo letras minusculas")
        texto.value="";
        texto.focus();
      }
      
    }

    function validarTextoInformado(texto){
      var patron = /^[a-z]/g;
      var isVerificado=false;
      if(texto != null){
        isVerificado= patron.test(texto.replace(" ",""));
      }
      console.log(isVerificado);
      console.log(texto);
      return isVerificado;
    }
	
    function dividirString(texto){
    	
    	var resul=texto;
    	console.log("dividirString: "+resul);
    	if(resul.includes('enter')){
    		resul= resul.replace(/enter/g,'e');
    		console.log("if enter: " +resul);
    	}
		if(resul.includes('imes')){
    		resul=resul.replace(/imes/g,'i');
    		console.log("if imes: " +resul);
    	}

    	if(resul.includes('ai')){
    		resul=resul.replace(/ai/g,'a');
    		console.log("if ai: " +resul);
    	}

    	if(resul.includes('ober')){
    		resul=resul.replace(/ober/g,'o');
    		console.log("if ober: " +resul);
    	}
    	if(texto.includes('ufat')){
    	resul= resul.replace(/ufat/g,'u');
    	 console.log("if ufat: " +resul);
    	}
    	console.log("desencriptado: "+resul);
    	document.getElementById("mensaje").value=resul;

    	

    }

    function desencriptarTexto(){
    	 var texto= document.getElementById("inputtexto");
    	 var palabraDesencriptada= dividirString(texto.value);
    }

    function limpiar(){
    	var texto= document.getElementById("inputtexto");
    	texto.value="";
    	texto.focus();
    }

      var btnEncriptar =document.getElementById("encriptarTT");
      btnEncriptar.onclick=encriptarTexto;

      var btnDesencriptar =document.getElementById("desencriptarTT");
      btnDesencriptar.onclick=desencriptarTexto;

      var btnCopiar =document.getElementById("btn-copy");
      btnCopiar.onclick=copyToClipBoard;

      var btnLimpiar =document.getElementById("limpiar");
      btnLimpiar.onclick=limpiar;



   function copyToClipBoard() {

    var content = document.getElementById('mensaje');
    
    content.select();
    document.execCommand('copy');

    content.value="";
}