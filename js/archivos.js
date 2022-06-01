function ingreso(){

	var usuario = "admin";
	var pass = "admin123";

	if(document.form.contraseña.value == pass && document.form.login.value == usuario){
		alert ("Bienvenido a la pagina de inicio");
		window.location ="pagina2.html";

	}else{

		alert("Datos de Ingreso Incorrectos");
	}
}

// video
var mivideo = document.getElementById("video");
function playPause(){
	if(mivideo.paused){

		mivideo.play();

	}else{
		mivideo.pause();
	}
}

function stop(){
	mivideo.pause();
	mivideo.currentTime = 0;
}

function skip(){
	mivideo.currentTime += value;
}


function leer(){
	window.location ="leerXml.php";
}

function leerAjax(){
	window.location ="leerArchivos.html";
}

function leerCalculadora(){
	window.location ="calculadora.html";
}

/*---------- VENTANA EMERENTE  ----------*/
const abrirModal = document.querySelector("#abrirModal");
const cerrarModal = document.querySelector("#cerrarModal");

const modal = document.querySelector("#modal");

abrirModal.addEventListener("click",()=>{

	modal.showModal();
})

cerrarModal.addEventListener("click",()=>{

	modal.close();

})