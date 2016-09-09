window.addEventListener("load", function(){
	var boton = document.getElementById("mostrar");
	boton.addEventListener("click", function(){
		var nombre = document.getElementById("nombre").value;
		var edad = parseInt(document.getElementById("edad").value);
		var sexo = document.getElementById("sexo").value;
		var resultado = new Persona(nombre, edad, sexo);

		document.getElementById("mensaje").innerHTML = resultado.presentacion();

	});
});
function Persona(nombre, edad, sexo){
	this.nombre = nombre;
	this.edad = edad;
	this.sexo = sexo;
	this.mayorEdad = (this.edad >= 18);
	};
Persona.prototype.presentacion = function(){
		if (this.mayorEdad) {
			return "Hola, mi nombre es " + this.nombre + " tengo " + this.edad +
		        	"años y soy mayor edad";
		    }
		else{ return "Hola, mi nombre es " + this.nombre + " tengo " + this.edad +
		        	"años y soy menor edad";}

}