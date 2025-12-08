// PRIMER PUNTO

function sumar(num1, num2) {
    return "La suma es "+(num1 + num2);

}
function restar(num1, num2) {
    return "La resta es "+(num1 - num2);
}
function Multiplicacion(num1, num2) {
    return "La Multiplicacion es "+(num1 * num2);
}

const operar = (num1, num2, callback) => {
    return callback(num1, num2) ;
};

console.log( operar(5, 3, sumar) +" suamr" );
console.log( operar(5, 3, restar) +" Resta" );
console.log( operar(5, 3, Multiplicacion) +" Multiplicacion" );

// SEGUNDO PUNTO

const nombres = ["Ana", "Luis", "Sofía", "Carlos"];
// Imprime:
// 1. Ana
// 2. Luis
// 3. Sofía
// 4. Carlos

const i = 0;


for (let i = 0; i < 5; i++) {
nombres.forEach((nombres) => {
        i = i +1;
    
    console.log(i+"."+nombres)});}

// PUNTO TRES

const precios = [100, 200, 300];


const wi = precios.map((precios) => {
    return precios * 1.19;
});
console.log(wi);

// PUNTO CUATRO 

const edades = [12, 18, 20, 15, 30, 8];

const filtered = edades.filter((edades) => {
    return edades >= 18;
});
console.log(filtered);

// PUNTO CINCO 

const productos = [
{ id: 1, nombre: "mouse", precio: 50000 },
{ id: 2, nombre: "teclado", precio: 150000 },
{ id: 3, nombre: "monitor", precio: 900000 }
];

// 1. El producto cuyo nombre sea "teclado" .
// 2. El primer producto con precio mayor a 100.000.

const found = productos.find((productos) => {
    return productos.nombre == "teclado";
});

console.log(found);

const found2 = productos.find((productos) => {
    return productos.precio >= 100000;
});

console.log(found2);

// RETO FINAL 

const estudiantes = [
{ nombre: "Ana", nota: 4.5 },
{ nombre: "Luis", nota: 3.2 },
{ nombre: "Carlos", nota: 2.8 },
{ nombre: "Sofía", nota: 4.8 },
{ nombre: "María", nota: 3.9 }
];

const pre = estudiantes.map((estudiantes) => {
    return estudiantes.nombre;
});
console.log(pre);

// 1. Un array solo con los nombres (map).
// 2. Un array con los estudiantes que aprobaron (filter).
// 3. El primer estudiante con nota mayor o igual a 4.5 (find).

const notaA = estudiantes.filter((estudiante) => {
    return estudiante.nota >= 4;
});
console.log(notaA);


const found3 = estudiantes.find((estudiantes) => {
    return estudiantes.nota >= 4.5;
});

console.log(found3);


