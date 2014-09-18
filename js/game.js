document.write( get_dinamic_op() );
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
 * 	Selecciona una opciones automatica
 *******************************************/
function get_dinamic_op(){
	return 5;
}
/*******************************************
 * Funcion: set_opciones( data )
 * Param: data(string) = Nombre de la opcion
 * Descripcion: Agregar nuevas opciones
 *******************************************/
function set_opcion( data ){
	if( !empty(op[data]) ){
		op[op.length--] = data;
		return true;
	}
	return false;
}
/*******************************************
 * Funcion: get_opcion()
 * Descripcion: Retornar un Object 
 *				con todas las posibles opciones
 * Estructura:
 * 	Primera palabra: opcion del Cliente, 
 * 	Segunda palabra: opcion de la Maquina
 * 	Separador: -
 * 	Ej:
 *	com[<op_usuario>-<op_maquina>] = True || False
 *******************************************/
function get_opciones(){
	var sts = false;
	var com = new Object();
	for( var x = 0; x < op.length; x++ ){
		for( var i = x; i < op.length; i++ ){
			if( op[i] !== op[x] ){
				com[op[x]+'-'+op[i]] = ( sts )? false : true; // Opcion Verdadero (Ganador)
				com[op[i]+'-'+op[x]] = ( !sts )? false : true; // Opcion Inversa (Perdedor)
			}else{
				com[op[x]+'-'+op[i]] = 'NaN'; // Opcion Empate
			}
		}
	}
	return com;
}


var cliente = prompt('Selecciona tu opcion');
// document.write('<h1>Opcion Invalida!</h1>'+cliente+'-'+op[0]);
// document.write('<h1>Opcion Invalida!</h1>'+opciones[ cliente+'-'+op[0] ]);
switch( opciones[ cliente+'-'+op[0] ] ){
	case true: document.write('<h1>Ganaste</h1>'); break;
	case false: document.write('<h1>Perdiste</h1>'); break;
	case 'NaN': document.write('<h1>Empate</h1>'); break;
	default: document.write('<h1>Opcion Invalida!</h1>'); break;
}
