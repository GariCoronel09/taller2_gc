<?php


	print("<h1 align='center'>Listado de Estudiantes del 5A DBP</h1>");	
	echo('<table align="center" border=1 style="background:yellow">');
	
	if(file_exists('Estudiantes.xml')){

		$xml = simplexml_load_file('Estudiantes.xml');
		// echo '<pre>'; print_r($xml); echo '</pre>';
		echo"<center>";
		print("<b><br>Leyendo El archivo de Estudiantes.xml<br><br>");
		echo"</center>";

		echo '<tr>';   
			echo '<th>ESTUDIANTES</th>';
			echo '<th>CÉDULA</th>';
			echo '</tr>'; 

		foreach ($xml->estudiante as $key => $estud) {
			// echo "Estudiante: ".$estud->nombre." con Cédula: ".$estud->cedula."<br>";
			echo "<tr>";
			echo "<th>";
			echo "<b>".$estud->nombre." ".$estud->apellido. "<br>";
			echo "</th>";

			echo "<th>";
			echo "<b>".$estud->cedula."<br>";
			echo "</th>";
			echo "</tr>";	
		}

	}else{
		exit("No se puede abrir el XML");
	}
	echo '</table>';
?>


