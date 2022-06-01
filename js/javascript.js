// alert('Hola Js');

function sumar(){

	let contenido = document.getElementById("cajatxt1").value;
	let contenido2 = document.getElementById("cajatxt2").value;
	
	var resultado = Number(contenido) + Number(contenido2);
	
	alert(resultado);
}

function restar(){

	let contenido = document.getElementById("cajatxt1").value;
	let contenido2 = document.getElementById("cajatxt2").value;
	
	var resultado = Number(contenido) - Number(contenido2);
	alert(resultado);
}

function multiplicar(){

	let contenido = document.getElementById("cajatxt1").value;
	let contenido2 = document.getElementById("cajatxt2").value;
	
	var resultado = Number(contenido) * Number(contenido2);
	alert(resultado);
}

function dividir(){

	let contenido = document.getElementById("cajatxt1").value;
	let contenido2 = document.getElementById("cajatxt2").value;
	
	var resultado = Number(contenido) / Number(contenido2);
	alert(resultado);
}


