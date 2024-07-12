
//*** SPRINT 1***

//--Any y Unknow
let selector;
let a :any;
let desconocio :unknown;
desconocio="tamaño de la cadena";

if (typeof desconocio ==="string"){

    console.log("La variale es una Cadena de Texto y su tamaño es: "+desconocio.length );
    a = 50;
}

//--Enumeraciones 
enum Direcciones {
    up="ARRIBA",
    down="ABAJO",
    left="IZQUIERDA",
    right="DERECHA"
}

console.log("La traduccion de las direcciones de Ingles a Español son: \n"+"UP: "+ Direcciones.up+"\n"+"DOWN: "+ Direcciones.down+"\n"+"LEFT: "+
    Direcciones.left+"\n"+"RIGHT: "+ Direcciones.right);


//--Uniones

let cadena_o_entero: string | number=110;
cadena_o_entero="Cadena de texo";

type uno_al_cinco = 1 | 2 | 3 | 4 | 5;

let ParImpar : "pares" |"Impares";

//coleccion de tipo arreglo
var numeros =[10,50,87,33,71,88];

var numerospares=numeros.filter(function(numeros){
    return numeros % 2 === 0;

})
console.log(ParImpar="pares");
console.log(numerospares);

var numerosimpares=numeros.filter(function(numeros){
    return numeros % 2 != 0;
    
})

console.log(ParImpar="Impares");
console.log(numerosimpares);



//--Intersecciones

type persona = {
    nombre:string;
    edad:number;
    sexo:string;
};

type cliente = {
    ID:number;
    estado:string;
    preferencia:string;
};

type personaCliente = persona & cliente;

const PERSONA_CLIENTE : personaCliente={
    nombre:"Manuel",
    edad:20,
    sexo:"Masculino",
    ID:123,
    estado:"Activo",
    preferencia:"Reservadas"

};

//OTROS TIPOS DE COLECCIONES

//---Tuplas

const coordenadas:[number,number]=[300,870];
const persona:[string,number] = ["Alvaro",40];

//---sets

const nombresUnicos =new Set<string>();
nombresUnicos.add("Paola");
nombresUnicos.add("Francisco");
nombresUnicos.add("Miguel");

console.log(nombresUnicos);

//---mapas

let aliasyclave = new Map<string, number>();
aliasyclave.set("Tulio", 123);
aliasyclave.set("JefeMaestro",558);

//--arreglos de objetos

interface Autos{

    marca:string;
    placa:number;
    año:number;
}

const LoteAuto: Autos[] =[
    {marca:"Toyota",placa:235789,año:2001},
    {marca:"BMW",placa:85969,año:2024},
    {marca:"Duccati",placa:789037,año:2015}
]