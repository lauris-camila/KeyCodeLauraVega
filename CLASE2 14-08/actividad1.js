// Definir variables que almacenen los siguientes datos:

// Un nombre: "Laura"
// Una edad: 18
// Un precio: $325.000
// Los nombres de tus series favoritas: "Game Of Thrones", "House Of The Dragon", "The Walking Dead"
// Tus películas favoritas, donde cada película debe incluir su nombre, el año de estreno, y una lista con los nombres de sus protagonistas.


let nombre = "Laura";
let edad = 18;
let precio = 325.000;
let seriesFavoritas = ["Game Of Thrones", "House Of The Dragon", "The Walking Dead"];


let peliculas = [
  {
    nombre: "Violet y Finch",
    año: 2018   ,
    protagonistas: ["Theodore Finch", "Violet Markey"],
  },
  {
    nombre: "Enredados",
    año: 2010,
    protagonistas: ["Flynn Rider", "Rapunzel"],
  },
  {
    nombre: "Agente Stone",
    año: 2023,
    protagonistas: ["Gal Gadot", "Jamie Dornan"],
  },
];

// Mostrar todos esos valores por consola.

console.log("Nombre:", nombre);
console.log("Edad:",edad);
console.log("Precio:", precio);
console.log("Series Favoritas:", seriesFavoritas);
console.log("Películas Favoritas:", peliculas);

// Incrementar la edad en 1 y volver a mostrarla.

edad += 1;
console.log("Nueva Edad:", edad);


// Agregar una serie a la lista de series favoritas y volver a mostrarla.

seriesFavoritas.push("Gossip Girl");
console.log("Nueva serie favorita agregada a la lista:", seriesFavoritas);