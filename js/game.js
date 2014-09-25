/*******************************************
 * Nombre del Usuario
 *******************************************/
var userName = prompt('Escribe tu Nombre') || 'Usuario';
	document.getElementById('userName').innerHTML = userName;
/*******************************************
 * Crear opciones
 *******************************************/
var op = ['papel', 'piedra', 'tijera', 'lagarto', 'spock'];
/*******************************************
 * Objeto de posible Combinaciones	
 *******************************************/
var opciones = get_opciones();
/*******************************************
 * Funcion: get_dinamic_op()
 * Descripcion: 
 * 	Retorna un indice automatico
 *  en la variable OP
 *******************************************/
function get_dinamic_op(){ return Math.floor(Math.random()*(op.length)); }
/*******************************************
 * Funcion: set_opciones( data )
 * Param: data(string) = Nombre de la opcion
 * Descripcion: Agregar nuevas opciones
 *******************************************/
function set_opcion(){
	var data = prompt('Escribe el nombre de la nueva opcion');
	if( opciones[data+data] == 'NaN' ){
		alert("Esta opcion ya existe, Intenta con otra, se mas creativo!");
		return false;
	}
	op[op.length] = data;
	opciones = get_opciones(); //Actualizar Combinaciones
	return true;
}
/*******************************************
 * Funcion: get_opcion()
 * Descripcion: Retornar un Object 
 *				con todas las posibles opciones
 * Estructura:
 * 	Primera palabra: opcion del Cliente, 
 * 	Segunda palabra: opcion de la Maquina
 * 	Ej:
 *	com[<op_usuario><op_maquina>] = True || False
 *******************************************/
function get_opciones(){
	var com = new Object();
	document.getElementById("opciones").innerHTML = '';
	for( var x = 0; x < op.length; x++ ){
		var sts = false;
		for( var i = x; i < op.length; i++ ){
			sts = ( sts )? false : true;
			if( op[i] !== op[x] ){
				com[op[x] + op[i]] = sts; // Opcion Real
				com[op[i] + op[x]] = ( !sts )? false : true; // Opcion Inversa
			}
			else{ 
				com[op[x] + op[i]] = 'NaN'; // Opcion Empate 
			}
		}
		// Agregar opcion
		if( op[x] ){
			document.getElementById("opciones").innerHTML += '<button onClick="iniciarJuego(\''+op[x]+'\');" class="opcion">'+op[x]+'</button>';
		}
	}
	return com;
}
/*******************************************
 * Funcion: iniciarJuego()
 * Descripcion: Determina el ganador del Juego
 * Parametro: 
 * 	<data> Opcion seleccionada por el usuario
 * Retorna: El resultado del juego
 *******************************************/
function iniciarJuego(dataUsr){
	var dataMaq = op[get_dinamic_op()];
	var resultado = '';
	switch( opciones[ dataUsr + dataMaq ] ){
		case true: resultado = '<h1>Ganaste</h1>'; break;
		case false: resultado = '<h1>Perdiste</h1>'; break;
		case 'NaN': resultado = '<h1>Empate</h1>'; break;
		default: resultado = '<h1>Opcion Invalida!</h1>'; break;
	}
	document.getElementById('usuario').innerHTML = dataUsr;
	document.getElementById('maquina').innerHTML = dataMaq;
	document.getElementById('respuesta').innerHTML = resultado;
}