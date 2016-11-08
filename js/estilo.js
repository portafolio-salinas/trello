function trello(){
	var lista = document.getElementById('contenedor');
	var crear = document.createElement('button');
	var agregar = document.createElement('input');//donde escrivire mis tatreas
	var formulario = document.createElement('div');//es el lugar donde va apareser mi boton guardar e input
	var textoBoton = document.createTextNode('Guardar');//es la palabra que esta dentro del boton
	var nuevaCajaLista = document.createElement('div');//esta es para guardar las listas nuevas


	crear.appendChild(textoBoton);
	
	crear.setAttribute('class', 'btn btn-primary lindo'); //boton
	agregar.setAttribute('type', 'text');//input
	agregar.setAttribute('placeholder', 'Ingresar datos');
	agregar.setAttribute('id', 'inputLista');
	formulario.setAttribute('id','abajo');
	nuevaCajaLista.setAttribute('class','lista');

	formulario.appendChild(crear);
	formulario.appendChild(agregar);
	lista.appendChild(formulario);
	lista.appendChild(nuevaCajaLista);



	// aca va la segunda parte

	
	//var ubicarLista = document.createElement('div');
	//var contenidoLista = document.createElement('p');
	

	//contenidoLista.setAttribute('class','tituloLista');
	//contenidoLista.appendChild(mensajeTarjeta);
	//ubicarLista.appendChild(contenidoLista);
	//nuevaCajaLista.appendChild(ubicarLista);
	//ubicarLista.appendChild(contenidoLista);
	//crear.setAttribute('onclick','retener()');
	


	//function retener(){
		var llamar = document.getElementsByClassName('lindo')[0];
		llamar.addEventListener('click', function(){
			var rescateInput = document.getElementById('inputLista').value;
			console.log(rescateInput);
			var mensajeTarjeta = document.createTextNode(rescateInput);
			var llamarMensajeTarjeta = document.getElementById('abajo');
			var tranportaLista = document.createElement('span');
			tranportaLista.appendChild(mensajeTarjeta);
			llamarMensajeTarjeta.appendChild(tranportaLista);
		});

		//var nuevaLista = document.createElement('input');
		//tranportaLista.appendChild(nuevaLista);
		//lista.appendChild(tranportaLista);




}//fin funcion trello