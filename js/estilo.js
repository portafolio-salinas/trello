function trello(){
	var lista = document.getElementById('contenedor');
	var crear = document.createElement('input');
	var agregar = document.createElement('input')
	
	crear.setAttribute('type', 'button');
	crear.setAttribute('value', 'Listo');
	agregar.setAttribute('type', 'text');
	agregar.setAttribute('placeholder', 'Ingresar datos');
	agregar.value;
	agregar.value = '';

	lista.appendChild(crear);
	lista.appendChild(agregar);
}