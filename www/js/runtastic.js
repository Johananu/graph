const nombre="Johana"
const dias= [ //Esto representa a un arreglo[]
 "Lunes",
 "Martes",
 "Miercoles",
 "Jueves",
 "Viernes",
 "Sabado",
 "Domingo"
]

function promedioCorrer (){ //esta es mi funcion 
    const min=5
    const max=15

    return Math.round(Math.random() *(max-min)+min)  //math.round redondea el resultado //me regresa el valor de km que corrí por dia

}
//length me regresa elvalor del arreglo
//refactorizar para disminuir la cantidad de codigo 
//siempre que vayamos a interpolar una variable se pone ` entre ${}
let totalkms=0
const length = dias.length
for(let i=0; i<length;i++){
    const kms = promedioCorrer()
    totalkms+=kms
     promedioCorrer() 
     console.log(`El dia ${dias[i]}, ${nombre} corrio ${kms} kms`)
}

const promediokms= totalkms/length
console.log(`En promedio ${nombre} corrio ${promediokms} kms`)