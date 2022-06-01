// console.log('correcto');

document.querySelector('#boton').addEventListener('click', traerDatos);
document.querySelector('#boton2').addEventListener('click', traerDatos2);

/*=============================================
FUNCION PARA TRAER TODO EL AJAX
=============================================*/
function traerDatos(){
	// console.log('correcta funcion');

	const xhttp= new XMLHttpRequest();
	xhttp.open('GET', 'catalogo.json', true);
	xhttp.send();

	xhttp.onreadystatechange = function(){

		if(this.readyState == 4 && this.status == 200){

			// console.log(this.responseText);
			let datos = JSON.parse(this.responseText);

			let res = document.querySelector('#res');
			res.innerHTML= '';
			
			for(let item of datos){

				res.innerHTML +=` 

				<tr style= background: red;>
				<td>${item.dia1}</td>
				<td>${item.dia2}</td>
				<td>${item.dia3}</td>
				<td>${item.dia4}</td>
				<td>${item.dia5}</td>
				
				</tr>
				`
			}
		}

	}
 }
function traerDatos2(){
	// console.log('correcta funcion');

	const xhttp= new XMLHttpRequest();
	xhttp.open('GET', 'catalogo2.json', true);

	xhttp.send();

	xhttp.onreadystatechange = function(){

		if(this.readyState == 4 && this.status == 200){

			// console.log(this.responseText);
			let datos = JSON.parse(this.responseText);

			let res = document.querySelector('#res2');
			res.innerHTML= '';
			
			for(let item of datos){

				res.innerHTML +=` 

				<tr>
				<td>${item.hora1}</td>
				<td>${item.dia1}</td>
				<td>${item.dia2}</td>
				<td>${item.dia3}</td>
				<td>${item.dia4}</td>
				<td>${item.dia5}</td>
				

				</tr>

				`

			}
		}

	}
 }