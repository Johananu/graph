//primera regla: la palabra temrina en "ar", se le quitan los dos ultimos caracteres
function platzom(str){
    let translation = str;//parametro
    if(str.toLowerCase().endsWith("ar")) {//convierte a minusculas, leer la palabra, si el final es ar
translation=str.slice(0,-2);//corta la palabra, recorre todo el string y ke resta los ultimos dos
    }

//segunda regla: si la palabra inicia con "z" se le añadelos caracteres "pe" al final de la palabra
if(str.toLowerCase().startsWith("z")) {//convierte a minusculas, leer la palabra, si el inicio es z
    translation+="pe";
        }

//tercera regla: si la palabra traducida tiene 10 o mas letras se debe partir a la mitad y unir con un guion
if(str.toLowerCase().length>=10){
   let n= Math.round(str.length/2);
translation=str.slice(0,n) +"-"+str.slice(n);
   }
    return translation;
}

//si la palabra original es un palindromo ninguna de las anteriores reglas funciona y se develvela palabra intercalando en mayusculas y minusculas
const reverse=(str)=>str.split('').reverse().join('');//esta funcion esta en una variable
function sinmay(str){
const l=str.length;//en todos lados 
let translation="";//dentro de minmay
let capitalize=true;
for(let i=0;i< l;i++){
    const char = str.charAt(i);
    translation +=capitalize ? char.toUpperCase() : char.toLowerCase();//operador terneario if mas bonito
}

}//esta funcion se usa para mandarla hablar de otro lado
if(str=reverse(str)){
    return minmay(str);

}



console.log(platzom("programar"));//ejemplo1
console.log(platzom("zorra"));//ejemplo2
console.log(platzom("palabrademasdediezz"));//ejemplo3







//...........argumento se utiliza ya cuando la funcion se esta usando