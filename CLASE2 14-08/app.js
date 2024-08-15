var variable = 1;
let variable2 = 2;
const CONSTANTE = 3;


// Tipos de datos

// let cadena = "Soy una cadena de texto";
// console.log (typeof cadena);
// console.log (cadena);


// let numero = 10;
// console.log (typeof numero);
// console.log (numero);


// let booleano = false; //false
// console.log (typeof booleano);
// console.log (booleano);


// let nulo = null;
// console.log (typeof nulo);
// console.log (nulo);

// let indefinido = undefined;
// console.log (typeof indefinido);
// console.log (indefinido);


// let noEsUnNumero = NaN;
// console.log (typeof noEsUnNumero);
// console.log (noEsUnNumero);




// Tipos de datos de objeto
// const lista = ["Jose", 24, true, ["nose", 5, 8]]; 
// const lista2 = new Array (1, 5, 18)

// console.log(lista [3][0]);

// const objeto = { nombre: "Jose", edad: 24, estaAutenticado: true, elementos: ["nose", 5, 8]};
// console.log(objeto.elementos[2]);


// // * Controles de flujo
// // Operadores

// variable = 5; // asignacion
// console.log(variable);

// let resultado = variable + 2; // suma
// console.log (resultado);

// let resultado2 = variable - 2;

// let contador = 0;
// contador++; //incremento
// contador--; //decremento

// console.log(variable == 5); //igual a
// console.log(variable != 5); //diferente de


// console.log(variable == 5);
// console.log(variable != 5); 


// console.log(3 > 5 ); // mayor que
// console.log(3 < 5 ); // menor que



// console.log(variable == 5 && 3 > 5); //AND
// console.log(variable == 5 ||  3 > 5); //OR



// if (!variable == 5) {
//     console.log("Entro al IF");
// } else if (variable == 5){
//     console.log("Entro a la segunda operacion");
// } else {
//     console.log("Operacion final");
// }

// variable == 6 ? console.log ("Entro al IF") : console.log("No cumple con la condicion");


var variable = 1;
variable = "5";
variable = Math.PI;


switch (variable) {
    case "5":
        console.log("El valor de la variable es 5");
        break;
    
    case Math.PI:
        console.log("El valor de la variable es 3.1416");
        break;

    default:
        console.log("No paso ninguna validacion");
        break;
    
    }