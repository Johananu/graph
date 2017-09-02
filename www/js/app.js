var base=5;
var altura=7;
var area= base*altura;
console.log("el area de mi rectangulo es igual: "+area)
//   el area de mi rectangulo es igual: 35

var radio=8;
var pi=3.1416;
var area=pi*Math.pow(radio,2);
console.log("el area de mi circulo es igual: "+area)
//el area de mi circulo es igual: 201.0624

var base=4;
var altura=8;
var area=base*altura/2;
console.log("el area de mi triangulo es igual: "+area)
//el area de mi triangulo es igual: 16

var radio=6;
var pi=3.1416;
var volumen=(4/3)*pi*Math.pow(radio,3);
console.log("el volumen de mi esfera es igual: "+volumen)
//el volumen de mi esfera es igual: 26

variable="johana";
function funcion(){
 var cadena="mi nombre es: "+ variable;
 console.log(cadena);
}
funcion();
//mi nombre es: johana

nombre="johana";
function saludar(){
if(true){//si existe la variable
    var nombre="eric";//funciona en todo el scope si la declaras arriba.
}
console.log(`hola ${nombre}`);
}

function saludar10(){

    let i=0;//sirve solo en donde la declaraste, se utiliza cuando el valor va a acambiar constantemente
    for(i;i<10;i++){
        console.log(`hola ${nombre}`);
    }
    console.log(`el valor de i es ${i}`);
}

